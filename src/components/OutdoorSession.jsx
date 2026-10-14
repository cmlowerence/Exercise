import React, { useState } from 'react';
import { feetInchesToTotalInches, formatInchesToFeetInches } from '../utils/recordUtils';

export default function OutdoorSession({
  dayNum = 7,
  sprintRecords = [],
  longJumpRecords = [],
  highJumpRecords = [],
  onAddSprint,
  onAddLongJump,
  onAddHighJump,
  onStartRestTimer
}) {
  // Sprint inputs
  const [sprintDist, setSprintDist] = useState('20m');
  const [sprintTime, setSprintTime] = useState('');
  const [sprintAttempts, setSprintAttempts] = useState('1');

  // Long jump inputs
  const [ljApproachCount, setLjApproachCount] = useState('6');
  const [ljJumpCount, setLjJumpCount] = useState('5');
  const [ljBestFt, setLjBestFt] = useState('');
  const [ljBestIn, setLjBestIn] = useState('');

  // High jump inputs
  const [hjApproachCount, setHjApproachCount] = useState('5');
  const [hjJumpCount, setHjJumpCount] = useState('6');
  const [hjBestFt, setHjBestFt] = useState('');
  const [hjBestIn, setHjBestIn] = useState('');

  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleLogSprint = (e) => {
    e.preventDefault();
    const t = parseFloat(sprintTime);
    if (!t || t <= 0) return;
    onAddSprint({
      distance: sprintDist,
      timeSec: t,
      attempts: parseInt(sprintAttempts, 10) || 1,
      day: dayNum
    });
    setSprintTime('');
    showToast(`Logged ${sprintDist} sprint: ${t.toFixed(2)} sec!`);
  };

  const handleLogLongJump = (e) => {
    e.preventDefault();
    const totalInches = feetInchesToTotalInches(ljBestFt, ljBestIn);
    if (totalInches <= 0) return;
    onAddLongJump({
      totalInches,
      approachRuns: parseInt(ljApproachCount, 10) || 6,
      attempts: parseInt(ljJumpCount, 10) || 5,
      day: dayNum
    });
    setLjBestFt('');
    setLjBestIn('');
    showToast(`Logged Long Jump best: ${formatInchesToFeetInches(totalInches)}!`);
  };

  const handleLogHighJump = (e) => {
    e.preventDefault();
    const totalInches = feetInchesToTotalInches(hjBestFt, hjBestIn);
    if (totalInches <= 0) return;
    onAddHighJump({
      totalInches,
      approachRuns: parseInt(hjApproachCount, 10) || 5,
      attempts: parseInt(hjJumpCount, 10) || 6,
      day: dayNum
    });
    setHjBestFt('');
    setHjBestIn('');
    showToast(`Logged High Jump best: ${formatInchesToFeetInches(totalInches)}!`);
  };

  return (
    <div className="bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-950 border-2 border-cyan-400/50 rounded-3xl p-4 mb-5 shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-cyan-400 text-slate-950">
          🏟️ OUTDOOR PERFORMANCE DAY
        </span>
        <button
          type="button"
          onClick={() => onStartRestTimer(210, 'Max Effort Track Recovery (3:30)')}
          className="px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold"
        >
          ⏱ 3:30 Track Rest
        </button>
      </div>

      <h3 className="text-lg font-extrabold text-white mb-1">
        Sunday Track & Field Performance Logger
      </h3>
      <p className="text-xs text-slate-300 mb-4">
        Full recovery (3–5 min) between maximal efforts. Log your best times and marks from today’s outdoor ground session.
      </p>

      {toast && (
        <div className="mb-3 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 text-xs font-bold text-center">
          ✓ {toast}
        </div>
      )}

      {/* SECTION 1: SPRINT */}
      <form onSubmit={handleLogSprint} className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 mb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-extrabold text-white">🏃 SPRINT (20m • 40m • 60m • 100m)</div>
          <span className="text-[11px] text-cyan-400 font-semibold">4×20m + 3×40m (90–95%)</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 mb-2.5">
          {['20m', '40m', '60m', '100m'].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setSprintDist(d)}
              className={`py-1.5 rounded-lg text-xs font-extrabold border ${
                sprintDist === d
                  ? 'bg-cyan-400 text-slate-950 border-cyan-400'
                  : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Best {sprintDist} (sec)</label>
            <input
              type="number"
              step="0.01"
              placeholder={sprintDist === '20m' ? '3.10' : sprintDist === '40m' ? '5.45' : '12.95'}
              value={sprintTime}
              onChange={(e) => setSprintTime(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Reps Run</label>
            <input
              type="number"
              value={sprintAttempts}
              onChange={(e) => setSprintAttempts(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs"
            >
              + Log {sprintDist}
            </button>
          </div>
        </div>
      </form>

      {/* SECTION 2: LONG JUMP */}
      <form onSubmit={handleLogLongJump} className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 mb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm font-extrabold text-white">🦘 LONG JUMP</div>
          <span className="text-[11px] text-lime-400 font-mono">Target ≥ 14 ft</span>
        </div>
        <p className="text-[11px] text-slate-400 mb-2.5">
          Focus: Approach (5–8 run-throughs) → controlled final steps → powerful take-off → knee drive → landing (4–6 jumps).
        </p>

        <div className="grid grid-cols-4 gap-2 mb-2">
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Approaches</label>
            <input
              type="number"
              value={ljApproachCount}
              onChange={(e) => setLjApproachCount(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Full Jumps</label>
            <input
              type="number"
              value={ljJumpCount}
              onChange={(e) => setLjJumpCount(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Best (ft)</label>
            <input
              type="number"
              placeholder="13"
              value={ljBestFt}
              onChange={(e) => setLjBestFt(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Best (in)</label>
            <input
              type="number"
              placeholder="8"
              value={ljBestIn}
              onChange={(e) => setLjBestIn(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-1.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold text-xs"
        >
          + Save Long Jump Best Mark
        </button>
      </form>

      {/* SECTION 3: HIGH JUMP */}
      <form onSubmit={handleLogHighJump} className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800">
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm font-extrabold text-white">⬆️ HIGH JUMP</div>
          <span className="text-[11px] text-lime-400 font-mono">Target ≥ 4.5 ft (4'6")</span>
        </div>
        <p className="text-[11px] text-slate-400 mb-2.5">
          Focus: 4–6 curved approaches + 4–8 jumps focusing on penultimate step and vertical take-off plant.
        </p>

        <div className="grid grid-cols-4 gap-2 mb-2">
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Approaches</label>
            <input
              type="number"
              value={hjApproachCount}
              onChange={(e) => setHjApproachCount(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Jumps</label>
            <input
              type="number"
              value={hjJumpCount}
              onChange={(e) => setHjJumpCount(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Height (ft)</label>
            <input
              type="number"
              placeholder="4"
              value={hjBestFt}
              onChange={(e) => setHjBestFt(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
          <div>
            <label className="block text-[10px] text-slate-400 mb-1">Height (in)</label>
            <input
              type="number"
              placeholder="4"
              value={hjBestIn}
              onChange={(e) => setHjBestIn(e.target.value)}
              className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white font-mono"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs"
        >
          + Save High Jump Best Height
        </button>
      </form>
    </div>
  );
}
