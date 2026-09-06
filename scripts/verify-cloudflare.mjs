import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let local = {};
try { local = JSON.parse(await readFile(path.join(root, 'deploy/local.json'), 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const target = process.argv[2] || process.env.HAN_PRODUCTION_URL || local.productionUrl;
assert.ok(target, '请在本机 deploy/local.json 设置 productionUrl，或显式传入验收地址');
const origin = new URL(target);
assert.equal(origin.protocol, 'https:', '公网验收必须使用 HTTPS');
assert.equal(origin.username + origin.password, '', 'URL 不得包含凭据');
const manifest = JSON.parse(await readFile(path.join(root, 'output/cloudflare/manifest.json'), 'utf8'));
const run = promisify(execFile);
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
async function request(file, extra = []) {
  const url = new URL(file, origin);
  const { stdout } = await run('curl', [
    '--silent', '--show-error', '--location', '--proto', '=https', '--proto-redir', '=https',
    '--max-time', '30', ...extra, '--write-out', '\n%{http_code}', url.href
  ], { encoding: 'buffer', maxBuffer: 32 * 1024 * 1024, timeout: 35000 });
  return { body: stdout.subarray(0, -4), status: Number(stdout.subarray(-3).toString()) };
}
const results = [];
const queue = Object.entries(manifest.assets).filter(([file]) => file !== '_headers');
await Promise.all(Array.from({ length: 3 }, async () => {
  while (queue.length) {
    const [file, expected] = queue.shift();
    const { body, status } = await request(file);
    assert.equal(status, 200, file + ' HTTP 状态');
    assert.equal(body.length, expected.bytes, file + ' 文件长度');
    assert.equal(sha256(body), expected.sha256, file + ' SHA-256');
    results.push({ file, status, sha256: expected.sha256, matched: true });
  }
}));
const rejectedPaths = await Promise.all([
  '.env', 'wrangler.jsonc', 'README.md', 'src/main.js',
  'docs/audio-cinematic-verification.md', 'audio/music/README.md', 'audio/missing.mp3'
].map(async file => {
  const { status } = await request(file);
  assert.equal(status, 404, file + ' 不应作为公开文件或首页返回');
  return { file, status };
}));
const headers = (await request('', ['--head'])).body.toString();
assert.match(headers, /x-content-type-options:\s*nosniff/i);
assert.match(headers, /cache-control:[^\r\n]*must-revalidate/i);
const expectedCsp = (await readFile(path.join(root, 'output/cloudflare/site/_headers'), 'utf8'))
  .match(/^\s*Content-Security-Policy:\s*(.+)$/mi)?.[1].trim();
assert.ok(expectedCsp, '发布包必须包含 CSP');
const securityHeaders = await Promise.all(['', 'classic', '404.html'].map(async file => {
  const response = file ? await request(file, ['--head']) : { body: Buffer.from(headers) };
  const raw = response.body.toString();
  const csp = raw.match(/^content-security-policy:\s*([^\r\n]+)/mi)?.[1].trim();
  assert.equal(csp, expectedCsp, (file || '/') + ' CSP 必须与发布包完全一致');
  assert.match(raw, /^x-frame-options:\s*DENY\s*$/mi, (file || '/') + ' 禁止 iframe 嵌入');
  return { file: file || '/', contentSecurityPolicy: csp, xFrameOptions: 'DENY' };
}));
const audioConfig = JSON.parse(await readFile(path.join(root, 'output/cloudflare/site/audio/config.json'), 'utf8'));
let musicRange = null;
if (audioConfig.music.src && manifest.assets[audioConfig.music.src]) {
  const { status, body } = await request(audioConfig.music.src, ['--range', '0-1023']);
  const original = await readFile(path.join(root, 'output/cloudflare/site', audioConfig.music.src));
  // Record actual transport behavior: this host may ignore Range and return the complete MP3.
  // A full response is acceptable for this short looping track only when every byte matches.
  assert.ok(status === 206 || status === 200, '音乐请求必须成功');
  assert.deepEqual(body, status === 206 ? original.subarray(0, 1024) : original);
  musicRange = {
    requested: 'bytes=0-1023', status, bytes: body.length, matched: true,
    transfer: status === 206 ? 'partial' : 'full-file; range not honored'
  };
}
const evidence = {
  checkedAt: new Date().toISOString(), origin: origin.origin,
  version: manifest.version, candidate: manifest.candidate,
  assets: results.sort((a, b) => a.file.localeCompare(b.file)),
  rejectedPaths, headers: 'PASS', securityHeaders, musicRange
};
await writeFile(path.join(root, 'output/cloudflare/http-verification.json'), JSON.stringify(evidence, null, 2) + '\n');
await writeFile(path.join(root, 'output/cloudflare/http-verification-' + origin.hostname + '.json'), JSON.stringify(evidence, null, 2) + '\n');
console.log(JSON.stringify(evidence, null, 2));
