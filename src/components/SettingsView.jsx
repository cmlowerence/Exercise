import React, { useState } from 'react';
import { getTodayISO } from '../utils/dateUtils';

export default function SettingsView({
  programStartDate,
  onSetProgramStartDate,
  settings,
  onUpdateSettings,
  onExportData,
  onImportData,
  onResetProgram
}) {
  const [resetStep, setResetStep] = useState(0);
  const [importStatus, setImportStatus] = useState('');

  const handleDownloadExport = () => {
    const jsonStr = onExportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `explosive-athletics-backup-${getTodayISO()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        onImportData(evt.target.result);
        setImportStatus('✓ Training data successfully restored!');
        setTimeout(() => setImportStatus(''), 4000);
      } catch (err) {
        setImportStatus('✕ Invalid JSON backup file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="pb-24 space-y-4">
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 space-y-4">
        <h2 className="text-lg font-extrabold text-white">⚙️ SETTINGS & DATA MANAGEMENT</h2>

        {/* Start Date Adjustment */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
          <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
            Program Start Date
          </label>
          <p className="text-[11px] text-slate-400 mb-2">
            Automatically calculates current day, upcoming Sunday outdoor session, and Day 20 Final Test.
          </p>
          <input
            type="date"
            value={programStartDate || getTodayISO()}
            onChange={(e) => onSetProgramStartDate(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-white"
          />
        </div>

        {/* Preferences */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-white">Weight Logging Unit</div>
              <div className="text-[11px] text-slate-400">Used for split squats, lunges, RDLs</div>
            </div>
            <div className="flex gap-1">
              {['kg', 'lb'].map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => onUpdateSettings({ ...settings, weightUnit: u })}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                    settings?.weightUnit === u
                      ? 'bg-lime-400 text-slate-950'
                      : 'bg-slate-900 text-slate-300 border border-slate-700'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div>
              <div className="text-xs font-bold text-white">Timer Completion Sound</div>
              <div className="text-[11px] text-slate-400">Audio chime when rest timer finishes</div>
            </div>
            <button
              type="button"
              onClick={() =>
                onUpdateSettings({ ...settings, soundEnabled: !settings?.soundEnabled })
              }
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                settings?.soundEnabled
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {settings?.soundEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {/* Export & Import Data */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
            Backup & Restore (JSON)
          </h3>

          <button
            type="button"
            onClick={handleDownloadExport}
            className="w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs"
          >
            ⬇ Export Data (Download JSON)
          </button>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1.5">
              Import Data (Restore from JSON file):
            </label>
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleFileImport}
              className="w-full text-xs text-slate-300 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-slate-800 file:text-lime-400 hover:file:bg-slate-700"
            />
            {importStatus && (
              <div className="mt-2 text-xs font-bold text-emerald-400">{importStatus}</div>
            )}
          </div>
        </div>

        {/* Reset Program with Double Confirmation */}
        <div className="p-3.5 rounded-2xl bg-rose-950/20 border border-rose-500/40 space-y-2">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-rose-400">
            Danger Zone — Reset Program
          </h3>
          <p className="text-[11px] text-slate-300">
            Requires double confirmation before deleting all logged sets, PRs, and progress.
          </p>

          {resetStep === 0 && (
            <button
              type="button"
              onClick={() => setResetStep(1)}
              className="w-full py-2.5 rounded-xl bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500/50 text-rose-200 font-bold text-xs"
            >
              Reset Program Progress
            </button>
          )}

          {resetStep === 1 && (
            <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/60 space-y-2">
              <div className="text-xs font-bold text-amber-300">
                Confirmation 1 of 2: Are you sure you want to reset your 20-day program?
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setResetStep(0)}
                  className="flex-1 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setResetStep(2)}
                  className="flex-1 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-extrabold"
                >
                  Yes, Continue →
                </button>
              </div>
            </div>
          )}

          {resetStep === 2 && (
            <div className="p-3 rounded-xl bg-slate-950 border-2 border-rose-500 space-y-2">
              <div className="text-xs font-extrabold text-rose-400">
                FINAL CONFIRMATION (2 of 2): This will permanently erase all workout logs and PRs. Proceed?
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setResetStep(0)}
                  className="flex-1 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onResetProgram();
                    setResetStep(0);
                  }}
                  className="flex-1 py-2 rounded-lg bg-rose-600 text-white text-xs font-extrabold"
                >
                  ⚠ Confirm Permanent Reset
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Safety Disclaimer */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-200 block mb-1">🛡️ Athletic Training & Safety Disclaimer</strong>
          "This program is intended for general fitness and athletic preparation. Adjust training to your ability and environment. Stop if you experience significant pain, dizziness, or unusual symptoms." Emphasize soft landings, appropriate non-slip surfaces, proper athletic footwear, and adequate recovery between maximal efforts.
        </div>
      </div>
    </div>
  );
}
