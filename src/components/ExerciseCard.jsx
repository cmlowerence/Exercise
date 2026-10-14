import React, { useState, useEffect, useRef } from 'react';

export default function ExerciseCard({
  item,
  exerciseData,
  log,
  weightUnit = 'kg',
  onUpdateLog,
  onOpenTutorial,
  onStartRestTimer,
  onQuickSavePerformance
}) {
  const totalSets = item.sets || exerciseData?.sets || 3;
  const completedSets =
    Array.isArray(log?.completedSets) && log.completedSets.length === totalSets
      ? log.completedSets
      : Array(totalSets).fill(false);

  const isAllSetsDone = completedSets.every(Boolean);
  const useAltSpace = !!log?.useAltSpace;
  const displayedPrescription =
    item.hasSpaceSwitch && useAltSpace ? item.altPrescription : item.prescription;

  // Built-in active exercise timer (for Plank, Side Plank, Wall Sprint, High-Knee Drive, Mobility, etc.)
  const defaultActiveSec = item.timerSec || exerciseData?.duration || 0;
  const [activeTimerOpen, setActiveTimerOpen] = useState(false);
  const [activeSecLeft, setActiveSecLeft] = useState(defaultActiveSec || 30);
  const [activeRunning, setActiveRunning] = useState(false);
  const activeEndRef = useRef(null);

  useEffect(() => {
    if (!activeRunning || !activeEndRef.current) return;
    const tick = () => {
      const diff = activeEndRef.current - Date.now();
      if (diff <= 0) {
        setActiveSecLeft(0);
        setActiveRunning(false);
        activeEndRef.current = null;
      } else {
        setActiveSecLeft(Math.ceil(diff / 1000));
      }
    };
    tick();
    const id = setInterval(tick, 200);
    return () => clearInterval(id);
  }, [activeRunning]);

  const startActiveExerciseTimer = (seconds) => {
    const dur = seconds || defaultActiveSec || 30;
    setActiveTimerOpen(true);
    setActiveSecLeft(dur);
    activeEndRef.current = Date.now() + dur * 1000;
    setActiveRunning(true);
  };

  const handleToggleSet = (setIdx) => {
    const nextSets = [...completedSets];
    const becomingChecked = !nextSets[setIdx];
    nextSets[setIdx] = becomingChecked;
    onUpdateLog(item.instanceId, totalSets, { completedSets: nextSets });

    if (becomingChecked && item.restSec > 0) {
      onStartRestTimer(item.restSec, `${item.name} — Set ${setIdx + 1} Rest`);
    }
  };

  const handleFieldChange = (field, value) => {
    onUpdateLog(item.instanceId, totalSets, { [field]: value });
  };

  const loggingType = exerciseData?.loggingType || 'strength';

  return (
    <div
      className={`rounded-2xl border p-4 transition-all ${
        isAllSetsDone
          ? 'bg-emerald-950/25 border-emerald-500/50'
          : 'bg-slate-900/90 border-slate-800'
      }`}
    >
      {/* Top header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-base font-extrabold text-white">{item.name}</h4>
            {isAllSetsDone && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                ✓ COMPLETED
              </span>
            )}
          </div>
          <div className="text-sm font-mono font-bold text-lime-400 mt-0.5">
            {displayedPrescription}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => onOpenTutorial(exerciseData)}
            className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-cyan-300 border border-slate-700 flex items-center gap-1"
          >
            <span>🎥</span>
            <span>Tutorial</span>
          </button>
          <button
            type="button"
            onClick={() => {
              if (defaultActiveSec > 0) {
                startActiveExerciseTimer(defaultActiveSec);
              } else {
                onStartRestTimer(item.restSec || 90, `${item.name} — Rest`);
              }
            }}
            className="px-3 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 text-xs font-extrabold"
          >
            {defaultActiveSec > 0 ? `⏱ Start ${defaultActiveSec}s` : '▶ Start'}
          </button>
        </div>
      </div>

      {/* Quick coaching cue preview */}
      {exerciseData?.cues?.[0] && (
        <div className="text-[11px] text-slate-400 mb-3 flex items-center gap-1.5">
          <span className="text-lime-400 font-bold">Cue:</span>
          <span>{exerciseData.cues[0]} • {exerciseData.cues[1] || ''}</span>
        </div>
      )}

      {/* Day 3 & Day 9 Space Switch for 20m Alternating Bounds */}
      {item.hasSpaceSwitch && (
        <div className="mb-3 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/40 flex items-center justify-between gap-2">
          <span className="text-xs text-indigo-200">
            Insufficient space for 20 m bounds?
          </span>
          <button
            type="button"
            onClick={() => handleFieldChange('useAltSpace', !useAltSpace)}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              useAltSpace
                ? 'bg-indigo-500 text-white'
                : 'bg-slate-800 text-indigo-300 border border-indigo-500/40'
            }`}
          >
            {useAltSpace ? 'Using 4 × 8/leg ✓' : 'Switch to 4 × 8/leg'}
          </button>
        </div>
      )}

      {/* Active Exercise Countdown Timer (for timed exercises or on-demand) */}
      {activeTimerOpen && (
        <div className="mb-3 p-3 rounded-xl bg-slate-950 border border-cyan-500/40 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase text-cyan-400">
              Active Exercise Timer
            </div>
            <div className="font-mono text-2xl font-extrabold text-white">
              {String(Math.floor(activeSecLeft / 60)).padStart(2, '0')}:
              {String(activeSecLeft % 60).padStart(2, '0')}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => startActiveExerciseTimer(defaultActiveSec || 30)}
              className="px-2.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30"
            >
              Restart
            </button>
            <button
              type="button"
              onClick={() => setActiveTimerOpen(false)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold"
            >
              Hide
            </button>
          </div>
        </div>
      )}

      {/* Set Checkboxes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {completedSets.map((checked, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleToggleSet(idx)}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
              checked
                ? 'bg-lime-400 text-slate-950 border-lime-400 shadow-sm'
                : 'bg-slate-950/80 text-slate-200 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span>{checked ? '☑' : '□'}</span>
            <span>Set {idx + 1}</span>
          </button>
        ))}
      </div>

      {/* Performance Logging Inputs tailored by exercise type */}
      <div className="pt-2.5 border-t border-slate-800/80 grid grid-cols-2 gap-2">
        {loggingType === 'strength' && (
          <>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Weight ({weightUnit})
              </label>
              <input
                type="text"
                placeholder="Bodyweight / 10"
                value={log?.weight || ''}
                onChange={(e) => handleFieldChange('weight', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-lime-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Reps Completed
              </label>
              <input
                type="text"
                placeholder={item.reps}
                value={log?.reps || ''}
                onChange={(e) => handleFieldChange('reps', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-lime-400 focus:outline-none"
              />
            </div>
          </>
        )}

        {(loggingType === 'jump' || loggingType === 'longJump') && (
          <>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Best Distance (ft / in)
              </label>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="ft"
                  value={log?.distanceFt || ''}
                  onChange={(e) => handleFieldChange('distanceFt', e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                />
                <input
                  type="number"
                  placeholder="in"
                  value={log?.distanceIn || ''}
                  onChange={(e) => handleFieldChange('distanceIn', e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Attempts Logged
              </label>
              <input
                type="number"
                placeholder="e.g. 12"
                value={log?.attempts || ''}
                onChange={(e) => handleFieldChange('attempts', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
          </>
        )}

        {loggingType === 'sprint' && (
          <>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Best Time (sec)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="e.g. 3.15"
                value={log?.timeSec || ''}
                onChange={(e) => handleFieldChange('timeSec', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Total Sprints
              </label>
              <input
                type="number"
                placeholder="e.g. 7"
                value={log?.attempts || ''}
                onChange={(e) => handleFieldChange('attempts', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
          </>
        )}

        {loggingType === 'highJump' && (
          <>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Best Height (ft / in)
              </label>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="ft"
                  value={log?.heightFt || ''}
                  onChange={(e) => handleFieldChange('heightFt', e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                />
                <input
                  type="number"
                  placeholder="in"
                  value={log?.heightIn || ''}
                  onChange={(e) => handleFieldChange('heightIn', e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase text-slate-400 mb-1">
                Total Jumps
              </label>
              <input
                type="number"
                placeholder="e.g. 6"
                value={log?.attempts || ''}
                onChange={(e) => handleFieldChange('attempts', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
          </>
        )}

        {(loggingType === 'plyo' || loggingType === 'timed' || loggingType === 'mobility') && (
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-[10px] uppercase text-slate-400 mb-1">
              Reps / Duration Logged
            </label>
            <input
              type="text"
              placeholder={item.reps}
              value={log?.reps || ''}
              onChange={(e) => handleFieldChange('reps', e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
            />
          </div>
        )}

        <div className="col-span-2">
          <label className="block text-[10px] uppercase text-slate-400 mb-1">
            Notes (Surface, feel, technique cues)
          </label>
          <input
            type="text"
            placeholder="Add session notes..."
            value={log?.notes || ''}
            onChange={(e) => handleFieldChange('notes', e.target.value)}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-lime-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
