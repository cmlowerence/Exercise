import React, { useState } from 'react';
import {
  feetInchesToTotalInches,
  formatInchesToFeetInches,
  evaluateDay20Target
} from '../utils/recordUtils';

export function FinalDay20TestPanel({
  sprintRecords,
  longJumpRecords,
  highJumpRecords,
  onAddSprint,
  onAddLongJump,
  onAddHighJump,
  onStartRestTimer
}) {
  // 100m attempts
  const [s100Att1, setS100Att1] = useState('');
  const [s100Att2, setS100Att2] = useState('');

  // Long Jump 4 attempts (ft / in)
  const [ljAttempts, setLjAttempts] = useState([
    { ft: '', in: '' },
    { ft: '', in: '' },
    { ft: '', in: '' },
    { ft: '', in: '' }
  ]);

  // High Jump height attempts
  const [hjAttempts, setHjAttempts] = useState([
    { ft: '4', in: '0', cleared: true },
    { ft: '4', in: '3', cleared: true },
    { ft: '4', in: '6', cleared: false }
  ]);

  const [savedBanner, setSavedBanner] = useState('');

  // Compute best 100m from inputs or stored records
  const entered100m = [parseFloat(s100Att1), parseFloat(s100Att2)].filter((v) => v > 0);
  const stored100m = sprintRecords
    .filter((r) => r.distance === '100m' && parseFloat(r.timeSec) > 0)
    .map((r) => parseFloat(r.timeSec));
  const best100m = [...entered100m, ...stored100m].length
    ? Math.min(...entered100m, ...stored100m)
    : null;

  // Compute best Long Jump
  const enteredLJInches = ljAttempts
    .map((a) => feetInchesToTotalInches(a.ft, a.in))
    .filter((v) => v > 0);
  const storedLJInches = longJumpRecords
    .map((r) => parseFloat(r.totalInches))
    .filter((v) => v > 0);
  const bestLJInches = [...enteredLJInches, ...storedLJInches].length
    ? Math.max(...enteredLJInches, ...storedLJInches)
    : null;

  // Compute best High Jump
  const enteredHJInches = hjAttempts
    .filter((a) => a.cleared)
    .map((a) => feetInchesToTotalInches(a.ft, a.in))
    .filter((v) => v > 0);
  const storedHJInches = highJumpRecords
    .map((r) => parseFloat(r.totalInches))
    .filter((v) => v > 0);
  const bestHJInches = [...enteredHJInches, ...storedHJInches].length
    ? Math.max(...enteredHJInches, ...storedHJInches)
    : null;

  const eval100m = evaluateDay20Target('100m', best100m);
  const evalLJ = evaluateDay20Target('longJump', bestLJInches);
  const evalHJ = evaluateDay20Target('highJump', bestHJInches);

  const handleSaveOfficialTest = () => {
    entered100m.forEach((t, idx) => {
      onAddSprint({ distance: '100m', timeSec: t, attempts: idx + 1, day: 20, note: 'Day 20 Final Test' });
    });
    enteredLJInches.forEach((inches, idx) => {
      onAddLongJump({
        totalInches: inches,
        attempts: idx + 1,
        day: 20,
        note: `Day 20 Final Test Attempt ${idx + 1}`
      });
    });
    enteredHJInches.forEach((inches, idx) => {
      onAddHighJump({
        totalInches: inches,
        attempts: idx + 1,
        day: 20,
        note: 'Day 20 Final Test Cleared'
      });
    });
    setSavedBanner('Official Day 20 Final Test results saved to Personal Records & Progress!');
    setTimeout(() => setSavedBanner(''), 4000);
  };

  return (
    <div className="bg-gradient-to-b from-amber-500/15 via-slate-900 to-slate-900 border-2 border-amber-400/50 rounded-3xl p-4 mb-5 shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
          DAY 20 CHAMPIONSHIP EVALUATION
        </span>
        <button
          type="button"
          onClick={() => onStartRestTimer(240, 'Official Attempt Recovery (4:00)')}
          className="text-xs font-bold text-amber-300 underline"
        >
          ⏱ 4m Recovery Timer
        </button>
      </div>

      <h3 className="text-lg font-extrabold text-white mb-1">🏆 FINAL PERFORMANCE TEST</h3>
      <p className="text-xs text-slate-300 mb-4 leading-relaxed">
        Record your official Day 20 attempts below. Note: 20 days builds explosive neural drive and elastic stiffness—continued consistent training beyond Day 20 will further compound your speed and jump standards.
      </p>

      {/* 1. 100 METER SPRINT */}
      <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-extrabold uppercase text-white">🏃 100 METER SPRINT</span>
          <span className="text-xs font-mono text-lime-400">Target: &lt; 13.00 sec</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Attempt 1 (sec)</label>
            <input
              type="number"
              step="0.01"
              placeholder="13.15"
              value={s100Att1}
              onChange={(e) => setS100Att1(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Attempt 2 (sec)</label>
            <input
              type="number"
              step="0.01"
              placeholder="12.94"
              value={s100Att2}
              onChange={(e) => setS100Att2(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Best Time</label>
            <div className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono font-bold text-lime-400">
              {best100m ? `${best100m.toFixed(2)}s` : '—'}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-800/80">
          <span className={`font-extrabold ${eval100m.color}`}>{eval100m.badge}</span>
          <span className="text-[11px] text-slate-400">{eval100m.detail}</span>
        </div>
      </div>

      {/* 2. LONG JUMP */}
      <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-extrabold uppercase text-white">🦘 LONG JUMP</span>
          <span className="text-xs font-mono text-lime-400">Target: ≥ 14 ft 0 in</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {ljAttempts.map((att, idx) => (
            <div key={idx} className="p-2 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="text-[10px] text-slate-400 mb-1">Attempt {idx + 1}</div>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="ft"
                  value={att.ft}
                  onChange={(e) => {
                    const next = [...ljAttempts];
                    next[idx] = { ...next[idx], ft: e.target.value };
                    setLjAttempts(next);
                  }}
                  className="w-1/2 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs text-white font-mono"
                />
                <input
                  type="number"
                  placeholder="in"
                  value={att.in}
                  onChange={(e) => {
                    const next = [...ljAttempts];
                    next[idx] = { ...next[idx], in: e.target.value };
                    setLjAttempts(next);
                  }}
                  className="w-1/2 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-xs text-white font-mono"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-400">Best Distance:</span>
          <span className="font-mono font-bold text-lime-400">
            {formatInchesToFeetInches(bestLJInches)}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-800/80">
          <span className={`font-extrabold ${evalLJ.color}`}>{evalLJ.badge}</span>
          <span className="text-[11px] text-slate-400">{evalLJ.detail}</span>
        </div>
      </div>

      {/* 3. HIGH JUMP */}
      <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-extrabold uppercase text-white">⬆️ HIGH JUMP</span>
          <span className="text-xs font-mono text-lime-400">Target: ≥ 4.5 ft (4 ft 6 in)</span>
        </div>
        <div className="space-y-1.5 mb-2">
          {hjAttempts.map((att, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-[10px] text-slate-400 w-14">Bar #{idx + 1}</span>
              <input
                type="number"
                placeholder="ft"
                value={att.ft}
                onChange={(e) => {
                  const next = [...hjAttempts];
                  next[idx] = { ...next[idx], ft: e.target.value };
                  setHjAttempts(next);
                }}
                className="w-16 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-white font-mono"
              />
              <span className="text-xs text-slate-400">ft</span>
              <input
                type="number"
                placeholder="in"
                value={att.in}
                onChange={(e) => {
                  const next = [...hjAttempts];
                  next[idx] = { ...next[idx], in: e.target.value };
                  setHjAttempts(next);
                }}
                className="w-16 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-white font-mono"
              />
              <span className="text-xs text-slate-400">in</span>
              <button
                type="button"
                onClick={() => {
                  const next = [...hjAttempts];
                  next[idx] = { ...next[idx], cleared: !next[idx].cleared };
                  setHjAttempts(next);
                }}
                className={`ml-auto px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                  att.cleared
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}
              >
                {att.cleared ? '✓ Cleared' : '✕ Missed'}
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setHjAttempts([...hjAttempts, { ft: '4', in: '8', cleared: true }])}
            className="text-[11px] font-bold text-cyan-400 hover:underline"
          >
            + Add Bar Height Attempt
          </button>
        </div>
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-400">Best Cleared Height:</span>
          <span className="font-mono font-bold text-lime-400">
            {formatInchesToFeetInches(bestHJInches)}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-800/80">
          <span className={`font-extrabold ${evalHJ.color}`}>{evalHJ.badge}</span>
          <span className="text-[11px] text-slate-400">{evalHJ.detail}</span>
        </div>
      </div>

      {savedBanner && (
        <div className="mb-3 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-bold text-center">
          {savedBanner}
        </div>
      )}

      <button
        type="button"
        onClick={handleSaveOfficialTest}
        className="w-full py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg"
      >
        💾 Save Official Final Test Records
      </button>
    </div>
  );
}
