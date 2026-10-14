export const TARGETS = {
  sprint100mSec: 13.0,
  longJumpInches: 168, // 14 ft 0 in
  highJumpInches: 54   // 4 ft 6 in (4.5 ft)
};

export function feetInchesToTotalInches(feet, inches) {
  const f = parseFloat(feet) || 0;
  const i = parseFloat(inches) || 0;
  return Math.round((f * 12 + i) * 10) / 10;
}

export function formatInchesToFeetInches(totalInches) {
  if (!totalInches || totalInches <= 0) return '—';
  const f = Math.floor(totalInches / 12);
  const rem = Math.round((totalInches - f * 12) * 10) / 10;
  return `${f} ft ${rem} in`;
}

export function computeSprintPRs(sprintRecords = []) {
  const bestByDist = { '20m': null, '40m': null, '60m': null, '100m': null };
  const prevByDist = { '20m': null, '40m': null, '60m': null, '100m': null };

  ['20m', '40m', '60m', '100m'].forEach((dist) => {
    const valid = sprintRecords
      .filter((r) => r.distance === dist && parseFloat(r.timeSec) > 0)
      .map((r) => ({ ...r, val: parseFloat(r.timeSec) }));
    if (valid.length > 0) {
      const sorted = [...valid].sort((a, b) => a.val - b.val);
      bestByDist[dist] = sorted[0].val;
      if (valid.length > 1) {
        // Previous best before the all-time best was set, or second-best
        prevByDist[dist] = sorted[1].val;
      }
    }
  });

  return { bestByDist, prevByDist };
}

export function computeJumpPR(records = []) {
  const valid = records
    .filter((r) => parseFloat(r.totalInches) > 0)
    .map((r) => ({ ...r, val: parseFloat(r.totalInches) }));
  if (valid.length === 0) return { bestInches: null, prevBestInches: null, improvementInches: null };
  const sorted = [...valid].sort((a, b) => b.val - a.val);
  const bestInches = sorted[0].val;
  const prevBestInches = sorted.length > 1 ? sorted[1].val : null;
  const improvementInches = prevBestInches !== null ? +(bestInches - prevBestInches).toFixed(1) : null;
  return { bestInches, prevBestInches, improvementInches };
}

export function evaluateDay20Target(metricType, value) {
  if (value === null || value === undefined || value <= 0 || Number.isNaN(value)) {
    return { status: 'pending', badge: '⚪ Not Yet Logged', color: 'text-slate-400', detail: 'Enter attempts above' };
  }
  if (metricType === '100m') {
    if (value < 13.0) {
      return {
        status: 'achieved',
        badge: '🏆 Target achieved',
        color: 'text-emerald-400',
        detail: `${value.toFixed(2)}s beats < 13.00s target by ${(13.0 - value).toFixed(2)}s!`
      };
    }
    if (value <= 13.6) {
      return {
        status: 'close',
        badge: '⚠️ Close to target',
        color: 'text-amber-400',
        detail: `${(value - 12.99).toFixed(2)}s away from breaking 13.00s`
      };
    }
    return {
      status: 'not_yet',
      badge: '🔴 Target not yet achieved',
      color: 'text-rose-400',
      detail: `Gap: ${(value - 13.0).toFixed(2)} sec to < 13.00s target`
    };
  }

  if (metricType === 'longJump') {
    if (value >= 168) {
      return {
        status: 'achieved',
        badge: '🏆 Target achieved',
        color: 'text-emerald-400',
        detail: `${formatInchesToFeetInches(value)} exceeds ≥ 14 ft target!`
      };
    }
    if (value >= 156) {
      return {
        status: 'close',
        badge: '⚠️ Close to target',
        color: 'text-amber-400',
        detail: `${(168 - value).toFixed(1)} in away from 14 ft 0 in`
      };
    }
    return {
      status: 'not_yet',
      badge: '🔴 Target not yet achieved',
      color: 'text-rose-400',
      detail: `Gap: ${(168 - value).toFixed(1)} in to 14 ft target`
    };
  }

  if (metricType === 'highJump') {
    if (value >= 54) {
      return {
        status: 'achieved',
        badge: '🏆 Target achieved',
        color: 'text-emerald-400',
        detail: `${formatInchesToFeetInches(value)} clears ≥ 4.5 ft (4 ft 6 in) target!`
      };
    }
    if (value >= 50) {
      return {
        status: 'close',
        badge: '⚠️ Close to target',
        color: 'text-amber-400',
        detail: `${(54 - value).toFixed(1)} in away from 4 ft 6 in`
      };
    }
    return {
      status: 'not_yet',
      badge: '🔴 Target not yet achieved',
      color: 'text-rose-400',
      detail: `Gap: ${(54 - value).toFixed(1)} in to 4 ft 6 in target`
    };
  }
  return { status: 'pending', badge: '⚪ Pending', color: 'text-slate-400', detail: '' };
}
