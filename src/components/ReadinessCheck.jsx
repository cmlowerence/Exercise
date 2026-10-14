import React from 'react';

const OPTIONS = [
  { id: 'fresh', icon: '🟢', label: 'Fresh', desc: 'Springy legs, high CNS readiness' },
  { id: 'normal', icon: '🟡', label: 'Normal', desc: 'Ready for standard training load' },
  { id: 'tired', icon: '🟠', label: 'Tired', desc: 'Heavy legs or moderate fatigue' },
  { id: 'very_tired', icon: '🔴', label: 'Very tired / sore', desc: 'High soreness or low recovery' }
];

export default function ReadinessCheck({ dayNum, readinessLog, onUpdateReadiness }) {
  const currentStatus = readinessLog?.status || null;
  const hasPain = !!readinessLog?.hasPain;

  const handleSelect = (statusId) => {
    onUpdateReadiness(dayNum, {
      ...(readinessLog || {}),
      status: statusId,
      updatedAt: new Date().toISOString()
    });
  };

  const togglePain = () => {
    onUpdateReadiness(dayNum, {
      ...(readinessLog || {}),
      hasPain: !hasPain,
      updatedAt: new Date().toISOString()
    });
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          ⚡ Daily Readiness Check — How are you feeling today?
        </h3>
        {currentStatus && (
          <span className="text-[11px] font-semibold text-lime-400">Logged</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2.5">
        {OPTIONS.map((opt) => {
          const selected = currentStatus === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt.id)}
              className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all ${
                selected
                  ? 'bg-slate-800 border-lime-400 text-white shadow-sm'
                  : 'bg-slate-950/60 border-slate-800/90 text-slate-300 hover:border-slate-700'
              }`}
            >
              <span className="text-base leading-none">{opt.icon}</span>
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">{opt.label}</div>
                <div className="text-[10px] text-slate-400 truncate">{opt.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={hasPain}
            onChange={togglePain}
            className="rounded border-slate-700 bg-slate-950 text-rose-500 focus:ring-rose-500"
          />
          <span>Report localized joint/muscle pain today</span>
        </label>
      </div>

      {(currentStatus === 'tired' || currentStatus === 'very_tired') && (
        <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-200 text-xs leading-relaxed">
          <strong className="font-bold block mb-0.5">⚠️ Fatigue Advisory:</strong>
          Consider reducing volume and prioritizing technique/recovery. Do not force maximal jumps or sprints when fatigued.
        </div>
      )}

      {hasPain && (
        <div className="mt-2.5 p-3 rounded-xl bg-rose-500/15 border border-rose-500/50 text-rose-200 text-xs leading-relaxed">
          <strong className="font-bold block mb-0.5">🛑 Safety Notice:</strong>
          Stop the exercise and consider appropriate medical/sports-professional advice if pain persists or is significant.
        </div>
      )}
    </div>
  );
}
