import defaultConfig from '../public/audio/config.json' with { type: 'json' };

const AUDIO_KEY = 'han-restoration-audio-v1';
const clamp = (v, fallback) => typeof v === 'number' && Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : fallback;
export function safeAudioPath(value) {
  return typeof value === 'string' && /^audio\/(?:[\w\-\u3400-\u9fff ]+\/)*[\w\-\u3400-\u9fff .]+\.(?:mp3|m4a|ogg|wav|aac|flac)$/i.test(value) && !value.includes('..') ? value : '';
}
export function audioPreferences(raw = {}) {
  if (!raw || typeof raw !== 'object') raw = {};
  return { music: raw.music !== false, effects: raw.effects !== false, musicVolume: clamp(raw.musicVolume, .35), effectsVolume: clamp(raw.effectsVolume, .58) };
}
export function normalizeAudioConfig(raw = {}) {
  const effects = {};
  for (const key of ['march', 'battle', 'departure', 'victory', 'retreat']) effects[key] = safeAudioPath(raw?.effects?.[key]);
  return { music: { src: safeAudioPath(raw?.music?.src) || 'audio/music/theme.mp3', title: String(raw?.music?.title || '背景音乐').slice(0, 80), volume: clamp(raw?.music?.volume, .35) }, effects };
}

// Deterministic, locally synthesized Foley. These are not recordings of real horses or battles.
export function synthSamples(kind, sampleRate = 44100) {
  const durations = { hoof: .22, metal: 1.05, drum: .85, horn: 1.7, victory: 1.65, retreat: 1.6, rumble: 3 };
  const duration = durations[kind] || .22, data = new Float32Array(Math.ceil(duration * sampleRate));
  let seed = 1771, low = 0;
  for (let i = 0; i < data.length; i++) {
    const t = i / sampleRate;
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const noise = seed / 2147483648 - 1;
    low += .09 * (noise - low);
    let v = 0;
    if (kind === 'hoof') v = .58 * Math.sin(2 * Math.PI * (108 * t - 32 * t * t)) * Math.exp(-t * 30) + low * 1.5 * Math.exp(-t * 36) + (noise - low) * .28 * Math.exp(-t * 110);
    if (kind === 'metal') {
      for (const [f, a, d] of [[677, .27, 5], [1093, .21, 6], [1879, .14, 8], [2939, .09, 10]]) v += a * Math.sin(2 * Math.PI * f * t) * Math.exp(-t * d);
      v += (noise - low) * .2 * Math.exp(-t * 85);
    }
    if (kind === 'drum') v = .64 * Math.sin(2 * Math.PI * (62 * t + 4 * (1 - Math.exp(-t * 22)))) * Math.exp(-t * 5.5) + low * .6 * Math.exp(-t * 21);
    if (kind === 'rumble') v = [.08, .035, .025, .018].reduce((n, a, j) => n + a * Math.sin(2 * Math.PI * [41, 67, 101, 139][j] * t), 0) * (.7 + .3 * Math.sin(2 * Math.PI * t * 4));
    if (['horn', 'victory', 'retreat'].includes(kind)) {
      const f = kind === 'horn' ? 146.83 : kind === 'retreat' ? 130.81 : t < .72 ? 261.63 : 392;
      const envelope = Math.min(1, t / .14) * Math.min(1, (duration - t) / .4);
      v = (Math.sin(2 * Math.PI * f * t) * .3 + Math.sin(2 * Math.PI * f * 2 * t) * .08 + Math.sin(2 * Math.PI * f * 3 * t) * .04) * envelope;
    }
    const edge = kind === 'rumble' ? 1 : Math.min(1, t / .0015, (duration - t) / .008);
    data[i] = Math.max(-.95, Math.min(.95, v * edge));
  }
  return data;
}

export class Soundscape {
  constructor(notify = () => {}, changed = () => {}) {
    this.notify = notify; this.changed = changed; this.enabled = false; this.context = null;
    this.pack = globalThis.__HAN_AUDIO__ || null; this.config = normalizeAudioConfig(this.pack?.config || defaultConfig);
    this.preferences = audioPreferences({ musicVolume: this.config.music.volume });
    try { const raw = localStorage.getItem(AUDIO_KEY); if (raw) this.preferences = audioPreferences(JSON.parse(raw)); } catch (_) {}
    this.phase = 'idle'; this.sources = new Set(); this.buffers = new Map(); this.custom = new Map(); this.events = {};
    this.musicStatus = '点击开启声音后播放'; this.musicError = ''; this.musicRequest = 0; this.suspendedByPage = false;
    this.element = new Audio(); this.element.loop = true; this.element.preload = 'none'; this.element.playsInline = true;
    this.element.addEventListener('playing', () => { this.musicStatus = '循环播放中'; this.musicError = ''; this.changed(); });
    this.element.addEventListener('error', () => { this.musicStatus = '音乐暂不可用'; this.musicError = '请检查 public/' + this.config.music.src + '，或选择本机音乐。'; this.changed(); });
    this.timer = setInterval(() => this.tick(), 80);
    document.addEventListener('visibilitychange', () => this.visibility(document.hidden));
  }
  async configure() {
    if (this.configured) return this.configured;
    this.configured = (async () => {
      if (!this.pack && location.protocol !== 'file:') {
        try { const r = await fetch('audio/config.json', { cache: 'no-cache' }); if (r.ok) this.config = normalizeAudioConfig(await r.json()); } catch (_) {}
      }
      this.changed();
    })();
    return this.configured;
  }
  asset(path) { return this.pack ? this.pack.assets?.[path] || '' : path; }
  ensureContext() {
    if (this.context) return;
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) throw new Error('AudioContext unavailable');
    this.context = new Context(); const c = this.context;
    this.master = c.createGain(); this.master.gain.value = .8;
    const limiter = c.createDynamicsCompressor(); limiter.threshold.value = -12; limiter.ratio.value = 5; limiter.attack.value = .006; limiter.release.value = .18;
    this.analyser = c.createAnalyser(); this.analyser.fftSize = 256;
    this.master.connect(limiter); limiter.connect(this.analyser); this.analyser.connect(c.destination);
    this.musicGain = c.createGain(); this.effectsGain = c.createGain();
    this.musicAnalyser = c.createAnalyser(); this.effectsAnalyser = c.createAnalyser();
    this.musicGain.connect(this.musicAnalyser); this.musicAnalyser.connect(this.master);
    this.effectsGain.connect(this.effectsAnalyser); this.effectsAnalyser.connect(this.master);
    this.musicSource = c.createMediaElementSource(this.element); this.musicSource.connect(this.musicGain);
    for (const kind of ['hoof', 'metal', 'drum', 'horn', 'victory', 'retreat', 'rumble']) {
      const data = synthSamples(kind, c.sampleRate), buffer = c.createBuffer(1, data.length, c.sampleRate);
      buffer.copyToChannel(data, 0); this.buffers.set(kind, buffer);
    }
    this.applyMix(true);
  }
  remember() { try { localStorage.setItem(AUDIO_KEY, JSON.stringify(this.preferences)); } catch (_) {} }
  async enable() {
    this.enabled = true;
    try {
      this.ensureContext(); await this.context.resume();
      if (!this.enabled || document.hidden) return;
      this.applyMix(); this.nextBeat = this.context.currentTime + .04;
      await this.configure();
      if (!this.enabled || document.hidden) return;
      void this.loadEffects(); void this.playMusic();
      if (this.phase !== 'idle') this.setPhase(this.phase, true);
      this.changed();
    } catch (_) { this.enabled = false; this.notify('声音暂不可用，游戏不受影响。'); this.changed(); }
  }
  disable() {
    this.enabled = false; this.musicRequest++; this.element.pause(); this.stopEffects(); this.musicStatus = '声音已关闭';
    if (this.context) { this.master.gain.setValueAtTime(0, this.context.currentTime); void this.context.suspend().catch(() => {}); }
    this.changed();
  }
  toggle() { return this.enabled ? this.disable() : this.enable(); }
  async playMusic() {
    const request = ++this.musicRequest;
    if (!this.enabled || !this.preferences.music || document.hidden) { this.element.pause(); this.musicStatus = this.preferences.music ? '已暂停' : '背景音乐已关闭'; this.changed(); return; }
    const src = this.localMusic || this.asset(this.config.music.src);
    if (!src) { this.musicStatus = '离线版未包含音乐'; this.musicError = '可选择本机音乐，或放入主题曲后重新构建。'; this.changed(); return; }
    if (this.loadedMusic !== src) { this.element.src = src; this.loadedMusic = src; }
    this.musicStatus = '正在准备音乐'; this.changed();
    try {
      await this.element.play();
      if (request !== this.musicRequest) return;
      if (!this.enabled || !this.preferences.music || document.hidden) this.element.pause();
    } catch (error) {
      if (request !== this.musicRequest) return;
      this.musicStatus = error.name === 'NotAllowedError' ? '请再次点击开启音乐' : '音乐暂不可用';
      this.musicError = '检查音乐文件，或选择本机音乐；场景音效仍可使用。'; this.changed();
    }
  }
  setChannel(channel, enabled) {
    this.preferences[channel] = !!enabled; this.remember();
    if (enabled && !this.enabled) { void this.enable(); return; }
    if (channel === 'music') void this.playMusic();
    else if (!enabled) this.stopEffects();
    else if (this.phase !== 'idle') this.setPhase(this.phase, true);
    this.applyMix(); this.changed();
  }
  setVolume(channel, value) {
    const key = channel === 'music' ? 'musicVolume' : 'effectsVolume';
    this.preferences[key] = clamp(Number(value), this.preferences[key]); this.remember(); this.applyMix(); this.changed();
  }
  applyMix(immediate = false) {
    if (!this.context) return;
    const duck = this.phase === 'battle' ? .48 : ['departure', 'march'].includes(this.phase) ? .75 : 1;
    const c = this.context, ramp = (param, value) => { param.cancelScheduledValues(c.currentTime); if (immediate) param.setValueAtTime(value, c.currentTime); else param.setTargetAtTime(value, c.currentTime, .12); };
    ramp(this.master.gain, this.enabled ? .8 : 0);
    ramp(this.musicGain.gain, this.preferences.music ? this.preferences.musicVolume * duck : 0);
    ramp(this.effectsGain.gain, this.preferences.effects ? this.preferences.effectsVolume : 0);
  }
  async loadEffects() {
    if (this.effectsLoading) return this.effectsLoading;
    this.effectsLoading = Promise.all(Object.entries(this.config.effects).map(async ([kind, path]) => {
      const src = path && this.asset(path); if (!src) return;
      try { const r = await fetch(src); if (!r.ok) return; const bytes = await r.arrayBuffer(); if (bytes.byteLength > 16 * 1024 * 1024) return; this.custom.set(kind, await this.context.decodeAudioData(bytes)); } catch (_) {}
    }));
    await this.effectsLoading; this.changed();
  }
  play(buffer, volume = 1, pan = 0, rate = 1, at = this.context?.currentTime, loop = false, kind = '') {
    if (!buffer || !this.context || !this.enabled || !this.preferences.effects || document.hidden || this.context.state !== 'running') return;
    const c = this.context, source = c.createBufferSource(), gain = c.createGain(), stereo = c.createStereoPanner();
    source.buffer = buffer; source.playbackRate.value = rate; source.loop = loop;
    gain.gain.setValueAtTime(0, at); gain.gain.linearRampToValueAtTime(volume, at + .006); stereo.pan.value = Math.min(1, Math.max(-1, pan));
    source.connect(gain); gain.connect(stereo); stereo.connect(this.effectsGain);
    source.onended = () => { this.sources.delete(source); source.disconnect(); gain.disconnect(); stereo.disconnect(); };
    this.sources.add(source); source.start(at); if (!loop) source.stop(at + buffer.duration / rate + .03);
    this.events[kind || 'custom'] = (this.events[kind || 'custom'] || 0) + 1;
    return source;
  }
  stopEffects() { for (const source of this.sources) { try { source.stop(); } catch (_) {} } this.sources.clear(); }
  cue(kind, volume = 1, pan = 0, rate = 1, at) { this.play(this.buffers.get(kind), volume, pan, rate, at ?? this.context?.currentTime, false, kind); }
  setPhase(phase, force = false) {
    if (phase === this.phase && !force) return;
    if (!force) clearTimeout(this.previewTimer);
    this.stopEffects(); this.phase = phase; this.beat = 0; this.nextBeat = (this.context?.currentTime || 0) + .04;
    this.applyMix();
    if (phase === 'idle') { this.changed(); return; }
    const recorded = this.custom.get(phase);
    if (recorded) this.play(recorded, .75, 0, 1, this.context?.currentTime, ['march', 'battle'].includes(phase), phase);
    else if (phase === 'departure') { this.cue('drum', .65); this.cue('horn', .35); }
    else if (phase === 'march' || phase === 'battle') this.play(this.buffers.get('rumble'), .6, 0, 1, this.context?.currentTime, true, 'rumble');
    else if (phase === 'victory' || phase === 'retreat') this.cue(phase, .5);
    this.changed();
  }
  tick() {
    const c = this.context;
    if (!c || c.state !== 'running' || !this.enabled || !this.preferences.effects || document.hidden || !['departure', 'march', 'battle'].includes(this.phase) || this.custom.has(this.phase)) return;
    if (this.nextBeat < c.currentTime) this.nextBeat = c.currentTime + .02;
    while (this.nextBeat < c.currentTime + .16) {
      const n = this.beat++, at = this.nextBeat;
      if (this.phase === 'battle') { this.cue('metal', .22 + (n % 3) * .055, Math.sin(n * 2.1) * .6, .8 + (n % 5) * .11, at); if (n % 3 === 0) this.cue('drum', .25, -.2, 1.5, at + .03); this.nextBeat += .21 + (n % 3) * .06; }
      else { this.cue('hoof', .33, Math.sin(n * .9) * .6, .84 + (n % 4) * .11, at); this.cue('hoof', .18, -Math.sin(n * .9) * .45, 1.13, at + .035); if (n % 8 === 0) this.cue('drum', .23, 0, .92, at); this.nextBeat += [.095, .16, .1, .19][n % 4]; }
    }
  }
  async preview(phase) { if (!this.enabled) await this.enable(); clearTimeout(this.previewTimer); this.setPhase(phase, true); this.previewTimer = setTimeout(() => this.setPhase('idle'), 2600); }
  chooseMusic(file) {
    if (!file || file.size > 40 * 1024 * 1024 || !/\.(mp3|m4a|ogg|wav|aac|flac)$/i.test(file.name)) { this.notify('请选择不超过 40 MB 的音频文件。'); return; }
    this.element.pause(); if (this.localMusic) URL.revokeObjectURL(this.localMusic);
    this.localMusic = URL.createObjectURL(file); this.localTitle = file.name; this.musicError = ''; this.preferences.music = true; this.remember();
    if (!this.enabled) void this.enable(); else void this.playMusic();
    this.notify('已选择本机音乐，仅本次页面有效，不上传文件。'); this.changed();
  }
  async visibility(hidden) {
    this.suspendedByPage = hidden;
    if (!this.context) return;
    if (hidden) { this.musicRequest++; this.element.pause(); this.stopEffects(); await this.context.suspend().catch(() => {}); }
    else if (this.enabled) { await this.context.resume().catch(() => {}); this.nextBeat = this.context.currentTime + .04; if (['march', 'battle', 'departure'].includes(this.phase)) this.setPhase(this.phase, true); void this.playMusic(); }
    this.changed();
  }
  snapshot() {
    const rms = analyser => { if (!analyser || this.context.state !== 'running') return 0; const data = new Float32Array(analyser.fftSize); analyser.getFloatTimeDomainData(data); return Math.sqrt(data.reduce((n, v) => n + v * v, 0) / data.length); };
    return { enabled: this.enabled, ...this.preferences, phase: this.phase, context: this.context?.state || 'not-created', musicStatus: this.musicStatus, musicError: this.musicError, musicTime: this.element.currentTime, musicDuration: Number.isFinite(this.element.duration) ? this.element.duration : null, musicPaused: this.element.paused, title: this.localTitle || this.config.music.title, musicPath: this.config.music.src, embedded: !!this.pack, activeSources: this.sources.size, rms: rms(this.analyser), musicRms: rms(this.musicAnalyser), effectsRms: rms(this.effectsAnalyser), events: { ...this.events } };
  }
}
