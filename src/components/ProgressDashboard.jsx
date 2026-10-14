import React, { useState } from 'react';
import {
  calculateStreak,
  countTotalCompletedExercises
} from '../utils/progressUtils';
import {
  computeSprintPRs,
  computeJumpPR,
  formatInchesToFeetInches,
  feetInchesToTotalInches
} from '../utils/recordUtils';
import ProgressBar from './ProgressBar';

function SimpleLineChart({ dataPoints = [], unit = 's', lowerIsBetter = true, targetLine = null }) {
  if (!dataPoints.length) {
    return (
      <div className="h-36 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xs text-slate-500">
        No records logged yet — use the Quick Logger or Outdoor Session to add entries.
      </div>
    );
  }

  const values = dataPoints.map((d) => d.val);
  const allVals = targetLine ? [...values, targetLine] : values;
  const minVal = Math.min(...allVals) * 0.96;
  const maxVal = Math.max(...allVals) * 1.04 || 1;
  const width = 320;
  const height = 130;
  const padX = 28;
  const padY = 20;

  const getX = (idx) =>
    dataPoints.length === 1
      ? width / 2
      : padX + (idx / (dataPoints.length - 1)) * (width - padX * 2);

  const getY = (val) => {
    const ratio = (val - minVal) / (maxVal - minVal || 1);
    return height - padY - ratio * (height - padY * 2);
  };

  const pointsStr = dataPoints.map((d, i) => `${getX(i)},${getY(d.val)}`).join(' ');

  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-3">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-36 overflow-visible">
        {targetLine && (
          <>
            <line
              x1={padX}
              y1={getY(targetLine)}
              x2={width - padX}
              y2={getY(targetLine)}
              stroke="#a3e635"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            <text
              x={width - padX}
              y={getY(targetLine) - 4}
              textAnchor="end"
              fill="#a3e635"
              fontSize="9"
              fontWeight="bold"
            >
              Target: {targetLine}{unit}
            </text>
          </>
        )}

        <polyline
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={pointsStr}
        />

        {dataPoints.map((d, i) => (
          <g key={i}>
            <circle cx={getX(i)} cy={getY(d.val)} r="4" fill="#a3e635" />
            <text
              x={getX(i)}
              y={getY(d.val) - 7}
              textAnchor="middle"
              fill="#f8fafc"
              fontSize="9"
              fontWeight="bold"
            >
              {d.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function ProgressDashboard({
  completedDays,
  exerciseLogs,
  sprintRecords,
  longJumpRecords,
  highJumpRecords,
  onAddSprint,
  onAddLongJump,
  onAddHighJump
}) {
  const [selectedSprintDist, setSelectedSprintDist] = useState('100m');
  const [quickDist, setQuickDist] = useState('100m');
  const [quickTime, setQuickTime] = useState('');
  const [quickLjFt, setQuickLjFt] = useState('');
  const [quickLjIn, setQuickLjIn] = useState('');
  const [quickHjFt, setQuickHjFt] = useState('');
  const [quickHjIn, setQuickHjIn] = useState('');

  const daysDone = completedDays.length;
  const completionPct = Math.round((daysDone / 20) * 100);
  const streak = calculateStreak(completedDays);
  const totalExercisesDone = countTotalCompletedExercises(exerciseLogs);

  const { bestByDist, prevByDist } = computeSprintPRs(sprintRecords);
  const ljStats = computeJumpPR(longJumpRecords);
  const hjStats = computeJumpPR(highJumpRecords);

  // Sprint gap to <13.00s
  const best100 = bestByDist['100m'];
  const sprint100Gap =
    best100 !== null
      ? best100 < 13.0
        ? `Target beaten by ${(13.0 - best100).toFixed(2)} sec! 🏆`
        : `${(best100 - 13.0).toFixed(2)} sec`
      : 'Log a 100m time';

  // Long jump gap to 168 in (14 ft)
  const ljGap =
    ljStats.bestInches !== null
      ? ljStats.bestInches >= 168
        ? `Target exceeded by +${(ljStats.bestInches - 168).toFixed(1)} in! 🏆`
        : `${(168 - ljStats.bestInches).toFixed(1)} in`
      : 'Log a jump';

  // High jump gap to 54 in (4 ft 6 in)
  const hjGap =
    hjStats.bestInches !== null
      ? hjStats.bestInches >= 54
        ? `Target exceeded by +${(hjStats.bestInches - 54).toFixed(1)} in! 🏆`
        : `${(54 - hjStats.bestInches).toFixed(1)} in`
      : 'Log a height';

  const sprintChartData = sprintRecords
    .filter((r) => r.distance === selectedSprintDist && parseFloat(r.timeSec) > 0)
    .map((r) => ({
      val: parseFloat(r.timeSec),
      label: `${parseFloat(r.timeSec).toFixed(2)}s`
    }));

  return (
    <div className="pb-24 space-y-4">
      {/* Training Overview */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-lg font-extrabold text-white mb-2">📊 TRAINING & PERFORMANCE PROGRESS</h2>
        <ProgressBar
          percent={completionPct}
          label="20-DAY COMPLETION"
          sublabel={`${daysDone} / 20 Sessions (${completionPct}%)`}
          size="lg"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
          <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] uppercase text-slate-400">Days Completed</div>
            <div className="text-base font-mono font-extrabold text-white">{daysDone} / 20</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] uppercase text-slate-400">Completion %</div>
            <div className="text-base font-mono font-extrabold text-lime-400">{completionPct}%</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] uppercase text-slate-400">Current Streak</div>
            <div className="text-base font-mono font-extrabold text-amber-400">🔥 {streak}d</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] uppercase text-slate-400">Exercises Done</div>
            <div className="text-base font-mono font-extrabold text-cyan-400">{totalExercisesDone}</div>
          </div>
        </div>
      </div>

      {/* PERSONAL RECORDS (PRs) SECTION */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-lime-400 mb-3">
          🏆 PERSONAL RECORDS & TARGET GAPS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {/* 100m PR Card */}
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-extrabold text-white mb-1">🏃 100 M SPRINT</div>
            <div className="text-lg font-mono font-black text-lime-400">
              PR: {best100 !== null ? `${best100.toFixed(2)} sec` : '—'}
            </div>
            <div className="text-xs text-slate-400 mt-1">Target: &lt; 13.00 sec</div>
            <div className="text-xs font-bold text-cyan-300 mt-0.5">Gap: {sprint100Gap}</div>
          </div>

          {/* Long Jump PR Card */}
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-extrabold text-white mb-1">🦘 LONG JUMP</div>
            <div className="text-lg font-mono font-black text-lime-400">
              PR: {formatInchesToFeetInches(ljStats.bestInches)}
            </div>
            <div className="text-xs text-slate-400 mt-1">Target: 14 ft 0 in</div>
            <div className="text-xs font-bold text-cyan-300 mt-0.5">Gap: {ljGap}</div>
          </div>

          {/* High Jump PR Card */}
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-extrabold text-white mb-1">⬆️ HIGH JUMP</div>
            <div className="text-lg font-mono font-black text-lime-400">
              PR: {formatInchesToFeetInches(hjStats.bestInches)}
            </div>
            <div className="text-xs text-slate-400 mt-1">Target: 4 ft 6 in (4.5 ft)</div>
            <div className="text-xs font-bold text-cyan-300 mt-0.5">Gap: {hjGap}</div>
          </div>
        </div>
      </div>

      {/* SPRINT PROGRESSION GRAPH */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-sm font-extrabold uppercase text-white">
              🏃 Sprint Performance Over Time
            </h3>
            <p className="text-[11px] text-slate-400">
              Switch distances to inspect 20m, 40m, 60m, and 100m progression
            </p>
          </div>
          <div className="flex gap-1">
            {['20m', '40m', '60m', '100m'].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setSelectedSprintDist(d)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  selectedSprintDist === d
                    ? 'bg-lime-400 text-slate-950'
                    : 'bg-slate-950 text-slate-300 border border-slate-800'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <SimpleLineChart
          dataPoints={sprintChartData}
          unit="s"
          lowerIsBetter={true}
          targetLine={selectedSprintDist === '100m' ? 13.0 : null}
        />

        <div className="grid grid-cols-4 gap-2 mt-3 text-center">
          {['20m', '40m', '60m', '100m'].map((d) => (
            <div key={d} className="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">Best {d}</div>
              <div className="text-xs font-mono font-bold text-white">
                {bestByDist[d] ? `${bestByDist[d].toFixed(2)}s` : '—'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LONG JUMP & HIGH JUMP IMPROVEMENT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
          <h3 className="text-sm font-extrabold uppercase text-white mb-2">🦘 Long Jump Progression</h3>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between p-2 rounded-xl bg-slate-950">
              <span className="text-slate-400">Best Jump:</span>
              <span className="font-mono font-bold text-lime-400">
                {formatInchesToFeetInches(ljStats.bestInches)}
              </span>
            </div>
            <div className="flex justify-between p-2 rounded-xl bg-slate-950">
              <span className="text-slate-400">Previous Best:</span>
              <span className="font-mono font-bold text-slate-200">
                {formatInchesToFeetInches(ljStats.prevBestInches)}
              </span>
            </div>
            <div className="flex justify-between p-2 rounded-xl bg-slate-950">
              <span className="text-slate-400">Improvement:</span>
              <span className="font-mono font-bold text-emerald-400">
                {ljStats.improvementInches !== null ? `+${ljStats.improvementInches} in` : '—'}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
          <h3 className="text-sm font-extrabold uppercase text-white mb-2">⬆️ High Jump Progression</h3>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between p-2 rounded-xl bg-slate-950">
              <span className="text-slate-400">Best Height:</span>
              <span className="font-mono font-bold text-lime-400">
                {formatInchesToFeetInches(hjStats.bestInches)}
              </span>
            </div>
            <div className="flex justify-between p-2 rounded-xl bg-slate-950">
              <span className="text-slate-400">Previous Best:</span>
              <span className="font-mono font-bold text-slate-200">
                {formatInchesToFeetInches(hjStats.prevBestInches)}
              </span>
            </div>
            <div className="flex justify-between p-2 rounded-xl bg-slate-950">
              <span className="text-slate-400">Improvement:</span>
              <span className="font-mono font-bold text-emerald-400">
                {hjStats.improvementInches !== null ? `+${hjStats.improvementInches} in` : '—'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Record Logger on Progress Page */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-3">
          ⚡ Quick Log New Sprint / Jump Mark
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-white">Log Sprint Time</div>
            <div className="flex gap-1">
              <select
                value={quickDist}
                onChange={(e) => setQuickDist(e.target.value)}
                className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
              >
                <option value="20m">20m</option>
                <option value="40m">40m</option>
                <option value="60m">60m</option>
                <option value="100m">100m</option>
              </select>
              <input
                type="number"
                step="0.01"
                placeholder="Sec (e.g. 13.10)"
                value={quickTime}
                onChange={(e) => setQuickTime(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                if (parseFloat(quickTime) > 0) {
                  onAddSprint({ distance: quickDist, timeSec: parseFloat(quickTime), attempts: 1 });
                  setQuickTime('');
                }
              }}
              className="w-full py-1.5 rounded-lg bg-lime-400 text-slate-950 font-extrabold text-xs"
            >
              + Save Sprint
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-white">Log Long Jump</div>
            <div className="flex gap-1">
              <input
                type="number"
                placeholder="ft"
                value={quickLjFt}
                onChange={(e) => setQuickLjFt(e.target.value)}
                className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
              />
              <input
                type="number"
                placeholder="in"
                value={quickLjIn}
                onChange={(e) => setQuickLjIn(e.target.value)}
                className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const inches = feetInchesToTotalInches(quickLjFt, quickLjIn);
                if (inches > 0) {
                  onAddLongJump({ totalInches: inches, attempts: 1 });
                  setQuickLjFt('');
                  setQuickLjIn('');
                }
              }}
              className="w-full py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-extrabold text-xs"
            >
              + Save Long Jump
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-white">Log High Jump</div>
            <div className="flex gap-1">
              <input
                type="number"
                placeholder="ft"
                value={quickHjFt}
                onChange={(e) => setQuickHjFt(e.target.value)}
                className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
              />
              <input
                type="number"
                placeholder="in"
                value={quickHjIn}
                onChange={(e) => setQuickHjIn(e.target.value)}
                className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const inches = feetInchesToTotalInches(quickHjFt, quickHjIn);
                if (inches > 0) {
                  onAddHighJump({ totalInches: inches, attempts: 1 });
                  setQuickHjFt('');
                  setQuickHjIn('');
                }
              }}
              className="w-full py-1.5 rounded-lg bg-amber-400 text-slate-950 font-extrabold text-xs"
            >
              + Save High Jump
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
