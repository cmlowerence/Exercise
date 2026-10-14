import React, { useState } from 'react';

export default function ExerciseDetail({ exercise, onClose }) {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-t-3xl sm:rounded-3xl p-5 text-slate-100 shadow-2xl">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lime-400/15 text-lime-400 border border-lime-400/30 mb-1.5">
              {exercise.category} • {exercise.difficulty}
            </span>
            <h2 className="text-xl font-extrabold text-white">{exercise.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center"
            aria-label="Close tutorial"
          >
            ✕
          </button>
        </div>

        {/* Prescription summary */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950/90 border border-slate-800 mb-4 text-center">
          <div>
            <div className="text-[10px] uppercase text-slate-400">Default Sets</div>
            <div className="text-sm font-bold text-white">{exercise.sets} Sets</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-slate-400">Target Reps/Time</div>
            <div className="text-sm font-bold text-lime-400">{exercise.reps}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-slate-400">Rec. Rest</div>
            <div className="text-sm font-bold text-cyan-400">{exercise.rest}s</div>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-lime-400 mb-1">
            🎯 Why It Matters
          </h3>
          <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/50 p-3 rounded-xl border border-slate-800">
            "{exercise.purpose}"
          </p>
        </div>

        {/* How to perform */}
        <div className="mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5">
            📋 How To Perform (Step-by-Step)
          </h3>
          <ol className="space-y-2">
            {exercise.instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-lime-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Key Cues */}
        <div className="mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
            ⚡ Key Coaching Cues
          </h3>
          <ul className="grid grid-cols-1 gap-1.5">
            {exercise.cues.map((cue, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{cue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Mistakes */}
        <div className="mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
            ⚠️ Common Mistakes to Avoid
          </h3>
          <ul className="grid grid-cols-1 gap-1.5">
            {exercise.mistakes.map((mistake, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg">
                <span className="text-amber-400 font-bold">✕</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety */}
        <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30">
          <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
            🛡️ Safety & Surface Guidance
          </h3>
          <p className="text-xs text-rose-100/90 leading-relaxed">{exercise.safety}</p>
        </div>

        {/* Tutorial Video Link */}
        <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
          {isOffline || !exercise.tutorialUrl ? (
            <div className="p-3 rounded-xl bg-slate-800 text-xs text-slate-300 text-center">
              Tutorial unavailable offline. Use the written instructions above.
            </div>
          ) : (
            <a
              href={exercise.tutorialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (!navigator.onLine) setIsOffline(true);
              }}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>▶ Watch Tutorial Video</span>
              <span className="text-[10px] opacity-80">(YouTube)</span>
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
          >
            Back to Workout
          </button>
        </div>
      </div>
    </div>
  );
}
