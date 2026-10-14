import React, { useState } from 'react';
import { TRAINING_PLAN } from '../data/trainingPlan';
import { EXERCISES, WARMUP_ITEMS_INDOOR, WARMUP_ITEMS_OUTDOOR } from '../data/exercises';
import { getDayExerciseProgress } from '../utils/progressUtils';
import { addDaysToISO, formatFullDate } from '../utils/dateUtils';
import ReadinessCheck from './ReadinessCheck';
import ExerciseCard from './ExerciseCard';
import ProgressBar from './ProgressBar';
import OutdoorSession from './OutdoorSession';
import { FinalDay20TestPanel } from './PerformanceLog';

export default function WorkoutSession({
  dayNum,
  programStartDate,
  completedDays,
  exerciseLogs,
  sessionLogs,
  readinessLogs,
  sprintRecords,
  longJumpRecords,
  highJumpRecords,
  settings,
  onSelectDay,
  onUpdateExerciseLog,
  onToggleWarmup,
  onCompleteSession,
  onUpdateReadiness,
  onAddSprint,
  onAddLongJump,
  onAddHighJump,
  onOpenTutorial,
  onStartRestTimer
}) {
  const [warmupExpanded, setWarmupExpanded] = useState(true);
  const [celebrationOpen, setCelebrationOpen] = useState(false);

  const dayPlan = TRAINING_PLAN.find((d) => d.day === dayNum) || TRAINING_PLAN[0];
  const nextDayPlan = TRAINING_PLAN.find((d) => d.day === dayNum + 1);
  const isDayCompleted = completedDays.includes(dayNum);

  const warmupList = dayPlan.isOutdoor ? WARMUP_ITEMS_OUTDOOR : WARMUP_ITEMS_INDOOR;
  const warmupCheckedMap = sessionLogs[dayNum]?.warmupChecked || {};
  const warmupCompletedCount = warmupList.filter((w) => warmupCheckedMap[w.id]).length;

  const { completedCount, totalCount, percent } = getDayExerciseProgress(dayNum, exerciseLogs);
  const scheduledDateStr = programStartDate
    ? formatFullDate(addDaysToISO(programStartDate, dayNum - 1))
    : dayPlan.weekdayLabel;

  const handleCompleteDayClick = () => {
    onCompleteSession(dayNum);
    setCelebrationOpen(true);
  };

  return (
    <div className="pb-28">
      {/* Top day selector strip */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <button
          type="button"
          disabled={dayNum <= 1}
          onClick={() => onSelectDay(Math.max(1, dayNum - 1))}
          className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 disabled:opacity-40"
        >
          ← Day {Math.max(1, dayNum - 1)}
        </button>
        <span className="text-xs font-mono font-bold text-slate-400">
          SESSION {dayNum} OF 20
        </span>
        <button
          type="button"
          disabled={dayNum >= 20}
          onClick={() => onSelectDay(Math.min(20, dayNum + 1))}
          className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 disabled:opacity-40"
        >
          Day {Math.min(20, dayNum + 1)} →
        </button>
      </div>

      {/* Day Header Card */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-4 mb-4 shadow-lg">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-lime-400/15 text-lime-400 border border-lime-400/30">
            DAY {dayPlan.day} • {dayPlan.weekdayLabel.toUpperCase()}
          </span>
          {isDayCompleted && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              🟢 SESSION COMPLETED
            </span>
          )}
        </div>

        <h2 className="text-xl font-extrabold text-white mt-1">{dayPlan.title}</h2>
        <div className="text-xs text-slate-400 mt-0.5">{scheduledDateStr}</div>

        <div className="grid grid-cols-2 gap-2 mt-3 p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
          <div>
            <div className="text-[10px] uppercase text-slate-400">Estimated Duration</div>
            <div className="text-xs font-bold text-white">⏱ {dayPlan.duration}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-slate-400">Training Focus</div>
            <div className="text-xs font-bold text-lime-400">{dayPlan.focus}</div>
          </div>
        </div>

        {dayPlan.coachNote && (
          <div className="mt-3 text-xs text-slate-300 bg-slate-800/50 border border-slate-700/60 rounded-xl p-2.5 leading-relaxed">
            <strong className="text-lime-400">Coach Note: </strong>
            {dayPlan.coachNote}
          </div>
        )}
      </div>

      {/* Daily Readiness Check */}
      <ReadinessCheck
        dayNum={dayNum}
        readinessLog={readinessLogs[dayNum]}
        onUpdateReadiness={(d, payload) => onUpdateReadiness(d, payload)}
      />

      {/* Collapsible Warm-Up System */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-4">
        <button
          type="button"
          onClick={() => setWarmupExpanded(!warmupExpanded)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">🔥</span>
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-orange-400">
                WARM-UP CHECKLIST ({warmupCompletedCount}/{warmupList.length})
              </h3>
              <p className="text-[11px] text-slate-400">
                Complete before maximal plyometrics or sprinting
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-400">
            {warmupExpanded ? '▲ Hide' : '▼ Expand'}
          </span>
        </button>

        {warmupExpanded && (
          <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
            {warmupList.map((item) => {
              const checked = !!warmupCheckedMap[item.id];
              return (
                <div
                  key={item.id}
                  className={`flex items-center justify-between gap-2 p-2.5 rounded-xl border transition-all ${
                    checked
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-slate-950/70 border-slate-800 text-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onToggleWarmup(dayNum, item.id)}
                    className="flex items-center gap-2.5 text-left flex-1"
                  >
                    <span className="text-sm font-bold text-lime-400">
                      {checked ? '☑' : '○'}
                    </span>
                    <div>
                      <div className="text-xs font-semibold">{item.label}</div>
                      <div className="text-[10px] font-mono text-slate-400">{item.target}</div>
                    </div>
                  </button>

                  {item.durationSec && (
                    <button
                      type="button"
                      onClick={() => onStartRestTimer(item.durationSec, `Warm-Up: ${item.label}`)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-orange-300 border border-slate-700 shrink-0"
                    >
                      ⏱ {item.durationSec >= 60 ? `${item.durationSec / 60}m` : `${item.durationSec}s`}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Special Outdoor Session Panel on Day 7 & Day 14 */}
      {dayPlan.isOutdoor && !dayPlan.isFinalTest && (
        <OutdoorSession
          dayNum={dayNum}
          sprintRecords={sprintRecords}
          longJumpRecords={longJumpRecords}
          highJumpRecords={highJumpRecords}
          onAddSprint={onAddSprint}
          onAddLongJump={onAddLongJump}
          onAddHighJump={onAddHighJump}
          onStartRestTimer={onStartRestTimer}
        />
      )}

      {/* Special Day 20 Final Performance Test Panel */}
      {dayPlan.isFinalTest && (
        <FinalDay20TestPanel
          sprintRecords={sprintRecords}
          longJumpRecords={longJumpRecords}
          highJumpRecords={highJumpRecords}
          onAddSprint={onAddSprint}
          onAddLongJump={onAddLongJump}
          onAddHighJump={onAddHighJump}
          onStartRestTimer={onStartRestTimer}
        />
      )}

      {/* Prescribed Exercises List */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
          🏋️ Prescribed Session Exercises ({completedCount} / {totalCount})
        </h3>
        <span className="text-[11px] text-slate-400">Tap sets to mark complete</span>
      </div>

      <div className="space-y-3 mb-6">
        {dayPlan.exercises.map((item) => {
          const exData = EXERCISES.find((e) => e.id === item.exerciseId) || EXERCISES[0];
          return (
            <ExerciseCard
              key={item.instanceId}
              item={item}
              exerciseData={exData}
              log={exerciseLogs[item.instanceId]}
              weightUnit={settings?.weightUnit || 'kg'}
              onUpdateLog={onUpdateExerciseLog}
              onOpenTutorial={onOpenTutorial}
              onStartRestTimer={onStartRestTimer}
            />
          );
        })}
      </div>

      {/* Session Progress & Complete Session Footer Card */}
      <div className="rounded-3xl bg-slate-900 border-2 border-slate-800 p-4 shadow-xl">
        <ProgressBar
          percent={percent}
          label="SESSION PROGRESS"
          sublabel={`${completedCount} / ${totalCount} exercises (${percent}%)`}
          size="lg"
        />

        {completedCount < totalCount && !isDayCompleted && (
          <p className="text-[11px] text-amber-300 mt-2">
            Complete all {totalCount} prescribed exercises (check off sets above) to unlock full session completion, or tap below once finished.
          </p>
        )}

        <button
          type="button"
          disabled={completedCount === 0 && !isDayCompleted}
          onClick={handleCompleteDayClick}
          className={`w-full mt-3 py-3.5 rounded-2xl font-extrabold text-sm uppercase tracking-wider transition-all ${
            completedCount >= totalCount
              ? 'bg-lime-400 hover:bg-lime-300 text-slate-950 shadow-lg'
              : completedCount > 0
              ? 'bg-emerald-500/80 hover:bg-emerald-400 text-slate-950'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          {isDayCompleted
            ? `✓ DAY ${dayNum} COMPLETED (Tap to View Summary)`
            : completedCount >= totalCount
            ? `🎉 COMPLETE DAY ${dayNum} SESSION`
            : `Complete at least 1 exercise to finish (${completedCount}/${totalCount})`}
        </button>
      </div>

      {/* Celebration Modal when Session is Completed */}
      {celebrationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-3xl bg-slate-900 border-2 border-lime-400 p-6 text-center shadow-2xl">
            <div className="text-5xl mb-2">🎉</div>
            <h3 className="text-2xl font-extrabold text-white mb-1">
              DAY {dayNum} COMPLETE!
            </h3>
            <p className="text-sm text-lime-400 font-bold mb-3">
              Excellent work. {completedCount}/{totalCount} exercises logged.
            </p>
            {sessionLogs[dayNum]?.completedAt && (
              <p className="text-[11px] text-slate-400 mb-4">
                Logged on {new Date(sessionLogs[dayNum].completedAt).toLocaleString()}
              </p>
            )}

            {nextDayPlan ? (
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 mb-5 text-left">
                <div className="text-[10px] uppercase font-bold text-slate-400">
                  Tomorrow (Day {nextDayPlan.day})
                </div>
                <div className="text-sm font-extrabold text-white">{nextDayPlan.title}</div>
                <div className="text-xs text-lime-400">{nextDayPlan.focus}</div>
              </div>
            ) : (
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-400/40 mb-5 text-xs text-amber-200 font-bold">
                🏆 You have completed the entire 20-Day Explosive Athletics Program!
              </div>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCelebrationOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold"
              >
                Stay Here
              </button>
              {nextDayPlan && (
                <button
                  type="button"
                  onClick={() => {
                    setCelebrationOpen(false);
                    onSelectDay(nextDayPlan.day);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-lime-400 text-slate-950 text-xs font-extrabold"
                >
                  Preview Day {nextDayPlan.day} →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
