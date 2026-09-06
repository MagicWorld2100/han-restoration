import { readFile, writeFile, mkdir, realpath, readdir, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeAudioConfig } from '../src/audio.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = await realpath(path.join(root, 'public'));
const manifest = JSON.parse(await readFile(path.join(root, 'release-manifest.json'), 'utf8'));
const config = normalizeAudioConfig(JSON.parse(await readFile(path.join(publicRoot, 'audio/config.json'), 'utf8')));
const files = [
  'index.html', '3d/world.css', '3d/world.bundle.js', '3d/THREE-LICENSE.txt',
  'engine.js', 'classic.html', 'app.js', 'style.css', 'audio/config.json'
];
// Public redistribution rights for the current theme were not verified or authorized for this source import.
// Therefore the asset and its embedded form are excluded from the public repository.
// Match build.mjs's missing-audio fallback, but never hide a missing recorded asset.
for (const file of new Set([config.music.src, ...Object.values(config.effects)].filter(Boolean))) {
  try { await lstat(path.join(publicRoot, file)); }
  catch (error) {
    if (error.code === 'ENOENT' && !manifest.assets['public/' + file]) {
      console.log('未分发可选音频，保留游戏内回退：' + file);
      continue;
    }
    throw error;
  }
  files.push(file);
}
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const payloads = new Map();
for (const file of files) {
  const source = await realpath(path.join(publicRoot, file));
  if (!source.startsWith(publicRoot + path.sep)) throw new Error('拒绝发布目录外文件：' + file);
  const bytes = await readFile(source);
  const expected = manifest.assets['public/' + file];
  if (!expected || expected.bytes !== bytes.length || expected.sha256 !== digest(bytes)) {
    throw new Error('构建指纹不匹配，请重新构建：' + file);
  }
  if (bytes.length > 25 * 1024 * 1024) throw new Error('文件超过 Pages 的 25 MiB 上限：' + file);
  payloads.set(file, bytes);
}
payloads.set('release.json', Buffer.from(JSON.stringify({
  version: manifest.version, candidate: manifest.candidate,
  assets: Object.fromEntries(files.map(file => [file, manifest.assets['public/' + file]]))
}, null, 2) + '\n'));
for (const file of ['_headers', '404.html']) {
  payloads.set(file, await readFile(path.join(root, 'deploy/cloudflare', file)));
}

// Only copy explicitly selected runtime assets. Never recursively upload public/ or the workspace.
// Refuse unexpected old files instead of deleting them or silently publishing them.
const output = path.join(root, 'output/cloudflare/site');
await mkdir(output, { recursive: true });
if (await realpath(output) !== output) throw new Error('发布目录不能通过符号链接指向其他位置');
async function checkOutput(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix + entry.name;
    if (entry.isSymbolicLink()) throw new Error('发布目录包含符号链接：' + relative);
    if (entry.isDirectory()) await checkOutput(path.join(directory, entry.name), relative + '/');
    else if (!entry.isFile() || !payloads.has(relative)) throw new Error('发布目录有未授权文件，请先检查并移走：' + relative);
  }
}
await checkOutput(output);
const deployedAssets = {};
for (const [file, bytes] of payloads) {
  const target = path.join(output, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, bytes);
  deployedAssets[file] = { bytes: bytes.length, sha256: digest(bytes) };
}
// This evidence is deliberately outside the uploaded directory.
await writeFile(path.join(root, 'output/cloudflare/manifest.json'), JSON.stringify({
  version: manifest.version, candidate: manifest.candidate, assets: deployedAssets
}, null, 2) + '\n');
console.log(JSON.stringify({
  version: manifest.version, candidate: manifest.candidate,
  directory: output, files: payloads.size,
  bytes: [...payloads.values()].reduce((sum, bytes) => sum + bytes.length, 0)
}, null, 2));
