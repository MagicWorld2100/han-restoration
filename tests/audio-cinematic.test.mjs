import test from 'node:test';
import assert from 'node:assert/strict';
import { Soundscape, audioPreferences, normalizeAudioConfig, safeAudioPath, synthSamples } from '../src/audio.mjs';
import { CAMPAIGN_DURATION, campaignFrame } from '../src/cinematic.mjs';
import { E, createScenario, serialize, restore } from '../src/game.mjs';

test('sound preferences preserve mute, zero volume, and reject invalid values', () => {
  assert.deepEqual(audioPreferences({ music: false, effects: false, musicVolume: 0, effectsVolume: 0 }), { music: false, effects: false, musicVolume: 0, effectsVolume: 0 });
  assert.equal(audioPreferences({ musicVolume: Infinity }).musicVolume, .35);
  assert.equal(audioPreferences({ effectsVolume: 9 }).effectsVolume, 1);
  assert.equal(audioPreferences({ effectsVolume: -2 }).effectsVolume, 0);
  assert.equal(audioPreferences(null).music, true);
});
test('audio paths stay in local audio assets and do not accept remote or traversal paths', () => {
  assert.equal(safeAudioPath('audio/music/山河.mp3'), 'audio/music/山河.mp3');
  for (const path of ['https://example.com/song.mp3', '../secret.mp3', 'audio/../secret.mp3', 'audio/%2e%2e/private.mp3', '/etc/theme.mp3', 'audio/track.exe']) assert.equal(safeAudioPath(path), '');
  assert.equal(normalizeAudioConfig({ effects: { march: 'audio/sfx/march.ogg' } }).effects.march, 'audio/sfx/march.ogg');
});
test('all synthesized Foley is non-silent, finite, bounded and deterministic', () => {
  for (const kind of ['hoof', 'metal', 'drum', 'horn', 'victory', 'retreat', 'rumble']) {
    const data = synthSamples(kind, 22050);
    assert.ok(data.length >= 4000);
    let energy = 0;
    for (const n of data) { assert.ok(Number.isFinite(n)); assert.ok(Math.abs(n) <= .951); energy += n * n; }
    assert.ok(Math.sqrt(energy / data.length) > .005, kind + ' should have audible signal');
    assert.deepEqual(data, synthSamples(kind, 22050));
  }
});
test('cinematic phase boundaries are ordered, finite, and finish exactly once', () => {
  assert.equal(campaignFrame(0).id, 'departure');
  assert.equal(campaignFrame(3).id, 'march');
  assert.equal(campaignFrame(8).id, 'battle');
  assert.equal(campaignFrame(14).id, 'aftermath');
  assert.equal(campaignFrame(CAMPAIGN_DURATION).done, true);
  assert.equal(campaignFrame(999).progress, 1);
  assert.equal(campaignFrame(-1).progress, 0);
  assert.equal(campaignFrame(NaN).progress, 0);
});
test('restoring an effect channel does not cancel the active preview stop timer', async () => {
  let stopped = false;
  const subject = { phase: 'battle', previewTimer: setTimeout(() => { stopped = true; }, 10), stopEffects() {}, applyMix() {}, changed() {}, custom: new Map(), buffers: new Map(), play() {} };
  Soundscape.prototype.setPhase.call(subject, 'battle', true);
  await new Promise(resolve => setTimeout(resolve, 25));
  assert.equal(stopped, true);
});
test('reduced-motion version preserves phase order with a shorter total duration', () => {
  const phases = new Set();
  for (let t = 0; t <= 1.61; t += .02) phases.add(campaignFrame(t, true).id);
  assert.deepEqual([...phases], ['departure', 'march', 'battle', 'aftermath']);
  assert.equal(campaignFrame(1.6, true).done, true);
});
test('cinematics and skipping cannot repeat the already committed campaign or charge grain', () => {
  const first = E.step(createScenario('tutorial'), 'campaign:long');
  assert.equal(first.ok, true);
  const raw = serialize('tutorial', first.state);
  for (let t = 0; t < 30; t += .1) campaignFrame(t);
  campaignFrame(CAMPAIGN_DURATION); campaignFrame(CAMPAIGN_DURATION);
  assert.equal(serialize('tutorial', first.state), raw);
  const resumed = restore(raw);
  assert.equal(resumed.state.history.length, 1);
  assert.equal(resumed.state.grain, 74);
  assert.equal(resumed.state.year, 230);
});
