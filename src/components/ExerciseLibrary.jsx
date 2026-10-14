import React, { useState } from 'react';
import { EXERCISES } from '../data/exercises';

const CATEGORIES = ['All', 'Strength', 'Plyometrics', 'Sprint', 'Mobility', 'Core'];

export default function ExerciseLibrary({ onOpenTutorial }) {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const filtered = EXERCISES.filter((ex) => {
    const matchesCat = selectedCat === 'All' || ex.category === selectedCat;
    const q = search.trim().toLowerCase();
    const matchesQuery =
      !q ||
      ex.name.toLowerCase().includes(q) ||
      ex.purpose.toLowerCase().includes(q) ||
      ex.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pb-24 space-y-4">
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-lg font-extrabold text-white mb-1">🏋️ EXERCISE LIBRARY & TUTORIALS</h2>
        <p className="text-xs text-slate-400 mb-3">
          Search every drill in the 20-day program. Tap any exercise for step-by-step technique instructions, coaching cues, common mistakes, and safety guidelines.
        </p>

        <input
          type="search"
          placeholder="Search exercises (e.g. Broad jump, Wall sprint, Nordic)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-lime-400 focus:outline-none mb-3"
        />

        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedCat === cat
                  ? 'bg-lime-400 text-slate-950'
                  : 'bg-slate-950 text-slate-300 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        {filtered.map((ex) => (
          <div
            key={ex.id}
            className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-lime-400 border border-slate-700 mb-1">
                  {ex.category} • {ex.difficulty}
                </span>
                <h3 className="text-base font-extrabold text-white">{ex.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => onOpenTutorial(ex)}
                className="px-3 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 text-xs font-extrabold shrink-0"
              >
                ▶ Tutorial
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-2.5">{ex.purpose}</p>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
              <span>Sets: {ex.sets}</span>
              <span>•</span>
              <span>Reps: {ex.reps}</span>
              <span>•</span>
              <span>Rest: {ex.rest}s</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
