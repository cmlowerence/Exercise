import React from 'react';

export default function ProgressBar({ percent = 0, label, sublabel, size = 'md', accent = 'lime' }) {
  const safePercent = Math.min(100, Math.max(0, Math.round(percent)));
  const fillClass =
    accent === 'amber'
      ? 'bg-gradient-to-r from-amber-500 to-orange-400'
      : accent === 'cyan'
      ? 'bg-gradient-to-r from-cyan-500 to-sky-400'
      : 'bg-gradient-to-r from-lime-400 to-emerald-400';

  const heightClass = size === 'lg' ? 'h-3.5' : size === 'sm' ? 'h-2' : 'h-2.5';

  return (
    <div className="w-full">
      {(label || sublabel) && (
        <div className="flex items-center justify-between text-xs mb-1.5">
          {label && <span className="font-semibold text-slate-200 uppercase tracking-wider">{label}</span>}
          {sublabel ? (
            <span className="font-mono font-bold text-lime-400">{sublabel}</span>
          ) : (
            <span className="font-mono font-bold text-lime-400">{safePercent}%</span>
          )}
        </div>
      )}
      <div className={`w-full ${heightClass} bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${fillClass}`}
          style={{ width: `${safePercent}%` }}
        />
      </div>
    </div>
  );
}
