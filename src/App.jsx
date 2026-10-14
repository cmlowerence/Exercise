import React, { useState } from 'react';
import { useWorkoutProgress } from './hooks/useWorkoutProgress';
import { calculateCurrentProgramDay } from './utils/dateUtils';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import ExerciseLibrary from './components/ExerciseLibrary';
import ProgressDashboard from './components/ProgressDashboard';
import SettingsView from './components/SettingsView';
import ExerciseDetail from './components/ExerciseDetail';
import RestTimer from './components/RestTimer';

export default function App() {
  const {
    programStartDate,
    setProgramStartDate,
    completedDays,
    exerciseLogs,
    updateExerciseLog,
    sessionLogs,
    toggleWarmupItem,
    completeDaySession,
    sprintRecords,
    addSprintRecord,
    longJumpRecords,
    addLongJumpRecord,
    highJumpRecords,
    addHighJumpRecord,
    personalRecords,
    readinessLogs,
    setReadinessLogs,
    settings,
    setSettings,
    exportAllData,
    importAllData,
    resetAllData
  } = useWorkoutProgress();

  const [activeTab, setActiveTab] = useState('home');
  const [selectedDay, setSelectedDay] = useState(null);
  const [tutorialExercise, setTutorialExercise] = useState(null);
  const [restTimerState, setRestTimerState] = useState({
    isOpen: false,
    seconds: 120,
    label: 'REST TIMER'
  });

  const effectiveDay =
    selectedDay || calculateCurrentProgramDay(programStartDate, completedDays);

  const handleUpdateReadiness = (dayNum, payload) => {
    setReadinessLogs((prev) => ({ ...prev, [dayNum]: payload }));
  };

  const handleStartRestTimer = (seconds = 120, label = 'REST TIMER') => {
    setRestTimerState({ isOpen: true, seconds, label });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-lime-400 selection:text-slate-950 overflow-x-hidden">
      {/* Top App Header */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/90">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-base font-black tracking-tight text-white leading-none">
              20-DAY EXPLOSIVE ATHLETICS
            </h1>
            <p className="text-[11px] font-bold text-lime-400 tracking-wide mt-1">
              Sprint • Long Jump • High Jump
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleStartRestTimer(120, 'Quick Rest Timer')}
            className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-lime-400 flex items-center gap-1"
          >
            <span>⏱</span>
            <span>Timer</span>
          </button>
        </div>
      </header>

      {/* Main Content Container (Mobile-First max-w-md) */}
      <main className="max-w-md mx-auto px-3.5 pt-3">
        {activeTab === 'home' && (
          <Dashboard
            programStartDate={programStartDate}
            onSetProgramStartDate={setProgramStartDate}
            completedDays={completedDays}
            exerciseLogs={exerciseLogs}
            sessionLogs={sessionLogs}
            readinessLogs={readinessLogs}
            sprintRecords={sprintRecords}
            longJumpRecords={longJumpRecords}
            highJumpRecords={highJumpRecords}
            personalRecords={personalRecords}
            settings={settings}
            selectedDay={effectiveDay}
            onSelectDay={(d) => setSelectedDay(d)}
            onUpdateExerciseLog={updateExerciseLog}
            onToggleWarmup={toggleWarmupItem}
            onCompleteSession={completeDaySession}
            onUpdateReadiness={handleUpdateReadiness}
            onAddSprint={addSprintRecord}
            onAddLongJump={addLongJumpRecord}
            onAddHighJump={addHighJumpRecord}
            onOpenTutorial={(ex) => setTutorialExercise(ex)}
            onStartRestTimer={handleStartRestTimer}
            onNavigateTab={(t) => setActiveTab(t)}
          />
        )}

        {activeTab === 'plan' && (
          <Calendar
            programStartDate={programStartDate}
            completedDays={completedDays}
            exerciseLogs={exerciseLogs}
            onSelectDayFromCalendar={(dayNum) => {
              setSelectedDay(dayNum);
              setActiveTab('home');
            }}
          />
        )}

        {activeTab === 'exercises' && (
          <ExerciseLibrary onOpenTutorial={(ex) => setTutorialExercise(ex)} />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            completedDays={completedDays}
            exerciseLogs={exerciseLogs}
            sprintRecords={sprintRecords}
            longJumpRecords={longJumpRecords}
            highJumpRecords={highJumpRecords}
            onAddSprint={addSprintRecord}
            onAddLongJump={addLongJumpRecord}
            onAddHighJump={addHighJumpRecord}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsView
            programStartDate={programStartDate}
            onSetProgramStartDate={setProgramStartDate}
            settings={settings}
            onUpdateSettings={setSettings}
            onExportData={exportAllData}
            onImportData={importAllData}
            onResetProgram={resetAllData}
          />
        )}
      </main>

      {/* Exercise Tutorial Modal */}
      <ExerciseDetail
        exercise={tutorialExercise}
        onClose={() => setTutorialExercise(null)}
      />

      {/* Persistent Background-Accurate Rest Timer */}
      <RestTimer
        isOpen={restTimerState.isOpen}
        initialSeconds={restTimerState.seconds}
        label={restTimerState.label}
        soundEnabled={settings?.soundEnabled}
        onClose={() => setRestTimerState((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Bottom Mobile Navigation */}
      <Navigation activeTab={activeTab} onSelectTab={setActiveTab} />
    </div>
  );
}
