import React, { useState } from 'react';
import { TRAINING_PLAN } from '../data/trainingPlan';
import { MOTIVATIONAL_QUOTES } from '../data/exercises';
import {
  getTodayISO,
  calculateCurrentProgramDay,
  getNextOutdoorInfo,
  isDateSunday,
  formatFullDate
} from '../utils/dateUtils';
import {
  calculateStreak,
  getDayExerciseProgress
} from '../utils/progressUtils';
import { formatInchesToFeetInches } from '../utils/recordUtils';
import ProgressBar from './ProgressBar';
import OutdoorSession from './OutdoorSession';
import WorkoutSession from './WorkoutSession';

export default function Dashboard({
  programStartDate,
  onSetProgramStartDate,
  completedDays,
  exerciseLogs,
  sessionLogs,
  readinessLogs,
  sprintRecords,
  longJumpRecords,
  highJumpRecords,
  personalRecords,
  settings,
  selectedDay,
  onSelectDay,
  onUpdateExerciseLog,
  onToggleWarmup,
  onCompleteSession,
  onUpdateReadiness,
  onAddSprint,
  onAddLongJump,
  onAddHighJump,
  onOpenTutorial,
  onStartRestTimer,
  onNavigateTab
}) {
  const [startInputDate, setStartInputDate] = useState(getTodayISO());
  const [outdoorModeOverride, setOutdoorModeOverride] = useState(false);

  const currentProgramDay = calculateCurrentProgramDay(programStartDate, completedDays);
  const activeDayNum = selectedDay || currentProgramDay;
  const activeDayPlan = TRAINING_PLAN.find((d) => d.day === activeDayNum) || TRAINING_PLAN[0];

  const daysCompletedCount = completedDays.length;
  const overallPercent = Math.round((daysCompletedCount / 20) * 100);
  const streak = calculateStreak(completedDays);
  const nextOutdoor = getNextOutdoorInfo(programStartDate, currentProgramDay);

  // Determine next uncompleted training session
  const nextUncompletedPlan =
    TRAINING_PLAN.find((d) => !completedDays.includes(d.day)) || TRAINING_PLAN[19];

  // Auto-detect if today is Sunday or user opened Day 7 / Day 14 or toggled Sunday Outdoor Mode
  const todayIsSunday = isDateSunday(getTodayISO());
  const showSundayOutdoorBanner =
    todayIsSunday || activeDayPlan.isOutdoor || outdoorModeOverride;

  const quoteIndex = (activeDayNum - 1) % MOTIVATIONAL_QUOTES.length;
  const activeQuote = MOTIVATIONAL_QUOTES[quoteIndex];

  // If program hasn't started yet, show the READY TO START card at the top
  if (!programStartDate) {
    return (
      <div className="pb-24 space-y-4">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-lime-400/60 p-6 shadow-2xl text-center">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-lime-400/15 text-lime-400 border border-lime-400/30 mb-3">
            SPRINT • LONG JUMP • HIGH JUMP
          </span>
          <h2 className="text-2xl font-black text-white tracking-tight mb-2">
            READY TO START?
          </h2>
          <p className="text-xs text-slate-300 mb-5 leading-relaxed">
            Your 20-day explosive athletics training program is ready. Select your start date below to automatically schedule your indoor strength/plyometric days, Sunday outdoor track sessions, and Day 20 Final Performance Test.
          </p>

          <div className="max-w-xs mx-auto mb-5 text-left">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Start Date:
            </label>
            <input
              type="date"
              value={startInputDate}
              onChange={(e) => setStartInputDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm font-mono text-white focus:border-lime-400 focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              onSetProgramStartDate(startInputDate || getTodayISO());
              onSelectDay(1);
            }}
            className="w-full max-w-xs py-3.5 rounded-2xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-all"
          >
            🚀 START PROGRAM
          </button>

          <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-slate-800 text-center">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs">🏃 100m</div>
              <div className="text-sm font-mono font-extrabold text-lime-400">&lt; 13.00s</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs">🦘 Long Jump</div>
              <div className="text-sm font-mono font-extrabold text-lime-400">≥ 14 ft</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs">⬆️ High Jump</div>
              <div className="text-sm font-mono font-extrabold text-lime-400">≥ 4.5 ft</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 space-y-4">
      {/* Main Progress Dashboard Card */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-4 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-lime-400 block">
              {activeDayPlan.phase}
            </span>
            <div className="text-2xl font-black text-white tracking-tight">
              DAY {activeDayNum} <span className="text-slate-500 text-lg">/ 20</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setOutdoorModeOverride(!outdoorModeOverride)}
              className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition-all ${
                showSundayOutdoorBanner
                  ? 'bg-cyan-400 text-slate-950 border-cyan-400'
                  : 'bg-slate-800 text-cyan-300 border-slate-700'
              }`}
            >
              🏟️ {showSundayOutdoorBanner ? 'Outdoor Mode ON' : 'Sunday Outdoor'}
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('plan')}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-slate-200 border border-slate-700"
            >
              📅 All 20 Days
            </button>
          </div>
        </div>

        {/* Overall 20-Day Progress Bar */}
        <div className="mb-3">
          <ProgressBar
            percent={overallPercent}
            label="PROGRAM COMPLETION"
            sublabel={`${daysCompletedCount} / 20 Days (${overallPercent}%)`}
            size="md"
          />
        </div>

        {/* 4 Key Dashboard Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/90">
            <div className="text-[10px] uppercase text-slate-400">Next Session</div>
            <div className="text-xs font-extrabold text-white truncate">
              Day {nextUncompletedPlan.day}: {nextUncompletedPlan.title}
            </div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/90">
            <div className="text-[10px] uppercase text-slate-400">Outdoor Training</div>
            <div className="text-xs font-extrabold text-cyan-400 truncate">
              {nextOutdoor.label}
            </div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/90">
            <div className="text-[10px] uppercase text-slate-400">Current Streak</div>
            <div className="text-xs font-extrabold text-amber-400">
              🔥 {streak} {streak === 1 ? 'Day' : 'Days'}
            </div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/90">
            <div className="text-[10px] uppercase text-slate-400">Workouts Done</div>
            <div className="text-xs font-extrabold text-emerald-400">
              ✓ {daysCompletedCount} Completed
            </div>
          </div>
        </div>

        {/* Live PR vs Target Strip */}
        <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-slate-950 border border-slate-800/80 text-center">
          <div>
            <div className="text-[10px] text-slate-400">🏃 100m (&lt;13s)</div>
            <div className="text-xs font-mono font-extrabold text-white">
              {personalRecords.sprint100m ? `${personalRecords.sprint100m.toFixed(2)}s` : '—'}
            </div>
          </div>
          <div className="border-x border-slate-800">
            <div className="text-[10px] text-slate-400">🦘 Long (≥14')</div>
            <div className="text-xs font-mono font-extrabold text-white">
              {formatInchesToFeetInches(personalRecords.longJumpInches)}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400">⬆️ High (≥4'6")</div>
            <div className="text-xs font-mono font-extrabold text-white">
              {formatInchesToFeetInches(personalRecords.highJumpInches)}
            </div>
          </div>
        </div>

        {/* Subtle athletic motivation bar */}
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 italic">
          <span>"{activeQuote}"</span>
          <span className="not-italic font-mono text-[10px] text-slate-500">
            Started {formatFullDate(programStartDate)}
          </span>
        </div>
      </div>

      {/* If Sunday Outdoor Mode is toggled on a non-outdoor day, render the Outdoor Logger here */}
      {outdoorModeOverride && !activeDayPlan.isOutdoor && (
        <OutdoorSession
          dayNum={activeDayNum}
          sprintRecords={sprintRecords}
          longJumpRecords={longJumpRecords}
          highJumpRecords={highJumpRecords}
          onAddSprint={onAddSprint}
          onAddLongJump={onAddLongJump}
          onAddHighJump={onAddHighJump}
          onStartRestTimer={onStartRestTimer}
        />
      )}

      {/* Active Day Workout Session */}
      <WorkoutSession
        dayNum={activeDayNum}
        programStartDate={programStartDate}
        completedDays={completedDays}
        exerciseLogs={exerciseLogs}
        sessionLogs={sessionLogs}
        readinessLogs={readinessLogs}
        sprintRecords={sprintRecords}
        longJumpRecords={longJumpRecords}
        highJumpRecords={highJumpRecords}
        settings={settings}
        onSelectDay={onSelectDay}
        onUpdateExerciseLog={onUpdateExerciseLog}
        onToggleWarmup={onToggleWarmup}
        onCompleteSession={onCompleteSession}
        onUpdateReadiness={onUpdateReadiness}
        onAddSprint={onAddSprint}
        onAddLongJump={onAddLongJump}
        onAddHighJump={onAddHighJump}
        onOpenTutorial={onOpenTutorial}
        onStartRestTimer={onStartRestTimer}
      />
    </div>
  );
}
