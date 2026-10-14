export function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function parseISODate(isoStr) {
  if (!isoStr) return new Date();
  const [y, m, d] = isoStr.split('-').map(Number);
  return new Date(y, m - 1, d, 12, 0, 0);
}

export function addDaysToISO(isoStr, daysToAdd) {
  const dt = parseISODate(isoStr);
  dt.setDate(dt.getDate() + daysToAdd);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function formatShortDate(isoStr) {
  if (!isoStr) return '';
  const dt = parseISODate(isoStr);
  return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatFullDate(isoStr) {
  if (!isoStr) return '';
  const dt = parseISODate(isoStr);
  return dt.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

export function getWeekdayName(isoStr) {
  if (!isoStr) return '';
  const dt = parseISODate(isoStr);
  return dt.toLocaleDateString('en-US', { weekday: 'long' });
}

export function isDateSunday(isoStr) {
  if (!isoStr) return false;
  const dt = parseISODate(isoStr);
  return dt.getDay() === 0;
}

export function calculateCurrentProgramDay(programStartDate, completedDays = []) {
  if (!programStartDate) return 1;
  const start = parseISODate(programStartDate);
  const today = parseISODate(getTodayISO());
  const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  if (diffDays < 1) {
    // If start date is in the future or user is progressing manually, show next uncompleted day
    for (let i = 1; i <= 20; i++) {
      if (!completedDays.includes(i)) return i;
    }
    return 1;
  }
  return Math.min(20, Math.max(1, diffDays));
}

export function getNextOutdoorInfo(programStartDate, currentDay) {
  if (!programStartDate) {
    return { label: 'Sunday (Day 7)', daysAway: 7 - currentDay };
  }
  for (let offset = 0; offset <= 20; offset++) {
    const checkISO = addDaysToISO(getTodayISO(), offset);
    if (isDateSunday(checkISO)) {
      return {
        label: offset === 0 ? 'Today (Sunday Outdoor!)' : `Sunday, ${formatShortDate(checkISO)}`,
        daysAway: offset,
        isoDate: checkISO
      };
    }
  }
  return { label: 'Sunday', daysAway: 0 };
}
