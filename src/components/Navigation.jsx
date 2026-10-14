import React from 'react';

const TABS = [
  { id: 'home', icon: '🏠', label: 'HOME' },
  { id: 'plan', icon: '📅', label: 'PLAN' },
  { id: 'exercises', icon: '🏋️', label: 'EXERCISES' },
  { id: 'progress', icon: '📊', label: 'PROGRESS' },
  { id: 'settings', icon: '⚙️', label: 'SETTINGS' }
];

export default function Navigation({ activeTab, onSelectTab }) {
  return (
    <nav
      aria-label="Main Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 px-1 py-1.5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all ${
                isActive
                  ? 'bg-lime-400/15 text-lime-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-lg leading-none mb-1">{tab.icon}</span>
              <span className="text-[10px] tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
