import { TRAINING_PLAN } from '../data/trainingPlan';
import { addDaysToISO, getTodayISO, parseISODate } from './dateUtils';

export function getDayExerciseProgress(dayNum, exerciseLogs = {}) {
  const dayPlan = TRAINING_PLAN.find((d) => d.day === dayNum);
  if (!dayPlan) return { completedCount: 0, totalCount: 0, percent: 0 };
  const totalCount = dayPlan.exercises.length;
  let completedCount = 0;

  dayPlan.exercises.forEach((ex) => {
    const log = exerciseLogs[ex.instanceId];
    if (log) {
      const setsDone = Array.isArray(log.completedSets) ? log.completedSets.filter(Boolean).length : 0;
      if (log.completed || setsDone >= ex.sets) {
        completedCount += 1;
      }
    }
  });

  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  return { completedCount, totalCount, percent };
}

export function getDayCalendarStatus(dayNum, programStartDate, completedDays = [], exerciseLogs = {}) {
  if (completedDays.includes(dayNum)) {
    return { code: 'completed', icon: '🟢', label: 'Completed' };
  }
  const { completedCount } = getDayExerciseProgress(dayNum, exerciseLogs);
  if (!programStartDate) {
    if (completedCount > 0) return { code: 'partial', icon: '🟡', label: 'Partially completed' };
    return dayNum === 1
      ? { code: 'today', icon: '🔵', label: 'Today' }
      : { code: 'upcoming', icon: '⚪', label: 'Upcoming' };
  }

  const dayISO = addDaysToISO(programStartDate, dayNum - 1);
  const todayISO = getTodayISO();
  if (dayISO === todayISO) {
    return completedCount > 0
      ? { code: 'partial', icon: '🟡', label: 'In Progress (Today)' }
      : { code: 'today', icon: '🔵', label: 'Today' };
  }

  if (parseISODate(dayISO) < parseISODate(todayISO)) {
    return completedCount > 0
      ? { code: 'partial', icon: '🟡', label: 'Partially completed' }
      : { code: 'missed', icon: '🔴', label: 'Missed' };
  }

  if (completedCount > 0) {
    return { code: 'partial', icon: '🟡', label: 'Partially completed' };
  }
  return { code: 'upcoming', icon: '⚪', label: 'Upcoming' };
}

export function calculateStreak(completedDays = []) {
  if (!completedDays.length) return 0;
  const sorted = [...new Set(completedDays)].sort((a, b) => b - a);
  let streak = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] - sorted[i + 1] === 1) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

export function countTotalCompletedExercises(exerciseLogs = {}) {
  return Object.values(exerciseLogs).filter((log) => {
    if (!log) return false;
    if (log.completed) return true;
    const setsDone = Array.isArray(log.completedSets) ? log.completedSets.filter(Boolean).length : 0;
    return setsDone > 0 && setsDone === (log.completedSets?.length || 0);
  }).length;
}
