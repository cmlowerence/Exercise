export const TRAINING_PLAN = [
  {
    day: 1,
    weekdayLabel: 'Monday',
    title: 'Explosive Foundation',
    phase: 'Phase 1: Foundation & Mechanics',
    duration: '35–45 min',
    focus: 'Explosive lower-body foundation',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Focus on crisp takeoff mechanics and whisper-quiet landings. Reset fully between jumps.',
    exercises: [
      { instanceId: 'd1-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd1-e2', exerciseId: 'squat-jump', name: 'Squat jumps', prescription: '4 × 5', sets: 4, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd1-e3', exerciseId: 'bulgarian-split-squat', name: 'Bulgarian split squats', prescription: '3 × 6/leg', sets: 3, reps: '6/leg', timerSec: null, restSec: 120 },
      { instanceId: 'd1-e4', exerciseId: 'broad-jump', name: 'Broad jumps', prescription: '4 × 3', sets: 4, reps: '3', timerSec: null, restSec: 120 },
      { instanceId: 'd1-e5', exerciseId: 'calf-raise', name: 'Single-leg calf raises', prescription: '3 × 12/leg', sets: 3, reps: '12/leg', timerSec: null, restSec: 60 },
      { instanceId: 'd1-e6', exerciseId: 'pogo-jump', name: 'Pogo jumps', prescription: '3 × 15', sets: 3, reps: '15', timerSec: null, restSec: 90 },
      { instanceId: 'd1-e7', exerciseId: 'plank', name: 'Plank', prescription: '3 × 40 sec', sets: 3, reps: '40 sec', timerSec: 40, restSec: 60 }
    ]
  },
  {
    day: 2,
    weekdayLabel: 'Tuesday',
    title: 'Hamstrings + Unilateral Power',
    phase: 'Phase 1: Foundation & Mechanics',
    duration: '35–45 min',
    focus: 'Posterior chain & single-leg propulsion',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Sprinting and jumping are single-leg events. Control every eccentric lowering phase.',
    exercises: [
      { instanceId: 'd2-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd2-e2', exerciseId: 'reverse-lunge', name: 'Reverse lunges', prescription: '3 × 8/leg', sets: 3, reps: '8/leg', timerSec: null, restSec: 90 },
      { instanceId: 'd2-e3', exerciseId: 'hip-thrust', name: 'Single-leg glute bridge', prescription: '3 × 10/leg', sets: 3, reps: '10/leg', timerSec: null, restSec: 90 },
      { instanceId: 'd2-e4', exerciseId: 'nordic-hamstring', name: 'Nordic hamstring variation', prescription: '3 × 4–6', sets: 3, reps: '4–6', timerSec: null, restSec: 120 },
      { instanceId: 'd2-e5', exerciseId: 'step-up-jump', name: 'Step-up jumps', prescription: '3 × 5/leg', sets: 3, reps: '5/leg', timerSec: null, restSec: 105 },
      { instanceId: 'd2-e6', exerciseId: 'pogo-jump', name: 'Pogo jumps', prescription: '3 × 20', sets: 3, reps: '20', timerSec: null, restSec: 90 },
      { instanceId: 'd2-e7', exerciseId: 'side-plank', name: 'Side plank', prescription: '3 × 30 sec/side', sets: 3, reps: '30 sec/side', timerSec: 30, restSec: 45 }
    ]
  },
  {
    day: 3,
    weekdayLabel: 'Wednesday',
    title: 'Plyometric Day',
    phase: 'Phase 1: Foundation & Mechanics',
    duration: '40–50 min',
    focus: 'Elastic recoil & horizontal-vertical projection',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Treat every jump like a track attempt. If indoor space is tight for Alternating Bounds, toggle the 4 × 8/leg option.',
    exercises: [
      { instanceId: 'd3-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd3-e2', exerciseId: 'squat-jump', name: 'Squat jumps', prescription: '3 × 5', sets: 3, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd3-e3', exerciseId: 'broad-jump', name: 'Broad jumps', prescription: '5 × 3', sets: 5, reps: '3', timerSec: null, restSec: 120 },
      { instanceId: 'd3-e4', exerciseId: 'tuck-jump', name: 'Tuck jumps', prescription: '3 × 5', sets: 3, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd3-e5', exerciseId: 'bounding', name: 'Alternating bounds', prescription: '4 × 20 m', altPrescription: '4 × 8/leg (Indoor Space Mode)', hasSpaceSwitch: true, sets: 4, reps: '20 m', timerSec: null, restSec: 150 },
      { instanceId: 'd3-e6', exerciseId: 'pogo-jump', name: 'Calf pogo jumps', prescription: '3 × 15', sets: 3, reps: '15', timerSec: null, restSec: 90 },
      { instanceId: 'd3-e7', exerciseId: 'hip-mobility', name: 'Mobility', prescription: '8–10 min', sets: 1, reps: 'Flow', timerSec: 480, restSec: 0 }
    ]
  },
  {
    day: 4,
    weekdayLabel: 'Thursday',
    title: 'Strength + Sprint Mechanics',
    phase: 'Phase 1: Foundation & Mechanics',
    duration: '35–45 min',
    focus: 'Explosive strength + sprint mechanics',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Pair heavy unilateral force production with sharp 45-degree wall sprint angles and rapid knee drive.',
    exercises: [
      { instanceId: 'd4-e1', exerciseId: 'bulgarian-split-squat', name: 'Bulgarian split squat', prescription: '4 × 5/leg', sets: 4, reps: '5/leg', timerSec: null, restSec: 120 },
      { instanceId: 'd4-e2', exerciseId: 'single-leg-rdl', name: 'Single-leg Romanian deadlift', prescription: '3 × 6/leg', sets: 3, reps: '6/leg', timerSec: null, restSec: 90 },
      { instanceId: 'd4-e3', exerciseId: 'hip-thrust', name: 'Hip thrust / glute bridge', prescription: '3 × 8', sets: 3, reps: '8', timerSec: null, restSec: 90 },
      { instanceId: 'd4-e4', exerciseId: 'calf-raise', name: 'Calf raises', prescription: '3 × 12', sets: 3, reps: '12', timerSec: null, restSec: 60 },
      { instanceId: 'd4-e5', exerciseId: 'wall-sprint', name: 'Wall sprint drill', prescription: '4 × 10 sec/leg', sets: 4, reps: '10 sec/leg', timerSec: 10, restSec: 75 },
      { instanceId: 'd4-e6', exerciseId: 'high-knee-drive', name: 'High-knee drive', prescription: '3 × 15 sec', sets: 3, reps: '15 sec', timerSec: 15, restSec: 75 },
      { instanceId: 'd4-e7', exerciseId: 'plank', name: 'Core', prescription: '3 × 40 sec', sets: 3, reps: '40 sec', timerSec: 40, restSec: 60 }
    ]
  },
  {
    day: 5,
    weekdayLabel: 'Friday',
    title: 'Reactive Power',
    phase: 'Phase 1: Foundation & Mechanics',
    duration: '30–35 min',
    focus: 'Fast ground contact & CNS priming',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Important: Keep this session relatively light and crisp so your legs are 100% fresh for Sunday.',
    exercises: [
      { instanceId: 'd5-e1', exerciseId: 'pogo-jump', name: 'Pogo jumps', prescription: '4 × 15', sets: 4, reps: '15', timerSec: null, restSec: 90 },
      { instanceId: 'd5-e2', exerciseId: 'squat-jump', name: 'Squat jumps', prescription: '3 × 4', sets: 3, reps: '4', timerSec: null, restSec: 120 },
      { instanceId: 'd5-e3', exerciseId: 'broad-jump', name: 'Broad jumps', prescription: '3 × 3', sets: 3, reps: '3', timerSec: null, restSec: 120 },
      { instanceId: 'd5-e4', exerciseId: 'split-squat-jump', name: 'Split squat jumps', prescription: '3 × 5/leg', sets: 3, reps: '5/leg', timerSec: null, restSec: 105 },
      { instanceId: 'd5-e5', exerciseId: 'tuck-jump', name: 'Tuck jumps', prescription: '2 × 5', sets: 2, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd5-e6', exerciseId: 'hip-mobility', name: 'Mobility', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 0 }
    ]
  },
  {
    day: 6,
    weekdayLabel: 'Saturday',
    title: 'Recovery',
    phase: 'Phase 1: Foundation & Mechanics',
    duration: '25–30 min',
    focus: 'Tissue restoration & pre-Sunday freshness',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'No hard leg training today. Mobilize hips, ankles, and hamstrings so you explode tomorrow on the track.',
    exercises: [
      { instanceId: 'd6-e1', exerciseId: 'recovery-walk', name: '10–15 min walking', prescription: '10–15 min', sets: 1, reps: '10–15 min', timerSec: 600, restSec: 0 },
      { instanceId: 'd6-e2', exerciseId: 'hip-mobility', name: 'Hip mobility', prescription: '2 × 8/side', sets: 2, reps: '8/side', timerSec: 180, restSec: 30 },
      { instanceId: 'd6-e3', exerciseId: 'ankle-mobility', name: 'Ankle mobility', prescription: '2 × 12/side', sets: 2, reps: '12/side', timerSec: 120, restSec: 30 },
      { instanceId: 'd6-e4', exerciseId: 'hamstring-mobility', name: 'Hamstring mobility', prescription: '2 × 10/side', sets: 2, reps: '10/side', timerSec: 150, restSec: 30 },
      { instanceId: 'd6-e5', exerciseId: 'plank', name: 'Light core', prescription: '5–10 min', sets: 2, reps: '30 sec', timerSec: 30, restSec: 45 }
    ]
  },
  {
    day: 7,
    weekdayLabel: 'Sunday',
    title: 'OUTDOOR PERFORMANCE SESSION 1',
    phase: 'Phase 1: Foundation & Mechanics',
    duration: '55–75 min',
    focus: 'Outdoor Sprint + Long Jump + High Jump',
    isOutdoor: true,
    isFinalTest: false,
    coachNote: 'This is the most important outdoor session of Week 1. Rest 3–5 minutes between maximal sprints and jump attempts. Focus: Approach → controlled final steps → powerful take-off → knee drive → landing.',
    exercises: [
      { instanceId: 'd7-e1', exerciseId: 'warmup-protocol', name: 'Full Track Warm-Up & Progressive Accelerations', prescription: '3–5 min jog + drills + 2–3 build-ups', sets: 1, reps: 'Complete checklist', timerSec: 300, restSec: 60 },
      { instanceId: 'd7-e2', exerciseId: 'acceleration-sprint', name: 'Sprint: 4 × 20m Acceleration & 3 × 40m (90–95%)', prescription: '4 × 20 m + 3 × 40 m', sets: 7, reps: '20m / 40m', timerSec: null, restSec: 210 },
      { instanceId: 'd7-e3', exerciseId: 'long-jump-session', name: 'Long Jump: Approach Runs & Full Jumps', prescription: '5–8 approaches + 4–6 jumps', sets: 5, reps: 'Max quality', timerSec: null, restSec: 180 },
      { instanceId: 'd7-e4', exerciseId: 'high-jump-session', name: 'High Jump: Approach Curve & Takeoff Jumps', prescription: '4–6 approaches + 4–8 jumps', sets: 5, reps: 'Penultimate & takeoff', timerSec: null, restSec: 180 }
    ]
  },
  {
    day: 8,
    weekdayLabel: 'Monday',
    title: 'Strength',
    phase: 'Phase 2: Progressive Overload & Power',
    duration: '40–45 min',
    focus: 'Progressive lower-body force production',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Week 2 progression begins. Drive out of the bottom of every rep with maximum bar/body speed.',
    exercises: [
      { instanceId: 'd8-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd8-e2', exerciseId: 'bulgarian-split-squat', name: 'Bulgarian split squat', prescription: '4 × 6/leg', sets: 4, reps: '6/leg', timerSec: null, restSec: 120 },
      { instanceId: 'd8-e3', exerciseId: 'single-leg-rdl', name: 'Single-leg Romanian deadlift', prescription: '4 × 6/leg', sets: 4, reps: '6/leg', timerSec: null, restSec: 90 },
      { instanceId: 'd8-e4', exerciseId: 'hip-thrust', name: 'Hip thrust / glute bridge', prescription: '4 × 8', sets: 4, reps: '8', timerSec: null, restSec: 90 },
      { instanceId: 'd8-e5', exerciseId: 'reverse-lunge', name: 'Reverse lunges', prescription: '3 × 8/leg', sets: 3, reps: '8/leg', timerSec: null, restSec: 90 },
      { instanceId: 'd8-e6', exerciseId: 'calf-raise', name: 'Single-leg calf raises', prescription: '4 × 12/leg', sets: 4, reps: '12/leg', timerSec: null, restSec: 60 },
      { instanceId: 'd8-e7', exerciseId: 'plank', name: 'Plank', prescription: '3 × 45 sec', sets: 3, reps: '45 sec', timerSec: 45, restSec: 60 }
    ]
  },
  {
    day: 9,
    weekdayLabel: 'Tuesday',
    title: 'Plyometric Power',
    phase: 'Phase 2: Progressive Overload & Power',
    duration: '40–50 min',
    focus: 'Maximal horizontal & vertical projection',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Attack the ground with stiff ankles and aggressive arm swing.',
    exercises: [
      { instanceId: 'd9-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd9-e2', exerciseId: 'broad-jump', name: 'Broad jumps', prescription: '5 × 3', sets: 5, reps: '3', timerSec: null, restSec: 120 },
      { instanceId: 'd9-e3', exerciseId: 'squat-jump', name: 'Squat jumps', prescription: '4 × 5', sets: 4, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd9-e4', exerciseId: 'tuck-jump', name: 'Tuck jumps', prescription: '4 × 5', sets: 4, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd9-e5', exerciseId: 'bounding', name: 'Alternating bounds', prescription: '4 × 20 m', altPrescription: '4 × 8/leg (Indoor Space Mode)', hasSpaceSwitch: true, sets: 4, reps: '20 m', timerSec: null, restSec: 150 },
      { instanceId: 'd9-e6', exerciseId: 'step-up-jump', name: 'Step-up jumps', prescription: '3 × 6/leg', sets: 3, reps: '6/leg', timerSec: null, restSec: 105 },
      { instanceId: 'd9-e7', exerciseId: 'side-plank', name: 'Side plank', prescription: '3 × 35 sec/side', sets: 3, reps: '35 sec/side', timerSec: 35, restSec: 45 }
    ]
  },
  {
    day: 10,
    weekdayLabel: 'Wednesday',
    title: 'Strength + Unilateral Power',
    phase: 'Phase 2: Progressive Overload & Power',
    duration: '40–45 min',
    focus: 'Single-leg stability, hamstrings & sprint posture',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Combine eccentric hamstring strength with explosive single-leg hip extension.',
    exercises: [
      { instanceId: 'd10-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd10-e2', exerciseId: 'bulgarian-split-squat', name: 'Bulgarian split squat', prescription: '4 × 5/leg', sets: 4, reps: '5/leg', timerSec: null, restSec: 120 },
      { instanceId: 'd10-e3', exerciseId: 'nordic-hamstring', name: 'Nordic hamstring variation', prescription: '3 × 5–6', sets: 3, reps: '5–6', timerSec: null, restSec: 120 },
      { instanceId: 'd10-e4', exerciseId: 'hip-thrust', name: 'Single-leg glute bridge', prescription: '3 × 12/leg', sets: 3, reps: '12/leg', timerSec: null, restSec: 90 },
      { instanceId: 'd10-e5', exerciseId: 'wall-sprint', name: 'Wall sprint drill', prescription: '4 × 12 sec/leg', sets: 4, reps: '12 sec/leg', timerSec: 12, restSec: 75 },
      { instanceId: 'd10-e6', exerciseId: 'high-knee-drive', name: 'High-knee drive', prescription: '4 × 15 sec', sets: 4, reps: '15 sec', timerSec: 15, restSec: 75 },
      { instanceId: 'd10-e7', exerciseId: 'plank', name: 'Core', prescription: '3 × 45 sec', sets: 3, reps: '45 sec', timerSec: 45, restSec: 60 }
    ]
  },
  {
    day: 11,
    weekdayLabel: 'Thursday',
    title: 'Reactive Power',
    phase: 'Phase 2: Progressive Overload & Power',
    duration: '35–40 min',
    focus: 'Rapid stretch-shortening cycle & ankle stiffness',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Minimize time on the ground. Think "stiff ankles, fast pop."',
    exercises: [
      { instanceId: 'd11-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd11-e2', exerciseId: 'pogo-jump', name: 'Pogo jumps', prescription: '4 × 20', sets: 4, reps: '20', timerSec: null, restSec: 90 },
      { instanceId: 'd11-e3', exerciseId: 'split-squat-jump', name: 'Split squat jumps', prescription: '4 × 5/leg', sets: 4, reps: '5/leg', timerSec: null, restSec: 105 },
      { instanceId: 'd11-e4', exerciseId: 'broad-jump', name: 'Broad jumps', prescription: '4 × 3', sets: 4, reps: '3', timerSec: null, restSec: 120 },
      { instanceId: 'd11-e5', exerciseId: 'tuck-jump', name: 'Tuck jumps', prescription: '3 × 5', sets: 3, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd11-e6', exerciseId: 'calf-raise', name: 'Single-leg calf raises', prescription: '3 × 15/leg', sets: 3, reps: '15/leg', timerSec: null, restSec: 60 },
      { instanceId: 'd11-e7', exerciseId: 'ankle-mobility', name: 'Mobility', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 0 }
    ]
  },
  {
    day: 12,
    weekdayLabel: 'Friday',
    title: 'Light Explosive',
    phase: 'Phase 2: Progressive Overload & Power',
    duration: '30 min',
    focus: 'Neural activation without residual fatigue',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Keep volume low and speed high so you enter Weekend 2 feeling springy and fast.',
    exercises: [
      { instanceId: 'd12-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd12-e2', exerciseId: 'squat-jump', name: 'Squat jumps', prescription: '3 × 4', sets: 3, reps: '4', timerSec: null, restSec: 120 },
      { instanceId: 'd12-e3', exerciseId: 'pogo-jump', name: 'Pogo jumps', prescription: '3 × 15', sets: 3, reps: '15', timerSec: null, restSec: 90 },
      { instanceId: 'd12-e4', exerciseId: 'wall-sprint', name: 'Wall sprint drill', prescription: '3 × 10 sec/leg', sets: 3, reps: '10 sec/leg', timerSec: 10, restSec: 75 },
      { instanceId: 'd12-e5', exerciseId: 'a-skip', name: 'A-skip drill', prescription: '3 × 20 m', sets: 3, reps: '20 m / 20 sec', timerSec: 20, restSec: 60 },
      { instanceId: 'd12-e6', exerciseId: 'hip-mobility', name: 'Mobility', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 0 }
    ]
  },
  {
    day: 13,
    weekdayLabel: 'Saturday',
    title: 'Recovery',
    phase: 'Phase 2: Progressive Overload & Power',
    duration: '25–30 min',
    focus: 'Active recovery & mobility prep for Outdoor Session 2',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Restore full range of motion in your hips and ankles. Hydrate well and sleep early tonight.',
    exercises: [
      { instanceId: 'd13-e1', exerciseId: 'recovery-walk', name: '10–15 min walking', prescription: '10–15 min', sets: 1, reps: '10–15 min', timerSec: 600, restSec: 0 },
      { instanceId: 'd13-e2', exerciseId: 'hip-mobility', name: 'Hip mobility', prescription: '2 × 8/side', sets: 2, reps: '8/side', timerSec: 180, restSec: 30 },
      { instanceId: 'd13-e3', exerciseId: 'ankle-mobility', name: 'Ankle mobility', prescription: '2 × 12/side', sets: 2, reps: '12/side', timerSec: 120, restSec: 30 },
      { instanceId: 'd13-e4', exerciseId: 'hamstring-mobility', name: 'Hamstring mobility', prescription: '2 × 10/side', sets: 2, reps: '10/side', timerSec: 150, restSec: 30 },
      { instanceId: 'd13-e5', exerciseId: 'plank', name: 'Light core', prescription: '5–10 min', sets: 2, reps: '30 sec', timerSec: 30, restSec: 45 }
    ]
  },
  {
    day: 14,
    weekdayLabel: 'Sunday',
    title: 'OUTDOOR SESSION 2',
    phase: 'Phase 2: Progressive Overload & Power',
    duration: '60–75 min',
    focus: 'High-quality Sprint (20m/40m/60m) + Long Jump + High Jump',
    isOutdoor: true,
    isFinalTest: false,
    coachNote: 'Increase quality rather than simply increasing volume. Record your Best 20 m, Best 40 m, Best 60 m (if performed), Long-Jump best attempt, and High-Jump best attempt.',
    exercises: [
      { instanceId: 'd14-e1', exerciseId: 'warmup-protocol', name: 'Full Track Warm-Up & Accelerations', prescription: '3–5 min jog + drills + 3 build-ups', sets: 1, reps: 'Complete checklist', timerSec: 300, restSec: 60 },
      { instanceId: 'd14-e2', exerciseId: 'acceleration-sprint', name: 'Sprint Quality: Best 20m, 40m & 60m', prescription: '3 × 20m + 2 × 40m + 1–2 × 60m', sets: 6, reps: '20m / 40m / 60m', timerSec: null, restSec: 240 },
      { instanceId: 'd14-e3', exerciseId: 'long-jump-session', name: 'Long Jump: Approach Precision & Best Attempt', prescription: '4–6 approaches + 4–6 full jumps', sets: 5, reps: 'Record best jump', timerSec: null, restSec: 180 },
      { instanceId: 'd14-e4', exerciseId: 'high-jump-session', name: 'High Jump: Penultimate Step & Best Clearance', prescription: '4 approaches + 4–6 jumps', sets: 5, reps: 'Record best height', timerSec: null, restSec: 180 }
    ]
  },
  {
    day: 15,
    weekdayLabel: 'Monday',
    title: 'Moderate Power',
    phase: 'Phase 3: Peaking & Tapering',
    duration: '35 min',
    focus: 'Maintaining high force output with reduced fatigue',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Championship taper phase begins. Volume drops slightly while movement velocity stays at 100%.',
    exercises: [
      { instanceId: 'd15-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd15-e2', exerciseId: 'bulgarian-split-squat', name: 'Bulgarian split squat', prescription: '3 × 5/leg', sets: 3, reps: '5/leg', timerSec: null, restSec: 120 },
      { instanceId: 'd15-e3', exerciseId: 'broad-jump', name: 'Broad jumps', prescription: '4 × 3', sets: 4, reps: '3', timerSec: null, restSec: 120 },
      { instanceId: 'd15-e4', exerciseId: 'squat-jump', name: 'Squat jumps', prescription: '3 × 5', sets: 3, reps: '5', timerSec: null, restSec: 120 },
      { instanceId: 'd15-e5', exerciseId: 'single-leg-rdl', name: 'Single-leg Romanian deadlift', prescription: '3 × 5/leg', sets: 3, reps: '5/leg', timerSec: null, restSec: 90 },
      { instanceId: 'd15-e6', exerciseId: 'wall-sprint', name: 'Wall sprint drill', prescription: '3 × 10 sec/leg', sets: 3, reps: '10 sec/leg', timerSec: 10, restSec: 75 },
      { instanceId: 'd15-e7', exerciseId: 'plank', name: 'Plank', prescription: '3 × 40 sec', sets: 3, reps: '40 sec', timerSec: 40, restSec: 60 }
    ]
  },
  {
    day: 16,
    weekdayLabel: 'Tuesday',
    title: 'Light Explosive',
    phase: 'Phase 3: Peaking & Tapering',
    duration: '30 min',
    focus: 'Fast-twitch recruitment & elastic bounce',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Every jump should feel effortless and springy. Stop well before any muscular burn.',
    exercises: [
      { instanceId: 'd16-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8–10 min', sets: 1, reps: '8–10 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd16-e2', exerciseId: 'pogo-jump', name: 'Pogo jumps', prescription: '3 × 15', sets: 3, reps: '15', timerSec: null, restSec: 90 },
      { instanceId: 'd16-e3', exerciseId: 'split-squat-jump', name: 'Split squat jumps', prescription: '3 × 4/leg', sets: 3, reps: '4/leg', timerSec: null, restSec: 105 },
      { instanceId: 'd16-e4', exerciseId: 'step-up-jump', name: 'Step-up jumps', prescription: '3 × 4/leg', sets: 3, reps: '4/leg', timerSec: null, restSec: 105 },
      { instanceId: 'd16-e5', exerciseId: 'high-knee-drive', name: 'High-knee drive', prescription: '3 × 12 sec', sets: 3, reps: '12 sec', timerSec: 12, restSec: 75 },
      { instanceId: 'd16-e6', exerciseId: 'hip-mobility', name: 'Mobility', prescription: '8 min', sets: 1, reps: '8 min', timerSec: 480, restSec: 0 }
    ]
  },
  {
    day: 17,
    weekdayLabel: 'Wednesday',
    title: 'Sharpening',
    phase: 'Phase 3: Peaking & Tapering',
    duration: '25–30 min',
    focus: 'CNS potentiation & technical sharpness',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Short, razor-sharp efforts to keep nervous system firing frequency elevated.',
    exercises: [
      { instanceId: 'd17-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8 min', sets: 1, reps: '8 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd17-e2', exerciseId: 'broad-jump', name: 'Broad jumps', prescription: '3 × 2', sets: 3, reps: '2', timerSec: null, restSec: 120 },
      { instanceId: 'd17-e3', exerciseId: 'tuck-jump', name: 'Tuck jumps', prescription: '2 × 4', sets: 2, reps: '4', timerSec: null, restSec: 120 },
      { instanceId: 'd17-e4', exerciseId: 'wall-sprint', name: 'Wall sprint drill', prescription: '3 × 8 sec/leg', sets: 3, reps: '8 sec/leg', timerSec: 8, restSec: 75 },
      { instanceId: 'd17-e5', exerciseId: 'a-skip', name: 'A-skip drill', prescription: '3 × 15 m', sets: 3, reps: '15 m / 15 sec', timerSec: 15, restSec: 60 },
      { instanceId: 'd17-e6', exerciseId: 'ankle-mobility', name: 'Ankle & Hip mobility', prescription: '8 min', sets: 1, reps: '8 min', timerSec: 480, restSec: 0 }
    ]
  },
  {
    day: 18,
    weekdayLabel: 'Thursday',
    title: 'Very Light',
    phase: 'Phase 3: Peaking & Tapering',
    duration: '20–25 min',
    focus: 'Supercompensation & neuromuscular priming',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Just enough stimulus to keep tendons snappy without draining glycogen or CNS energy.',
    exercises: [
      { instanceId: 'd18-e1', exerciseId: 'warmup-protocol', name: 'Warm-up', prescription: '8 min', sets: 1, reps: '8 min', timerSec: 480, restSec: 30 },
      { instanceId: 'd18-e2', exerciseId: 'pogo-jump', name: 'Pogo jumps', prescription: '2 × 12', sets: 2, reps: '12', timerSec: null, restSec: 90 },
      { instanceId: 'd18-e3', exerciseId: 'squat-jump', name: 'Squat jumps', prescription: '2 × 3', sets: 2, reps: '3', timerSec: null, restSec: 120 },
      { instanceId: 'd18-e4', exerciseId: 'high-knee-drive', name: 'High-knee drive', prescription: '2 × 10 sec', sets: 2, reps: '10 sec', timerSec: 10, restSec: 75 },
      { instanceId: 'd18-e5', exerciseId: 'hamstring-mobility', name: 'Hip & Hamstring mobility', prescription: '8 min', sets: 1, reps: '8 min', timerSec: 480, restSec: 0 }
    ]
  },
  {
    day: 19,
    weekdayLabel: 'Friday / Pre-Test',
    title: 'Complete Rest / Mobility',
    phase: 'Phase 3: Peaking & Tapering',
    duration: '20 min',
    focus: 'Full recovery, hydration & mental rehearsal',
    isOutdoor: false,
    isFinalTest: false,
    coachNote: 'Zero plyometric or strength load today. Walk lightly, mobilize gently, and visualize your Day 20 targets.',
    exercises: [
      { instanceId: 'd19-e1', exerciseId: 'recovery-walk', name: '10 min easy walk', prescription: '10 min', sets: 1, reps: '10 min', timerSec: 600, restSec: 0 },
      { instanceId: 'd19-e2', exerciseId: 'hip-mobility', name: 'Gentle hip mobility', prescription: '5 min', sets: 1, reps: '5 min', timerSec: 300, restSec: 0 },
      { instanceId: 'd19-e3', exerciseId: 'ankle-mobility', name: 'Gentle ankle mobility', prescription: '5 min', sets: 1, reps: '5 min', timerSec: 300, restSec: 0 },
      { instanceId: 'd19-e4', exerciseId: 'hamstring-mobility', name: 'Gentle hamstring mobility', prescription: '5 min', sets: 1, reps: '5 min', timerSec: 300, restSec: 0 }
    ]
  },
  {
    day: 20,
    weekdayLabel: 'Final Test Day',
    title: '🏆 FINAL PERFORMANCE TEST',
    phase: 'Phase 3: Peaking & Tapering',
    duration: '60–90 min',
    focus: '100m (<13.00s) • Long Jump (≥14 ft) • High Jump (≥4.5 ft)',
    isOutdoor: true,
    isFinalTest: true,
    coachNote: 'Championship evaluation day. Warm up thoroughly, take full 4–6 minute recoveries between official attempts, and log your results below. Note: 20 days builds neural drive and reactive stiffness—individual results depend on baseline athleticism and consistent training.',
    exercises: [
      { instanceId: 'd20-e1', exerciseId: 'warmup-protocol', name: 'Championship Track Warm-Up', prescription: 'Full dynamic warm-up + 3 progressive accelerations', sets: 1, reps: 'Complete checklist', timerSec: 300, restSec: 120 },
      { instanceId: 'd20-e2', exerciseId: 'acceleration-sprint', name: '100 Meter Official Test (2 Attempts)', prescription: 'Target: < 13.00 sec', sets: 2, reps: '100 m max effort', timerSec: null, restSec: 300 },
      { instanceId: 'd20-e3', exerciseId: 'long-jump-session', name: 'Long Jump Official Test (4 Attempts)', prescription: 'Target: ≥ 14 ft (14 ft 0 in)', sets: 4, reps: 'Full approach jump', timerSec: null, restSec: 240 },
      { instanceId: 'd20-e4', exerciseId: 'high-jump-session', name: 'High Jump Official Test (Height Attempts)', prescription: 'Target: ≥ 4.5 ft (4 ft 6 in)', sets: 4, reps: 'Progressive heights', timerSec: null, restSec: 240 }
    ]
  }
];
