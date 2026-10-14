# 20-DAY EXPLOSIVE ATHLETICS — Personal Sprint & Jump Performance Tracker

A mobile-first athletic performance web application built with **React**, **Vite**, **Tailwind CSS**, and **LocalStorage** persistence.

## Athletic Targets
- 🏃 **100 m Sprint**: `< 13.00 seconds`
- 🦘 **Long Jump**: `≥ 14 ft (14 ft 0 in)`
- ⬆️ **High Jump**: `≥ 4.5 ft (4 ft 6 in)`
- 📅 **Schedule**: 20 Days (Monday–Saturday Indoor/Home Explosive Training • Sunday Outdoor Track & Jump Performance Sessions • Day 20 Official Final Performance Test)

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

## Key Features
1. **Program Start Date & Dynamic Scheduling**: Choose your start date; automatically calculates your current program day, upcoming Sunday outdoor session, and Day 20 Final Test.
2. **Guided Daily Workout & Readiness Check**: Log daily readiness (`🟢 Fresh`, `🟡 Normal`, `🟠 Tired`, `🔴 Very tired / sore`) with automatic volume/safety advisories, check off collapsible `🔥 WARM-UP` items, and mark individual sets complete.
3. **Space Switch on Day 3 & Day 9**: Toggle `Alternating bounds — 4 × 20 m` to `4 × 8/leg` indoor mode with one tap.
4. **Built-In Exercise & Rest Timers**: Active countdown timers for timed exercises (Plank, Side Plank, Wall Sprint, High-Knee Drive) plus a background-accurate `Date.now()` delta Rest Timer (`+30 sec`, `+1 min`, `Pause/Resume`, `Skip`) with Web Audio API completion chime.
5. **Sunday Outdoor Performance Mode (`🏟️ OUTDOOR PERFORMANCE DAY`)**: Dedicated track & field logger for 20m/40m/60m/100m sprints, Long Jump approach runs & best distance, and High Jump approach runs & best height.
6. **Day 20 Final Performance Test (`🏆 FINAL PERFORMANCE TEST`)**: Record official 100m attempts, 4 Long Jump attempts, and High Jump bar clearances with automatic target evaluation (`🏆 Target achieved`, `⚠️ Close to target`, `🔴 Target not yet achieved`).
7. **Searchable Exercise Library & Tutorials**: Step-by-step instructions, coaching cues, common mistakes, safety notes, and offline-resilient tutorial links for every movement.
8. **Offline-First & JSON Backup**: All data persists in `localStorage` (`programStartDate`, `completedDays`, `exerciseLogs`, `sessionLogs`, `sprintRecords`, `longJumpRecords`, `highJumpRecords`, `personalRecords`, `readinessLogs`, `notes`, `settings`) with full JSON Export/Import and double-confirmed Reset.
