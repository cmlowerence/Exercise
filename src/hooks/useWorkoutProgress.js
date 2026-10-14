import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { computeSprintPRs, computeJumpPR } from '../utils/recordUtils';

export function useWorkoutProgress() {
  const [programStartDate, setProgramStartDate] = useLocalStorage('programStartDate', null);
  const [completedDays, setCompletedDays] = useLocalStorage('completedDays', []);
  const [exerciseLogs, setExerciseLogs] = useLocalStorage('exerciseLogs', {});
  const [sessionLogs, setSessionLogs] = useLocalStorage('sessionLogs', {});
  const [sprintRecords, setSprintRecords] = useLocalStorage('sprintRecords', []);
  const [longJumpRecords, setLongJumpRecords] = useLocalStorage('longJumpRecords', []);
  const [highJumpRecords, setHighJumpRecords] = useLocalStorage('highJumpRecords', []);
  const [personalRecords, setPersonalRecords] = useLocalStorage('personalRecords', {
    sprint20m: null,
    sprint40m: null,
    sprint60m: null,
    sprint100m: null,
    longJumpInches: null,
    highJumpInches: null
  });
  const [readinessLogs, setReadinessLogs] = useLocalStorage('readinessLogs', {});
  const [notes, setNotes] = useLocalStorage('notes', {});
  const [settings, setSettings] = useLocalStorage('settings', {
    weightUnit: 'kg',
    soundEnabled: true,
    autoStartRestTimer: true,
    forceOutdoorPreview: false
  });

  // Automatically keep personalRecords synced whenever sprint/jump records change
  useEffect(() => {
    const { bestByDist } = computeSprintPRs(sprintRecords);
    const lj = computeJumpPR(longJumpRecords);
    const hj = computeJumpPR(highJumpRecords);

    setPersonalRecords({
      sprint20m: bestByDist['20m'],
      sprint40m: bestByDist['40m'],
      sprint60m: bestByDist['60m'],
      sprint100m: bestByDist['100m'],
      longJumpInches: lj.bestInches,
      highJumpInches: hj.bestInches
    });
  }, [sprintRecords, longJumpRecords, highJumpRecords]);

  const updateExerciseLog = (instanceId, totalSets, patch) => {
    setExerciseLogs((prev) => {
      const existing = prev[instanceId] || {
        completedSets: Array(totalSets).fill(false),
        weight: '',
        reps: '',
        distanceFt: '',
        distanceIn: '',
        timeSec: '',
        attempts: '',
        heightFt: '',
        heightIn: '',
        useAltSpace: false,
        completed: false,
        notes: ''
      };
      const updated = { ...existing, ...patch };
      if (Array.isArray(updated.completedSets)) {
        updated.completed = updated.completedSets.every(Boolean) && updated.completedSets.length > 0;
      }
      return { ...prev, [instanceId]: updated };
    });
  };

  const toggleWarmupItem = (dayNum, itemId) => {
    setSessionLogs((prev) => {
      const dayLog = prev[dayNum] || { warmupChecked: {}, completedAt: null };
      const currentChecked = !!dayLog.warmupChecked?.[itemId];
      return {
        ...prev,
        [dayNum]: {
          ...dayLog,
          warmupChecked: { ...(dayLog.warmupChecked || {}), [itemId]: !currentChecked }
        }
      };
    });
  };

  const completeDaySession = (dayNum) => {
    const nowISO = new Date().toISOString();
    if (!completedDays.includes(dayNum)) {
      setCompletedDays((prev) => [...prev, dayNum].sort((a, b) => a - b));
    }
    setSessionLogs((prev) => ({
      ...prev,
      [dayNum]: {
        ...(prev[dayNum] || {}),
        completedAt: nowISO
      }
    }));
  };

  const addSprintRecord = (record) => {
    const entry = {
      id: `sp-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      date: new Date().toISOString().slice(0, 10),
      ...record
    };
    setSprintRecords((prev) => [...prev, entry]);
  };

  const addLongJumpRecord = (record) => {
    const entry = {
      id: `lj-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      date: new Date().toISOString().slice(0, 10),
      ...record
    };
    setLongJumpRecords((prev) => [...prev, entry]);
  };

  const addHighJumpRecord = (record) => {
    const entry = {
      id: `hj-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      date: new Date().toISOString().slice(0, 10),
      ...record
    };
    setHighJumpRecords((prev) => [...prev, entry]);
  };

  const exportAllData = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      app: '20-DAY EXPLOSIVE ATHLETICS',
      programStartDate,
      completedDays,
      exerciseLogs,
      sessionLogs,
      sprintRecords,
      longJumpRecords,
      highJumpRecords,
      personalRecords,
      readinessLogs,
      notes,
      settings
    };
    return JSON.stringify(payload, null, 2);
  };

  const importAllData = (jsonString) => {
    const data = JSON.parse(jsonString);
    if (data.programStartDate !== undefined) setProgramStartDate(data.programStartDate);
    if (Array.isArray(data.completedDays)) setCompletedDays(data.completedDays);
    if (data.exerciseLogs) setExerciseLogs(data.exerciseLogs);
    if (data.sessionLogs) setSessionLogs(data.sessionLogs);
    if (Array.isArray(data.sprintRecords)) setSprintRecords(data.sprintRecords);
    if (Array.isArray(data.longJumpRecords)) setLongJumpRecords(data.longJumpRecords);
    if (Array.isArray(data.highJumpRecords)) setHighJumpRecords(data.highJumpRecords);
    if (data.personalRecords) setPersonalRecords(data.personalRecords);
    if (data.readinessLogs) setReadinessLogs(data.readinessLogs);
    if (data.notes) setNotes(data.notes);
    if (data.settings) setSettings(data.settings);
  };

  const resetAllData = () => {
    setProgramStartDate(null);
    setCompletedDays([]);
    setExerciseLogs({});
    setSessionLogs({});
    setSprintRecords([]);
    setLongJumpRecords([]);
    setHighJumpRecords([]);
    setPersonalRecords({
      sprint20m: null,
      sprint40m: null,
      sprint60m: null,
      sprint100m: null,
      longJumpInches: null,
      highJumpInches: null
    });
    setReadinessLogs({});
    setNotes({});
  };

  return {
    programStartDate,
    setProgramStartDate,
    completedDays,
    setCompletedDays,
    exerciseLogs,
    updateExerciseLog,
    sessionLogs,
    setSessionLogs,
    toggleWarmupItem,
    completeDaySession,
    sprintRecords,
    addSprintRecord,
    setSprintRecords,
    longJumpRecords,
    addLongJumpRecord,
    setLongJumpRecords,
    highJumpRecords,
    addHighJumpRecord,
    setHighJumpRecords,
    personalRecords,
    readinessLogs,
    setReadinessLogs,
    notes,
    setNotes,
    settings,
    setSettings,
    exportAllData,
    importAllData,
    resetAllData
  };
}
