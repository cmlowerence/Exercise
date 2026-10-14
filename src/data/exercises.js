export const EXERCISES = [
  // STRENGTH
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    category: 'Strength',
    loggingType: 'strength',
    sets: 4,
    reps: '5–6 / leg',
    duration: null,
    distance: null,
    rest: 120,
    difficulty: 'Intermediate',
    purpose: 'Builds unilateral leg strength, hip stability, and single-leg force production directly transferable to sprinting push-off and single-leg jump take-off.',
    instructions: [
      'Stand about 2 feet in front of a sturdy bench, chair, or step facing away from it.',
      'Place the top of your rear foot onto the elevated surface behind you.',
      'Brace your core, keep your torso slightly angled forward (sprint posture), and lower your back knee toward the floor.',
      'Stop when your front thigh is roughly parallel to the ground, keeping your front knee tracking over your middle toes.',
      'Drive forcefully through the mid-foot and heel of your front leg to return to the standing position.'
    ],
    cues: [
      '85% of weight on the front foot',
      'Slight forward torso lean for glute/quad co-activation',
      'Controlled 2-second descent, explosive drive up',
      'Keep hips square and knee aligned with toes'
    ],
    mistakes: [
      'Standing too close or too far from the bench',
      'Letting the front knee cave inward (valgus collapse)',
      'Pushing excessively off the back elevated foot',
      'Bouncing carelessly at the bottom of the rep'
    ],
    safety: 'Use a stable surface at roughly knee height. Start with bodyweight to master balance before holding dumbbells or a backpack.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=bulgarian+split+squat+form+athletics'
  },
  {
    id: 'reverse-lunge',
    name: 'Reverse Lunge',
    category: 'Strength',
    loggingType: 'strength',
    sets: 3,
    reps: '8 / leg',
    duration: null,
    distance: null,
    rest: 90,
    difficulty: 'Beginner',
    purpose: 'Develops deceleration control, hip extension power, and unilateral hamstring/glute strength with less knee shear than forward lunges.',
    instructions: [
      'Stand tall with feet hip-width apart and hands on hips or holding light weights.',
      'Step backward with one leg and lower your hips until both knees form approximately 90-degree angles.',
      'Keep your front shin nearly vertical and your chest proud.',
      'Push forcefully through the front foot to bring your rear leg forward to the starting position in one crisp motion.'
    ],
    cues: [
      'Step back softly, drive up powerfully',
      'Drive through the front heel and mid-foot',
      'Drive the rear knee forward to hip height on return (optional sprint finish)',
      'Keep ribs stacked over pelvis'
    ],
    mistakes: [
      'Slamming the back knee into the floor',
      'Stepping on a tightrope (too narrow, losing balance)',
      'Leaning excessively sideways over the front hip'
    ],
    safety: 'Perform on a non-slip surface or mat so your rear knee is protected if it lightly touches the ground.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=reverse+lunge+athletic+form'
  },
  {
    id: 'single-leg-rdl',
    name: 'Single-Leg Romanian Deadlift (RDL)',
    category: 'Strength',
    loggingType: 'strength',
    sets: 3,
    reps: '6 / leg',
    duration: null,
    distance: null,
    rest: 90,
    difficulty: 'Intermediate',
    purpose: 'Strengthens the posterior chain (hamstrings and glutes) and ankle/foot stabilizers crucial for high-speed sprinting and takeoff plant stability.',
    instructions: [
      'Stand on one leg with a soft 15-degree bend in the standing knee.',
      'Hinge at your hips by pushing your butt straight back while extending your free leg behind you in a straight line with your torso.',
      'Lower your torso until it is nearly parallel to the floor or until you feel a strong hamstring stretch.',
      'Squeeze your standing glute and hamstring to snap your hips forward back to standing.'
    ],
    cues: [
      'Head to back heel stays one steel rod',
      'Keep both hips pointing down toward the floor (do not open the hip)',
      'Grip the floor with your big toe for balance',
      'Snap hips through at the top'
    ],
    mistakes: [
      'Rounding the lower back instead of hinging at the hips',
      'Rotating the raised hip upward toward the ceiling',
      'Turning the movement into a squat by bending the knee too much'
    ],
    safety: 'If balance is challenging, lightly fingertips-touch a wall or chair with your free hand while maintaining full load on the working hamstring.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=single+leg+romanian+deadlift+form'
  },
  {
    id: 'hip-thrust',
    name: 'Hip Thrust / Single-Leg Glute Bridge',
    category: 'Strength',
    loggingType: 'strength',
    sets: 3,
    reps: '8–10',
    duration: null,
    distance: null,
    rest: 90,
    difficulty: 'Beginner',
    purpose: 'Maximizes horizontal hip extension force—the primary engine for top-end sprint speed and broad/long jump projection.',
    instructions: [
      'For Hip Thrust: Rest your upper back (just below shoulder blades) against a sturdy couch/bench edge with feet flat on the floor. For Glute Bridge: Lie flat on your back.',
      'Set your feet so your shins are vertical at the top of the movement.',
      'Brace your abs, tuck your chin slightly, and drive through your heels to extend your hips upward.',
      'Pause for 1 full second at full hip extension (knees, hips, and shoulders in a straight line), then lower under control.'
    ],
    cues: [
      'Drive heels through the floor',
      'Lock out with glutes, not by overarching the lower back',
      'Keep chin tucked and eyes forward',
      '1-second hard squeeze at the top'
    ],
    mistakes: [
      'Hyperextending the lumbar spine at the top',
      'Placing feet too far forward (overworking hamstrings) or too close',
      'Rising onto the toes instead of pushing through heels'
    ],
    safety: 'Ensure the bench or couch cannot slide backward before starting the set.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=hip+thrust+and+single+leg+glute+bridge+form'
  },
  {
    id: 'calf-raise',
    name: 'Single-Leg Calf Raise',
    category: 'Strength',
    loggingType: 'strength',
    sets: 3,
    reps: '12 / leg',
    duration: null,
    distance: null,
    rest: 60,
    difficulty: 'Beginner',
    purpose: 'Builds Achilles tendon and gastrocnemius/soleus strength to prevent ankle collapse during sprint ground contact and jump takeoff.',
    instructions: [
      'Stand on one foot on the edge of a step or flat floor, lightly touching a wall for balance.',
      'Keep your knee straight (avoid locking out harshly) and press up onto the ball of your foot as high as possible.',
      'Hold the peak contraction at the top for 1 second.',
      'Lower your heel slowly over 2–3 seconds to full stretch before the next repetition.'
    ],
    cues: [
      'Press directly through the big and second toe mound',
      'Full range of motion—maximum height at the top',
      'Pause 1 second at peak height',
      'Control the lowering phase'
    ],
    mistakes: [
      'Rushing with tiny bouncy half-reps',
      'Rolling outward onto the pinky toe edge of the foot',
      'Bending the knee to cheat the weight up'
    ],
    safety: 'Avoid dropping into an aggressive deep stretch if your Achilles tendon feels stiff; warm up ankles first.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=single+leg+calf+raise+proper+form'
  },
  {
    id: 'nordic-hamstring',
    name: 'Nordic Hamstring Variation',
    category: 'Strength',
    loggingType: 'strength',
    sets: 3,
    reps: '4–6',
    duration: null,
    distance: null,
    rest: 120,
    difficulty: 'Advanced',
    purpose: 'Develops eccentric hamstring strength to protect against high-speed sprint strains and absorb extreme forces during sprinting.',
    instructions: [
      'Kneel on a padded mat or folded towel and anchor your ankles securely under a heavy couch, bed frame, or held by a partner.',
      'Cross your hands over your chest or hold them ready in front of you, keeping a straight line from knees to head.',
      'Slowly lean forward from the knees ONLY, resisting gravity with your hamstrings for as long as possible (3–5 seconds).',
      'Catch yourself softly with your hands in a push-up position at the bottom, then lightly push back up to the starting position.'
    ],
    cues: [
      'Keep hips fully extended—do not bend at the waist',
      'Fight gravity every inch of the way down',
      '3 to 4 second slow eccentric lowering',
      'Use hands to assist back to the top smoothly'
    ],
    mistakes: [
      'Bending at the hips (pike position) to make it easier',
      'Dropping uncontrolled without resisting',
      'Doing too many reps when fatigued'
    ],
    safety: 'High eccentric load—stop immediately if you feel any sharp pinch or cramping in the hamstring belly or behind the knee.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=nordic+hamstring+curl+at+home+progression'
  },

  // PLYOMETRICS
  {
    id: 'squat-jump',
    name: 'Squat Jump',
    category: 'Plyometrics',
    loggingType: 'plyo',
    sets: 4,
    reps: '5',
    duration: null,
    distance: null,
    rest: 120,
    difficulty: 'Beginner',
    purpose: 'Develops vertical concentric and stretch-shortening cycle power for high jump elevation and explosive starting drive.',
    instructions: [
      'Stand with feet shoulder-width apart and arms raised overhead.',
      'Rapidly dip into a quarter-to-half squat while swinging your arms back behind your hips.',
      'Immediately reverse direction and explode straight up as high as possible, extending hips, knees, and ankles (triple extension).',
      'Land softly toe-to-heel with knees tracking over toes, absorb the force, and fully reset for 2–3 seconds before the next jump.'
    ],
    cues: [
      'Fast countermovement dip—do not sink too deep',
      'Violent upward arm swing',
      'Try to touch the ceiling on every rep',
      'Whisper-quiet landing, then reset completely'
    ],
    mistakes: [
      'Squatting all the way down (slows down elastic recoil)',
      'Rushing reps continuously like cardio instead of max height',
      'Landing stiff-legged or with knees caving inward'
    ],
    safety: 'Perform on a flat, non-slip surface with cushioned athletic shoes. Prioritize soft landings and full reset between reps.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=explosive+squat+jump+form+track+and+field'
  },
  {
    id: 'broad-jump',
    name: 'Broad Jump',
    category: 'Plyometrics',
    loggingType: 'jump',
    sets: 4,
    reps: '3',
    duration: null,
    distance: 'Max horizontal',
    rest: 120,
    difficulty: 'Intermediate',
    purpose: 'Develops horizontal explosive power important for sprint acceleration and long jump takeoff projection.',
    instructions: [
      'Stand with feet hip-to-shoulder width apart, rising tall with arms extended overhead.',
      'Snap your arms back while loading your hips backward into an athletic quarter-squat.',
      'Swing your arms forcefully forward and upward at a 45-degree angle while driving through the floor to project your body forward.',
      'Bring your knees forward in flight and land softly on both feet with hips sinking back to absorb impact.',
      'Walk back and reset for 3–5 seconds between every single repetition.'
    ],
    cues: [
      'Swing arms aggressively',
      'Load hips back like a coiled spring',
      'Explode forward at 45 degrees',
      'Land softly with knees aligned',
      'Reset completely between repetitions'
    ],
    mistakes: [
      'Squatting too deeply before takeoff',
      'Collapsing knees inward on takeoff or landing',
      'Landing stiffly on straight legs',
      'Performing repetitions rapidly without recovery'
    ],
    safety: 'Ensure clear landing space ahead free of rugs or obstacles that could slide. Never attempt max distance on wet or slippery floors.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=standing+broad+jump+technique+athletics'
  },
  {
    id: 'tuck-jump',
    name: 'Tuck Jump',
    category: 'Plyometrics',
    loggingType: 'plyo',
    sets: 3,
    reps: '5',
    duration: null,
    distance: null,
    rest: 120,
    difficulty: 'Intermediate',
    purpose: 'Trains rapid vertical reactivity and mid-air knee drive essential for clearing distance in the long jump and height in the high jump.',
    instructions: [
      'Stand tall with feet hip-width apart.',
      'Perform a quick quarter-squat dip and jump vertically with maximum intent.',
      'At the peak of your jump, pull your knees up toward your chest (rather than dropping your chest down to your knees).',
      'Quickly extend your legs back down to prepare for a soft, balanced landing on the balls of your feet.'
    ],
    cues: [
      'Jump for height FIRST, then tuck knees at the peak',
      'Keep chest upright—bring knees to chest',
      'Extend legs down early to cushion the landing',
      'Pause 2 seconds between jumps if form degrades'
    ],
    mistakes: [
      'Pulling heels to butt instead of knees to chest',
      'Hunching torso forward to fake knee height',
      'Landing with feet still tucked (hard thud)'
    ],
    safety: 'High-impact movement. Stop the set immediately if your landings become loud or heavy.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=tuck+jump+plyometric+technique'
  },
  {
    id: 'pogo-jump',
    name: 'Pogo Jump / Calf Pogo Jump',
    category: 'Plyometrics',
    loggingType: 'plyo',
    sets: 3,
    reps: '15–20',
    duration: null,
    distance: null,
    rest: 90,
    difficulty: 'Beginner',
    purpose: 'Builds ankle-complex stiffness and fast stretch-shortening cycle (elastic bounce) for sub-0.15s ground contact times in sprinting and jumping.',
    instructions: [
      'Stand tall with legs nearly straight (only a micro-bend in the knees) and hands on hips or elbows bent at 90 degrees.',
      'Bounce vertically off the balls of your feet using primarily your ankles and calves, keeping your heels off the ground.',
      'Pull your toes up toward your shins (dorsiflexion) while in the air so your foot lands pre-tensed like a stiff spring.',
      'Minimize ground contact time—pretend the floor is hot coals while still jumping as high as possible.'
    ],
    cues: [
      'Stiff ankles, minimal knee bend',
      'Toes up in the air (dorsiflexion)',
      'Pop off the floor instantly—hot-coal contacts',
      'Rigid core from head to ankles'
    ],
    mistakes: [
      'Bending the knees deeply (turning it into a squat jump)',
      'Letting heels crash heavily into the floor',
      'Pointing toes downward in the air (soft ankle on landing)'
    ],
    safety: 'Wear supportive athletic footwear. If shins feel overly tight, reduce volume and perform extra ankle mobility.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=pogo+jumps+plyometrics+sprint+training'
  },
  {
    id: 'split-squat-jump',
    name: 'Split Squat Jump',
    category: 'Plyometrics',
    loggingType: 'plyo',
    sets: 3,
    reps: '5 / leg',
    duration: null,
    distance: null,
    rest: 120,
    difficulty: 'Intermediate',
    purpose: 'Translates unilateral split-squat strength into high-velocity single-leg explosive power.',
    instructions: [
      'Start in a split-lunge stance with your front foot flat and rear foot on the ball of the foot.',
      'Dip down until your front thigh is roughly 45–60 degrees while loading your arms back.',
      'Drive violently through your front foot and swing your arms upward to jump vertically into the air.',
      'Land softly in the same split stance (do all reps on one leg, then switch legs) so you can focus 100% on vertical height and balance.'
    ],
    cues: [
      'Push mostly through the front leg',
      'Coordinate opposite arm and leg action like sprinting',
      'Explode straight up, land softly in control',
      'Reset balance before each jump'
    ],
    mistakes: [
      'Losing balance because stance is too narrow',
      'Banging the back knee on the floor upon landing',
      'Cutting hip extension short in the air'
    ],
    safety: 'Keep stance hip-width wide (like train tracks, not a tightrope) for stable landings.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=split+squat+jumps+explosive+power'
  },
  {
    id: 'step-up-jump',
    name: 'Step-Up Jump',
    category: 'Plyometrics',
    loggingType: 'plyo',
    sets: 3,
    reps: '5 / leg',
    duration: null,
    distance: null,
    rest: 105,
    difficulty: 'Intermediate',
    purpose: 'Mimics the exact single-leg vertical drive and free-leg knee punch used in long jump and high jump takeoffs.',
    instructions: [
      'Stand facing a sturdy step, low box, or bottom staircase step (8–14 inches high) with one foot planted firmly on top.',
      'Drive forcefully down through the elevated foot while punching your opposite knee and opposite arm upward.',
      'Project your body vertically off the step so the top foot leaves the box completely.',
      'Land softly back on the box with the top foot, step down with the trailing foot to absorb force, and reset.'
    ],
    cues: [
      'Crush the step downward to go upward',
      'Punch the free knee and opposite arm toward the sky',
      'Full extension of the jumping leg ankle/knee/hip',
      'Controlled two-part landing'
    ],
    mistakes: [
      'Using a box that is too high or unstable',
      'Pushing off the floor foot instead of driving through the elevated leg',
      'Looking down at your feet instead of keeping chest tall'
    ],
    safety: 'Use a low, rock-solid stair step or platform that cannot tip or slide.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=explosive+step+up+jumps+track+and+field'
  },
  {
    id: 'bounding',
    name: 'Alternating Bounds',
    category: 'Plyometrics',
    loggingType: 'jump',
    sets: 4,
    reps: '20 m (or 8 / leg indoor)',
    duration: null,
    distance: '20 m',
    rest: 150,
    difficulty: 'Advanced',
    purpose: 'Bridges horizontal plyometrics and sprinting by training single-leg horizontal-vertical force application.',
    instructions: [
      'Start from a short 2-step jog or standing split stance.',
      'Push off one leg forcefully to bound forward and slightly upward, driving the opposite knee out in front to hip height.',
      'Hold the split-air position briefly ("float phase"), then land actively on the mid-foot of the lead leg and immediately bound onto the next leg.',
      'Indoor Small-Space Alternative: Perform 4 × 8 alternating lateral/short forward bounds per leg with a 1-second stick or rhythmic turn-around.'
    ],
    cues: [
      'Drive the lead knee forward and up to parallel',
      'Swing arms big in opposition to legs',
      'Paw the ground actively right underneath your center of mass',
      'Cover maximum distance per stride with smooth rhythm'
    ],
    mistakes: [
      'Reaching the foot way out in front of the knee (braking force)',
      'Collapsing at the hip or knee on ground contact',
      'Flailing arms sideways instead of front-to-back'
    ],
    safety: 'If indoor space is under 20m, switch to the 4 × 8/leg indoor stationary/short-corridor variation on the workout card.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=alternating+bounds+track+and+field+drill'
  },

  // SPRINT
  {
    id: 'wall-sprint',
    name: 'Wall Sprint Drill',
    category: 'Sprint',
    loggingType: 'timed',
    sets: 4,
    reps: '10 sec / leg',
    duration: 10,
    distance: null,
    rest: 75,
    difficulty: 'Beginner',
    purpose: 'Teaches proper 45-degree acceleration body lean, triple extension, and pistons-like knee drive for the first 30 meters of the 100m sprint.',
    instructions: [
      'Place both hands flat against a sturdy wall at shoulder height and walk your feet back until your body forms a straight 45-degree angle.',
      'Stay up on the balls of your feet with heels elevated and core locked tight.',
      'Drive one knee up to hip height with toes pulled up toward your shin (dorsiflexed).',
      'On prompt, rapidly switch legs in crisp single-switches, double-switches, or rapid 10-second piston marches/drives without letting your hips sag.'
    ],
    cues: [
      'Straight line from ear, shoulder, hip, knee to ankle',
      'Drive knee to hip height, toes pulled up',
      'Strike the floor backward and down into the ground',
      'Do not let lower back arch or butt stick out'
    ],
    mistakes: [
      'Bending at the waist instead of leaning from the ankles',
      'Letting the supporting heel drop flat to the floor',
      'Curling the heel toward the butt instead of driving the knee forward'
    ],
    safety: 'Wear shoes with grip so your feet do not slip backward while leaning against the wall.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=wall+sprint+drill+acceleration+mechanics'
  },
  {
    id: 'high-knee-drive',
    name: 'High-Knee Drive',
    category: 'Sprint',
    loggingType: 'timed',
    sets: 3,
    reps: '15 sec',
    duration: 15,
    distance: null,
    rest: 75,
    difficulty: 'Beginner',
    purpose: 'Develops rapid hip flexor turnover, upright max-velocity sprint posture, and elastic mid-foot strike.',
    instructions: [
      'Stand tall with chest proud, hips pressed slightly forward ("tall hips"), and elbows bent at 90 degrees.',
      'Rapidly alternate driving your knees up to waist level while staying strictly on the balls of your feet.',
      'Pump your arms cheek-to-hip in crisp sync with your legs.',
      'Maintain a tall posture for the full 15-second burst without leaning backward.'
    ],
    cues: [
      'Tall hips—imagine a string pulling the crown of your head up',
      'Cheek-to-pocket arm action',
      'Dorsiflexed foot (toes up) on every knee lift',
      'Fast, rhythmic ground contacts directly under hips'
    ],
    mistakes: [
      'Leaning backward as fatigue sets in',
      'Crossing arms across the midline of the chest',
      'Landing flat-footed'
    ],
    safety: 'Keep landings elastic on the balls of the feet; perform on a mat or firm athletic surface.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=high+knees+sprint+drill+form'
  },
  {
    id: 'acceleration-sprint',
    name: 'Acceleration & Flying Sprints (20m / 40m / 60m)',
    category: 'Sprint',
    loggingType: 'sprint',
    sets: 4,
    reps: '20 m & 40 m',
    duration: null,
    distance: '20 m / 40 m',
    rest: 210,
    difficulty: 'Intermediate',
    purpose: 'Directly trains maximal horizontal force projection (0–20m) and transition to upright top-end speed (20–40m+) for breaking 13 seconds in the 100m.',
    instructions: [
      'Start from a 2-point split stance or 3-point start with your front shin angled forward at roughly 45 degrees.',
      'Push powerfully backward against the ground for the first 8–10 steps, keeping your head neutral and eyes focused 3–5 meters ahead.',
      'Gradually rise to tall upright sprint posture between 15m and 30m—do not pop straight up on step one.',
      'For 40m efforts, maintain 90–95% relaxed maximal speed with zero jaw/shoulder tension, then decelerate smoothly over 15–20 meters.',
      'Rest a full 3 to 5 minutes between hard sprints so every rep is high quality.'
    ],
    cues: [
      'Push the earth behind you on steps 1 to 8',
      'Violent arm split on the very first step',
      'Relaxed face, relaxed shoulders at top speed',
      'Full 3–5 min recovery—never turn speed work into conditioning'
    ],
    mistakes: [
      'Popping straight upright on the very first step',
      'Overstriding (reaching out in front of hips)',
      'Cutting rest intervals short and running slow, fatigued reps'
    ],
    safety: 'Never perform 90–100% sprints without completing the full dynamic warm-up and 2–3 progressive build-ups first.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=100m+sprint+acceleration+technique+20m+40m'
  },
  {
    id: 'a-skip',
    name: 'A-Skip Sprint Drill',
    category: 'Sprint',
    loggingType: 'plyo',
    sets: 3,
    reps: '20 m (or 20 sec in place)',
    duration: 20,
    distance: '20 m',
    rest: 60,
    difficulty: 'Beginner',
    purpose: 'Grooves sprint rhythm, elastic ankle bounce, and coordinated downward foot strike directly beneath the hips.',
    instructions: [
      'Stand tall with shoulders relaxed and core braced.',
      'Drive your right knee up to hip height with toes pulled up while hopping lightly on your left foot.',
      'Drive the right foot actively straight down to strike the ground beneath your hip, then immediately repeat on the left side in a rhythmic skip.',
      'Keep your arms swinging in opposition (left arm forward when right knee rises).'
    ],
    cues: [
      'Knee up, toe up, strike straight down',
      'Tall posture—no slouching at the waist',
      'Bouncy ankle contacts',
      'Smooth, snappy rhythm'
    ],
    mistakes: [
      'Floating lazily instead of snapping the foot down',
      'Moving the same-side arm and leg together',
      'Kicking the lower leg forward like a pendulum'
    ],
    safety: 'Great low-to-moderate impact coordination drill; can be performed in place indoors or over 15–20m outdoors.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=a+skip+track+and+field+tutorial'
  },
  {
    id: 'long-jump-session',
    name: 'Long Jump Approach & Takeoff Practice',
    category: 'Sprint',
    loggingType: 'longJump',
    sets: 5,
    reps: '5–8 run-throughs + 4–6 jumps',
    duration: null,
    distance: 'Target ≥ 14 ft',
    rest: 180,
    difficulty: 'Intermediate',
    purpose: 'Combines horizontal approach velocity with penultimate-step lowering and explosive vertical takeoff to exceed 14 feet.',
    instructions: [
      'Measure a consistent 10-to-12-stride approach mark so you hit the takeoff zone at high, controlled speed without stuttering.',
      'Perform 5–8 approach run-throughs first without jumping to verify your foot lands consistently on the board/mark.',
      'On your final 2 steps: slightly lower your center of mass on the penultimate (second-to-last) step, then plant a fast, flat active foot on the takeoff step.',
      'Drive your free knee and opposite arm violently upward at takeoff (look ahead toward the horizon, not down at the board).',
      'In flight, hold a tall knee-drive/hang position, then sweep both legs forward and collapse softly through the knees upon landing.'
    ],
    cues: [
      'Accelerate smoothly—top controllable speed at the board',
      'Flat-foot rolling plant on takeoff, eyes up',
      'Punch free knee and arm to the sky',
      'Sweep heels forward and scoop arms through on landing'
    ],
    mistakes: [
      'Looking down at the takeoff line (drops chest and kills lift)',
      'Slowing down or chopping steps in the last 3 strides',
      'Dropping feet early in the air instead of extending legs forward'
    ],
    safety: 'Only perform full-speed long jumps into a sand pit or safe, soft outdoor turf area with non-slip takeoff footing.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=long+jump+approach+and+takeoff+tutorial'
  },
  {
    id: 'high-jump-session',
    name: 'High Jump J-Curve Approach & Takeoff',
    category: 'Sprint',
    loggingType: 'highJump',
    sets: 5,
    reps: '4–6 approaches + 4–8 jumps',
    duration: null,
    distance: 'Target ≥ 4.5 ft',
    rest: 180,
    difficulty: 'Intermediate',
    purpose: 'Converts curved horizontal velocity and inward lean into vertical lift to clear 4.5 ft (4 ft 6 in) and beyond.',
    instructions: [
      'Use an 8-stride J-curve approach (5 straight strides building rhythm + 3 curved strides leaning away from the bar/mat).',
      'Practice 4–6 curved approach run-throughs focusing on leaning inward toward the center of the curve from your ankles (not your waist).',
      'Plant your outside takeoff foot slightly ahead of your hips pointing roughly toward the far back corner of the mat.',
      'Drive your inside knee up and across your body while hinges convert your lean into pure vertical lift.',
      'If no high-jump mat is available outdoors, perform Scissor Jumps over a low flexible bungee/cord or measure vertical takeoff reach/clearance safely on feet.'
    ],
    cues: [
      'Accelerate around the curve—maintain inward lean',
      'Fast penultimate step into a strong takeoff plant',
      'Drive inside knee up and across to turn your back to the bar',
      'Jump UP first before arching over the bar'
    ],
    mistakes: [
      'Leaning into the bar too early before leaving the ground',
      'Stopping on the takeoff foot instead of rolling through fast',
      'Running the curve in a wide circle instead of a tight J'
    ],
    safety: 'Never perform a back-layout (Fosbury Flop) without a proper landing mat. If training on grass/turf without a pit, use the Scissor-Jump technique landing safely on your feet.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=high+jump+j+curve+and+scissor+drill+tutorial'
  },

  // MOBILITY
  {
    id: 'hip-mobility',
    name: 'Dynamic Hip Mobility Flow (90/90 & World’s Greatest Stretch)',
    category: 'Mobility',
    loggingType: 'mobility',
    sets: 2,
    reps: '8 / side',
    duration: 180,
    distance: null,
    rest: 30,
    difficulty: 'Beginner',
    purpose: 'Opens hip flexors, adductors, and external rotators so you can achieve full stride length and clean hip extension without compensation.',
    instructions: [
      'Part 1 (Half-Kneeling Hip Flexor Pulse): Kneel on one knee, tuck your pelvis under (posterior tilt), and gently pulse forward 8 times per side.',
      'Part 2 (World’s Greatest Stretch): Step into a long lunge, drop your inside elbow toward your front instep, then rotate your chest and reach toward the ceiling 6 times per side.',
      'Part 3 (90/90 Hip Switches): Sit on the floor with both knees bent at 90 degrees and smoothly rotate both knees from side to side for 10 total reps.'
    ],
    cues: [
      'Squeeze the back glute during hip flexor pulses',
      'Breathe deeply into every end-range position',
      'Move smoothly—never force a joint past pinch'
    ],
    mistakes: [
      'Arching the lower back instead of tucking the pelvis',
      'Holding your breath during stretches'
    ],
    safety: 'Keep movements smooth and pain-free; use a folded towel under your knee.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=hip+mobility+routine+for+sprinters'
  },
  {
    id: 'ankle-mobility',
    name: 'Ankle Dorsiflexion & Foot Mobility (Knee-to-Wall)',
    category: 'Mobility',
    loggingType: 'mobility',
    sets: 2,
    reps: '12 / side',
    duration: 120,
    distance: null,
    rest: 30,
    difficulty: 'Beginner',
    purpose: 'Maintains optimal ankle dorsiflexion range and Achilles suppleness required for deep acceleration angles and shock absorption.',
    instructions: [
      'Face a wall in a half-kneeling or split stance with your front big toe 3–4 inches from the baseboard.',
      'Keeping your front heel glued flat to the floor, drive your front knee forward to lightly touch the wall over your second/third toe.',
      'Hold for 2 seconds, return, and repeat for 12 reps per ankle, followed by 10 slow ankle circles in each direction.'
    ],
    cues: [
      'Heel stays 100% glued to the floor',
      'Knee tracks directly over middle toes (do not collapse inward)',
      'Slow, rhythmic pulses'
    ],
    mistakes: [
      'Lifting the heel to reach the wall',
      'Letting the foot arch collapse inward'
    ],
    safety: 'If you feel a bony block in the front of the ankle, shorten the distance slightly and focus on calf soft-tissue relaxation.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=ankle+dorsiflexion+mobility+sprinters'
  },
  {
    id: 'hamstring-mobility',
    name: 'Active Hamstring Mobility (Supine Leg Swings & Scoops)',
    category: 'Mobility',
    loggingType: 'mobility',
    sets: 2,
    reps: '10 / side',
    duration: 150,
    distance: null,
    rest: 30,
    difficulty: 'Beginner',
    purpose: 'Restores hamstring tissue length and sciatic nerve glide after eccentric loading and sprinting.',
    instructions: [
      'Lie on your back and clasp both hands behind one thigh with your hip flexed to 90 degrees.',
      'Actively extend your lower leg upward toward the ceiling until you feel a mild, comfortable stretch, hold 2 seconds, and lower.',
      'Perform 10 active extensions per leg, then stand and perform 10 gentle walking hamstring scoops per side.'
    ],
    cues: [
      'Pull toes toward shin at the top for calf/hamstring integration',
      'Keep lower back flat on the floor',
      'Gentle dynamic tension—not an aggressive static pull'
    ],
    mistakes: [
      'Forcing the knee straight to the point of trembling pain',
      'Rounding the spine during standing scoops'
    ],
    safety: 'Avoid aggressive long-hold static stretching immediately before maximal sprints; use active dynamic glides instead.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=active+hamstring+mobility+track+athletes'
  },
  {
    id: 'recovery-walk',
    name: 'Active Recovery Walk',
    category: 'Mobility',
    loggingType: 'timed',
    sets: 1,
    reps: '10–15 min',
    duration: 600,
    distance: null,
    rest: 0,
    difficulty: 'Beginner',
    purpose: 'Promotes blood flow, lymphatic clearance, and parasympathetic nervous system recovery between high-output explosive days.',
    instructions: [
      'Walk outdoors or indoors at an easy, relaxed conversational pace for 10 to 15 minutes.',
      'Focus on nasal breathing, relaxed shoulders, and natural arm swing.',
      'Use this time to hydrate and let your central nervous system recharge for Sunday’s outdoor performance session.'
    ],
    cues: [
      'Easy conversational pace',
      'Deep nasal breathing',
      'Relaxed posture'
    ],
    mistakes: [
      'Turning recovery day into a brisk exhausting power-walk or jog'
    ],
    safety: 'Wear comfortable cushioned shoes.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=active+recovery+for+sprinters+and+jumpers'
  },

  // CORE
  {
    id: 'plank',
    name: 'Athletic Forearm Plank / Core Stability',
    category: 'Core',
    loggingType: 'timed',
    sets: 3,
    reps: '40 sec',
    duration: 40,
    distance: null,
    rest: 60,
    difficulty: 'Beginner',
    purpose: 'Creates a rigid torso cylinder so force generated by your legs transfers 100% into the track without energy leaks at the spine.',
    instructions: [
      'Place forearms on the floor with elbows directly beneath your shoulders and feet hip-width apart.',
      'Tuck your tailbone slightly (posterior pelvic tilt), squeeze your glutes and quads hard, and pull your elbows subtly toward your toes.',
      'Hold a rock-solid straight line from head to heels while breathing steadily for the prescribed duration.'
    ],
    cues: [
      'Pull elbows toward toes to fire anterior core',
      'Squeeze glutes and quads at 80% tension',
      'Keep neck neutral—gaze between your fists'
    ],
    mistakes: [
      'Letting hips sag toward the floor (lower back arch)',
      'Piking butt high in the air to rest',
      'Holding breath instead of breathing behind the brace'
    ],
    safety: 'If lower back fatigues before abs, pause for 5 seconds and reset pelvic tilt.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=rkc+plank+for+athletes'
  },
  {
    id: 'side-plank',
    name: 'Side Plank',
    category: 'Core',
    loggingType: 'timed',
    sets: 3,
    reps: '30 sec / side',
    duration: 30,
    distance: null,
    rest: 45,
    difficulty: 'Beginner',
    purpose: 'Strengthens the obliques and lateral hip (glute medius) to prevent pelvis drop during single-leg sprint stance and jump takeoff.',
    instructions: [
      'Lie on your side with your supporting elbow directly beneath your shoulder and feet stacked (or staggered heel-to-toe).',
      'Lift your hips until your body forms a straight diagonal line from head to ankles.',
      'Hold for 30 seconds on the left side, then switch immediately to 30 seconds on the right side.'
    ],
    cues: [
      'Push the floor away through your supporting forearm',
      'Keep top hip stacked directly over bottom hip',
      'Drive hips forward—do not fold at the waist'
    ],
    mistakes: [
      'Letting the bottom hip sag toward the mat',
      'Rolling shoulders forward toward the floor'
    ],
    safety: 'Place a folded mat under your forearm to avoid elbow pressure.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=side+plank+for+runners+and+sprinters'
  },
  {
    id: 'warmup-protocol',
    name: 'Dynamic Sprint & Jump Warm-Up',
    category: 'Mobility',
    loggingType: 'mobility',
    sets: 1,
    reps: '8–10 min',
    duration: 480,
    distance: null,
    rest: 0,
    difficulty: 'Beginner',
    purpose: 'Elevates muscle temperature, lubricates hip/ankle joints, and primes neural firing before explosive plyometrics or sprinting.',
    instructions: [
      'Complete the interactive 🔥 WARM-UP checklist at the top of your session screen before starting your main exercises.',
      'Move progressively from easy pulse-raising jogging/marching into dynamic leg swings, hip circles, ankle mobility, high knees, butt kicks, and A-skips.'
    ],
    cues: [
      'Start easy and gradually increase speed and range of motion',
      'Break a light sweat before your first explosive rep'
    ],
    mistakes: [
      'Skipping warm-up and jumping cold into maximal plyometrics'
    ],
    safety: 'Mandatory before every training session.',
    tutorialUrl: 'https://www.youtube.com/results?search_query=track+and+field+dynamic+warm+up+routine'
  }
];

export const WARMUP_ITEMS_INDOOR = [
  { id: 'wu-jog', label: 'Easy jogging / brisk march in place', target: '3 min', durationSec: 180 },
  { id: 'wu-swings', label: 'Front-to-back & lateral leg swings', target: '10 / leg', durationSec: null },
  { id: 'wu-hips', label: 'Standing hip circles & openers', target: '10 / side', durationSec: null },
  { id: 'wu-ankles', label: 'Ankle mobility pulses & circles', target: '10 / side', durationSec: null },
  { id: 'wu-knees', label: 'Rhythmic high knees', target: '20 sec', durationSec: 20 },
  { id: 'wu-kicks', label: 'Rapid butt kicks', target: '20 sec', durationSec: 20 },
  { id: 'wu-askips', label: 'A-skips (in place or corridor)', target: '20 m / 20 sec', durationSec: 20 }
];

export const WARMUP_ITEMS_OUTDOOR = [
  { id: 'wu-out-jog', label: 'Easy track/turf jogging', target: '3–5 min', durationSec: 240 },
  { id: 'wu-out-swings', label: 'Dynamic leg swings (linear & lateral)', target: '10 / leg', durationSec: null },
  { id: 'wu-out-hips', label: 'Hip circles & hurdle walkovers', target: '10 / side', durationSec: null },
  { id: 'wu-out-ankles', label: 'Ankle mobility & calf bounces', target: '10 / side', durationSec: null },
  { id: 'wu-out-knees', label: 'High knees over 15–20 m', target: '20 sec', durationSec: 20 },
  { id: 'wu-out-kicks', label: 'Butt kicks over 15–20 m', target: '20 sec', durationSec: 20 },
  { id: 'wu-out-askips', label: 'Crisp A-skips', target: '2 × 20 m', durationSec: null },
  { id: 'wu-out-accels', label: 'Progressive build-up accelerations (70% → 85%)', target: '2–3 × 30 m', durationSec: null }
];

export const MOTIVATIONAL_QUOTES = [
  'Quality over quantity.',
  'Explosive work requires fresh legs.',
  'Recover hard. Perform harder.',
  'Technique first. Power second.',
  'One session at a time.',
  'Fast ground contact. Tall posture. Full recovery.',
  'Every crisp rep builds your Day 20 standard.'
];
