import React from 'react';

export default function DayCard({ dayPlan, status, dateLabel, progressPercent, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(dayPlan.day)}
      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
        dayPlan.isOutdoor
          ? 'bg-gradient-to-r from-cyan-950/50 to-slate-900 border-cyan-500/40 hover:border-cyan-400'
          : status.code === 'completed'
          ? 'bg-emerald-950/20 border-emerald-500/40 hover:border-emerald-400'
          : status.code === 'today'
          ? 'bg-slate-900 border-lime-400/70 shadow-md'
          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
      }`}
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-sm">{status.icon}</span>
          <span className="text-xs font-mono font-extrabold text-lime-400">
            DAY {dayPlan.day}
          </span>
          <span className="text-[11px] text-slate-400">• {dateLabel || dayPlan.weekdayLabel}</span>
          {dayPlan.isOutdoor && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-cyan-400 text-slate-950">
              🏃 OUTDOOR
            </span>
          )}
        </div>
        <div className="text-sm font-extrabold text-white truncate">{dayPlan.title}</div>
        <div className="text-[11px] text-slate-400 truncate">{dayPlan.focus}</div>
      </div>

      <div className="text-right shrink-0">
        <div className="text-xs font-mono font-bold text-slate-200">{progressPercent}%</div>
        <div className="text-[10px] text-slate-400">{dayPlan.exercises.length} items</div>
      </div>
    </button>
  );
}
