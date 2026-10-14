import React, { useState, useEffect, useRef } from 'react';

function playCompletionBeep(soundEnabled = true) {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.14 + 0.13);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.14);
      osc.stop(ctx.currentTime + idx * 0.14 + 0.14);
    });
  } catch (e) {
    // Ignore audio context locks
  }
}

export default function RestTimer({
  initialSeconds = 120,
  label = 'REST TIMER',
  isOpen,
  onClose,
  soundEnabled = true
}) {
  const [remainingSec, setRemainingSec] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const targetEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const now = Date.now();
      targetEndRef.current = now + initialSeconds * 1000;
      setRemainingSec(initialSeconds);
      setIsRunning(true);
    } else {
      setIsRunning(false);
      targetEndRef.current = null;
    }
  }, [isOpen, initialSeconds]);

  useEffect(() => {
    if (!isRunning || !targetEndRef.current) return;

    const tick = () => {
      const diffMs = targetEndRef.current - Date.now();
      if (diffMs <= 0) {
        setRemainingSec(0);
        setIsRunning(false);
        targetEndRef.current = null;
        playCompletionBeep(soundEnabled);
      } else {
        setRemainingSec(Math.ceil(diffMs / 1000));
      }
    };

    tick();
    const interval = setInterval(tick, 250);
    const handleVisibility = () => tick();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isRunning, soundEnabled]);

  if (!isOpen) return null;

  const adjustTime = (deltaSec) => {
    const newRemaining = Math.max(5, remainingSec + deltaSec);
    setRemainingSec(newRemaining);
    if (isRunning) {
      targetEndRef.current = Date.now() + newRemaining * 1000;
    }
  };

  const togglePause = () => {
    if (isRunning) {
      setIsRunning(false);
      targetEndRef.current = null;
    } else {
      const startFrom = remainingSec > 0 ? remainingSec : initialSeconds;
      targetEndRef.current = Date.now() + startFrom * 1000;
      setRemainingSec(startFrom);
      setIsRunning(true);
    }
  };

  const mins = String(Math.floor(remainingSec / 60)).padStart(2, '0');
  const secs = String(remainingSec % 60).padStart(2, '0');

  return (
    <div className="fixed bottom-16 left-0 right-0 z-30 px-3 pointer-events-none">
      <div className="max-w-md mx-auto bg-slate-900/95 backdrop-blur-md border-2 border-lime-400/60 rounded-2xl p-3.5 shadow-2xl pointer-events-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-lime-400">{label}</span>
          </div>
          <span className="text-[11px] text-slate-400">
            {remainingSec === 0 ? 'Recovery complete — Ready!' : 'Background-accurate timer'}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="font-mono text-3xl font-extrabold text-white tracking-tight">
            {mins}:{secs}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => adjustTime(30)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-100 border border-slate-700"
            >
              +30 sec
            </button>
            <button
              type="button"
              onClick={() => adjustTime(60)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-100 border border-slate-700"
            >
              +1 min
            </button>
            <button
              type="button"
              onClick={togglePause}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-300 border border-slate-700"
            >
              {isRunning ? 'Pause' : 'Resume'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-xs font-extrabold text-slate-950"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
