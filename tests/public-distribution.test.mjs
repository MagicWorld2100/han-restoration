import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = file => readFileSync(new URL(file, root), 'utf8');

test('both offline entrypoints exist and the 3D copy embeds no audio', () => {
  assert.ok(existsSync(new URL('再出隆中.html', root)));
  const html = read('再出隆中-三维版.html');
  const raw = html.split('window.__HAN_AUDIO__=')[1]?.split(';</script>')[0];
  assert.ok(raw, 'run npm run build first');
  assert.deepEqual(JSON.parse(raw).assets, {}, 'do not publish locally embedded audio');
});

test('public manifests and deployable output exclude the local-only theme', () => {
  const file = 'audio/music/theme.mp3';
  const release = JSON.parse(read('release-manifest.json'));
  const site = JSON.parse(read('output/cloudflare/manifest.json'));
  assert.equal(release.assets['public/' + file], undefined);
  assert.equal(site.assets[file], undefined);
  assert.ok(!existsSync(new URL('output/cloudflare/site/' + file, root)));
  assert.equal(JSON.parse(read('public/audio/config.json')).music.src, file);
});

test('public deployment config has no implicit production target', () => {
  assert.equal(JSON.parse(read('wrangler.jsonc')).name, undefined);
  const local = JSON.parse(read('deploy/local.example.json'));
  assert.equal(local.productionUrl, '');
  assert.equal(local.lanHost, '');
  assert.equal(local.lanPort, null);
  assert.ok(!read('scripts/verify-cloudflare.mjs').includes('.pages.dev'));
});
