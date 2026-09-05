export const CAMPAIGN_PHASES = Object.freeze([
  { id: 'departure', seconds: 3.0, title: '旌旗出关', detail: '骑队先行，步卒与辎重随后' },
  { id: 'march', seconds: 5.0, title: '兵行山河', detail: '沿粮道推进，保持队列与补给' },
  { id: 'battle', seconds: 6.0, title: '两军接阵', detail: '前阵交锋，骑队掩护两翼' },
  { id: 'aftermath', seconds: 2.4, title: '战线渐定', detail: '收拢队伍，等待前线军报' }
]);
export const CAMPAIGN_DURATION = CAMPAIGN_PHASES.reduce((n, p) => n + p.seconds, 0);

// Visual time is independent of the rule engine. Skipping never applies a decision.
export function campaignFrame(elapsed, reduced = false) {
  const duration = reduced ? 1.6 : CAMPAIGN_DURATION;
  const progress = Math.min(1, Math.max(0, Number.isFinite(elapsed) ? elapsed / duration : 0));
  const time = progress * CAMPAIGN_DURATION;
  let start = 0;
  for (let i = 0; i < CAMPAIGN_PHASES.length; i++) {
    const phase = CAMPAIGN_PHASES[i];
    if (time < start + phase.seconds || i === CAMPAIGN_PHASES.length - 1) {
      return { ...phase, index: i, progress, local: Math.min(1, (time - start) / phase.seconds), done: progress === 1 };
    }
    start += phase.seconds;
  }
}
