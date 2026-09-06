import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = file => readFileSync(new URL('../' + file, import.meta.url), 'utf8');
const headers = read('deploy/cloudflare/_headers');
const policy = headers.match(/^\s*Content-Security-Policy:\s*(.+)$/mi)?.[1];
const directives = Object.fromEntries((policy || '').split(';').filter(s => s.trim()).map(s => {
  const [name, ...sources] = s.trim().split(/\s+/);
  return [name, sources];
}));

test('CSP restricts scripts to self, with no inline handlers or eval allowance', () => {
  assert.match(headers, /^\/\*\s*\n/);
  assert.deepEqual(directives['default-src'], ["'self'"]);
  assert.deepEqual(directives['script-src'], ["'self'"]);
  assert.deepEqual(directives['script-src-attr'], ["'none'"]);
  assert.ok(!policy.includes("'unsafe-eval'"));
});

test('framing, plugins, base changes and form submissions are disabled', () => {
  for (const key of ['frame-ancestors', 'frame-src', 'object-src', 'base-uri', 'form-action', 'worker-src']) {
    assert.deepEqual(directives[key], ["'none'"]);
  }
  assert.match(headers, /^\s*X-Frame-Options: DENY\s*$/m);
});

test('local music and generated pictures remain allowed without external connections', () => {
  assert.deepEqual(directives['media-src'], ["'self'", 'blob:']);
  assert.deepEqual(directives['img-src'], ["'self'", 'data:']);
  assert.deepEqual(directives['connect-src'], ["'self'"]);
  // Existing generated UI and Three.js labels use inline styles, not inline scripts.
  assert.deepEqual(directives['style-src'], ["'self'", "'unsafe-inline'"]);
});

for (const file of ['public/index.html', 'public/classic.html']) {
  test(file + ' has only external scripts and no inline event handlers', () => {
    const html = read(file);
    assert.doesNotMatch(html, /\son[a-z]+\s*=/i);
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      assert.match(match[1], /\bsrc=["'][^"']+["']/);
      assert.equal(match[2].trim(), '');
    }
  });
}

test('fallback reload listener is installed before constructing the 3D world', () => {
  const main = read('src/main.js');
  const listener = "$('reload-game')";
  const position = main.indexOf(listener + ".addEventListener('click',()=>location.reload())");
  assert.ok(position >= 0 && position < main.indexOf('world=new World('));
  assert.match(read('public/index.html'), /id="reload-game"/);
});
