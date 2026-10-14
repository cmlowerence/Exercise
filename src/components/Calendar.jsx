import React from 'react';
import { TRAINING_PLAN } from '../data/trainingPlan';
import { addDaysToISO, formatShortDate } from '../utils/dateUtils';
import { getDayCalendarStatus, getDayExerciseProgress } from '../utils/progressUtils';
import DayCard from './DayCard';

export default function Calendar({
  programStartDate,
  completedDays,
  exerciseLogs,
  onSelectDayFromCalendar
}) {
  return (
    <div className="pb-24 space-y-4">
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-lg font-extrabold text-white mb-1">📅 20-DAY TRAINING CALENDAR</h2>
        <p className="text-xs text-slate-400 mb-3">
          Tap any day to open its workout, log sets, or review completed sessions. Sundays are highlighted for Outdoor Track & Jump sessions.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-300 bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
          <span>🟢 Completed</span>
          <span>🔵 Today</span>
          <span>🟡 Partial</span>
          <span>⚪ Upcoming</span>
          <span>🔴 Missed</span>
          <span className="text-cyan-400 font-bold">🏃 Sunday Outdoor</span>
        </div>
      </div>

      {/* Visual 20-Day Compact Grid */}
      <div className="grid grid-cols-5 gap-2">
        {TRAINING_PLAN.map((dayPlan) => {
          const status = getDayCalendarStatus(
            dayPlan.day,
            programStartDate,
            completedDays,
            exerciseLogs
          );
          const dateStr = programStartDate
            ? formatShortDate(addDaysToISO(programStartDate, dayPlan.day - 1))
            : `Day ${dayPlan.day}`;

          return (
            <button
              key={dayPlan.day}
              type="button"
              onClick={() => onSelectDayFromCalendar(dayPlan.day)}
              className={`p-2 rounded-2xl border text-center transition-all flex flex-col items-center justify-center ${
                dayPlan.isOutdoor
                  ? 'bg-cyan-950/50 border-cyan-400/60'
                  : status.code === 'completed'
                  ? 'bg-emerald-950/30 border-emerald-500/50'
                  : status.code === 'today'
                  ? 'bg-lime-400/15 border-lime-400'
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              <span className="text-[10px] font-mono text-slate-400">{dateStr}</span>
              <span className="text-sm font-black text-white my-0.5">D{dayPlan.day}</span>
              <span className="text-xs leading-none">
                {dayPlan.isOutdoor ? '🏃' : status.icon}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Day List */}
      <div className="space-y-2.5">
        {TRAINING_PLAN.map((dayPlan) => {
          const status = getDayCalendarStatus(
            dayPlan.day,
            programStartDate,
            completedDays,
            exerciseLogs
          );
          const { percent } = getDayExerciseProgress(dayPlan.day, exerciseLogs);
          const dateLabel = programStartDate
            ? `${dayPlan.weekdayLabel}, ${formatShortDate(
                addDaysToISO(programStartDate, dayPlan.day - 1)
              )}`
            : dayPlan.weekdayLabel;

          return (
            <DayCard
              key={dayPlan.day}
              dayPlan={dayPlan}
              status={status}
              dateLabel={dateLabel}
              progressPercent={completedDays.includes(dayPlan.day) ? 100 : percent}
              onSelect={onSelectDayFromCalendar}
            />
          );
        })}
      </div>
    </div>
  );
}
