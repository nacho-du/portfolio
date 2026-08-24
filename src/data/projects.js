export const PROJECTS = [


  {
    slug: "kinova-gen3-controllers",
    title: "End-Effector Controllers",
    org: "Mechanical Computational Applications in Vision and Robotics",
    hidden: false,
    thumb: "robot",
    blurb: "Inverse-kinematics-based controllers for a 7-DoF Kinova Gen3 manipulator, tracking end-effector trajectories with redundancy resolution.",
    highlights: ["Position + orientation trajectory tracking", "Null-space motion with fixed EE", "Redundancy resolution at task level", "Validated in simulation"],

    card: {
      image: "projects/kinova-gen3-hero.png",
      description:
        "Implemented inverse-kinematics-based controllers for a Kinova Gen3 manipulator to track end-effector position and orientation trajectories, plus null-space motion while holding the end-effector fixed.",
      tags: [
        "Robotics",
        "MATLAB",
        "Inverse Kinematics",
        "Trajectory Tracking",
        "Null-Space Control",
      ],
    },

    heroImage: "projects/kinova-gen3-hero.png",
    timeframe: "Fall 2025",
    role: "",
    tools: [
      "MATLAB",
      "Robotics System Toolbox",
      "rigidBodyTree",
      "Inverse Kinematics",
      "Forward Kinematics",
      "Null-Space Control",
    ],
    overview:
      "This project implements controllers that generate three distinct end-effector behaviors on a Kinova Gen3 robotic manipulator: Cartesian position trajectory tracking, orientation trajectory tracking with approximately fixed position, and null-space motion while maintaining a fixed end-effector position. The robot is modeled in MATLAB using rigidBodyTree, with inverse kinematics solved at each waypoint and warm-started from the previous solution to improve smoothness and computational efficiency. Plots and animations validate tracking performance and constraint maintenance.",

    cards: [
      {
        title: "Task 1: Position Tracking",
        body:
          "Tracked a prescribed Cartesian position trajectory while leaving orientation unconstrained. Inverse kinematics was solved at each waypoint using a weighting scheme prioritizing position accuracy to produce smooth motion along the desired path.",
      },
      {
        title: "Task 2: Orientation Tracking",
        body:
          "Tracked a desired orientation trajectory while keeping end-effector position approximately fixed. Equal weighting between position and orientation constraints produced controlled end-effector rotation with minimal position deviation.",
      },
      {
        title: "Task 3: Null-Space Motion",
        body:
          "Implemented a null-space controller to generate internal joint motion while regulating the end-effector near a fixed Cartesian location. A corrective term prevents drift, demonstrating redundancy resolution without violating the primary constraint.",
      },
    ],

    sections: [
      {
        heading: "Modeling & Method",
        body:
          "The Kinova Gen3 is represented in MATLAB using rigidBodyTree. At each waypoint, inverse kinematics computes joint configurations that satisfy the task objective, with warm-starting from the prior solution to improve smoothness and efficiency. Forward kinematics are used for visualization and for generating plots of end-effector position and orientation.",
      },
      {
        heading: "Validation & Results",
        body:
          "Tracking performance is validated with plots of end-effector position and orientation across waypoints/time for each task, along with animations showing the manipulator motion. Task 1 demonstrates accurate Cartesian motion, Task 2 demonstrates controlled orientation change with near-fixed position, and Task 3 demonstrates null-space motion while maintaining end-effector constraints.",
      },
    ],

    gallery: [
      {
        src: "projects/kinova-task1-position.png",
        alt: "Task 1 end-effector position tracking plot",
      },
      {
        src: "projects/kinova-task2-orientation.png",
        alt: "Task 2 end-effector orientation tracking plot",
      },
      {
        src: "projects/kinova-task3-nullspace.png",
        alt: "Task 3 null-space motion validation plot",
      },
    ],

    reportUrl: "reports/MECH_4332_Final_Report.pdf",
  },
    
  {
    slug: "sun-tracker",
    title: "Sun Tracker",
    org: "MECH 3103 – Mechatronics Lab (UTEP)",
    hidden: false,

    thumb: "sun",
    blurb: "3D Printed Sunflower-inspired, low-cost dual-axis solar tracker using photoresistors and PID control to follow light source.",
    highlights: ["Dual-axis tracking", "Photoresistor differential sensing", "Tuned PID control loops", "Low-cost repeatable build"],

    card: {
      image: "projects/flower-full.png",
      description:
        "A 3D printed sunflower-inspired, low-cost solar tracking system that uses photoresistors and PID control to follow light source across two axes.",
      tags: [
        "Mechatronics",
        "Arduino",
        "PID Control",
        "Solar Tracking",
        "3D Printing",
      ],
    },

    heroImage: "projects/flower-full.png",
    timeframe: "Fall 2025",
    role:"Role - Design and Implementation",
    tools: [
      "Arduino Uno",
      "FDM 3D Printing",
      "Photoresistors (LDRs)",
      "PID Control",
      "Servo Motors (SG-90)",
      "Autodesk Fusion 360",
      
    ],
    overview:
      "Sun Tracker is a two-axis solar tracking system inspired by the natural motion of a sunflower. The system uses four photoresistors to detect light direction and a closed-loop PID controller to drive pan and tilt servo motors. While the project emphasized low-cost components and accessible fabrication methods, it successfully demonstrated sensor-driven control logic, PID tuning, and the challenges of integrating mechanical, electrical, and software subsystems into a single mechatronic system.",

    cards: [
      {
        title: "Design Objective",
        body:
          "Create an affordable solar tracking system capable of detecting sunlight direction and smoothly adjusting its orientation using a PID-controlled closed-loop system.",
      },
      {
        title: "Control Strategy",
        body:
          "Four photoresistors arranged in a cross configuration measure light intensity differences. These values are processed by a PID controller to generate smooth pan and tilt motions using two servo motors.",
      },
      {
        title: "System Integration",
        body:
          "The project integrates custom 3D-printed mechanical components, Arduino-based electronics, and real-time control code, highlighting the interaction between hardware constraints and control performance.",
      },
    ],

    sections: [
      {
        heading: "Sensor & Control System",
        body:
          "Light direction is determined using four LDRs positioned at the top, bottom, left, and right of the flower head. Differences between averaged sensor readings generate error signals that are processed by a PID controller with proportional, integral, and derivative terms, along with a dead-band to reduce noise.",
      },
      {
        heading: "Mechanical Design & Prototyping",
        body:
          "The mechanical structure consists of multiple custom 3D-printed components including the base, stem, flower head, and gear assemblies. Several design iterations addressed issues such as wall thickness, stress concentrations, and pivot strength.",
      },
      {
        heading: "Results & Lessons Learned",
        body:
          "The project demonstrated successful sensor acquisition and PID-based control logic. Key lessons included the importance of weight distribution, wiring clearance, torque requirements, and accounting for real-world tolerances when designing mechatronic systems.",
      },
    ],

    gallery: [
      {
        src: "projects/flower-full.png",
        alt: "Fully assembled sunflower-inspired solar tracking system",
      },
      {
        src: "projects/flower-section.png",
        alt: "Section view of the solar tracker showing internal components",
      },
    ],

    reportUrl: "reports/MECH_3103_Final_Project.pdf",
  },

  {
    slug: "filament-recycler",
    hidden: false,
    noDetail : true,
    thumb: "filament",
    blurb: "Designed a processing line to recycle 25+ kg of used PLA, troubleshot and tuned a PID heating system enabling continuous extrusion.",
    highlights: ["25+ kg PLA recycled to filament", "Continuous-melt thermal control", "PID troubleshooting under load", "End-to-end process design"],
    title: "Filament Recycler",
    org: "UTEP Greenfund",

    // ---- Card content (homepage) ----
    card: {
      image: "projects/filament-recycler.JPEG",
      description:
        "Designed a processing line to recycle 25+ kg of used PLA, troubleshot and tuned a PID heating system enabling continuous extrusion.",
      tags: ["Additive Manufacturing", "PID Control", "Design"],
    },

    // ---- Detail page content ----
    heroImage: "projects/filament-recycler.JPEG",
    timeframe: "2025",
    role: "Design + troubleshooting",
    tools: ["Fusion 360", "3D Printing", "PID Control", "Prototyping"],
    overview:
      "Designed a processing line to recycle 25+ kg of used PLA and troubleshot a PID heating system to enable continuous melting.",
    cards: [
      {
        title: "Goal",
        body:
          "Create a reliable process to recycle used PLA into usable filament by building a repeatable processing workflow.",
      },
      {
        title: "What We built",
        body:
          "A processing line concept plus iterative improvements to support continuous melting and stable operation.",
      },
      {
        title: "Key outcome",
        body:
          "Implement filament recycling program to the University of El Paso Makerspace for use by the general student body ",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body:
          "The challenge was turning real used PLA into consistent material while keeping the system stable and repeatable. Control and thermal behavior were key constraints. While maintaining filament within proper dimesions for use.",
      },
      {
        heading: "Approach",
        body:
          "I iterated on process steps and focused on diagnosing PID heating behavior to improve continuous melting. Changes were tested and refined based on performance.",
      },
      {
        heading: "Results",
        body:
          "The process supported recycling 25+ kg of PLA and improved continuity during melting by addressing heating/control issues.",
      },
    ],
    gallery: [
      { src: "projects/filament-recycler.JPEG", alt: "Filament recycler overview" },
      // Add more images later:
      // { src: "/projects/filament-recycler/2.jpg", alt: "PID setup" },
    ],
  },


  {
    slug: "peppers-ghost",           // URL: /projects/your-project-slug
    title: "Peppers Ghost Using Unreal Engine",
    org: "Personal Project",
    hidden: false,                        // true = hides from homepage
    noDetail: true,
    thumb: "icon",                        // icon label (robot, sun, buckle, etc.)
    blurb: "Designed and built a self-contained Pepper's Ghost illusion integrating motion capture animation with a synchronized practical lighting effect.",
    highlights: ["Produced character animation in Unreal Engine 5 using motion capture data", " Built Arduino PWM lamp controller timed to animation playback, producing an erratic flicker at the moment of contact", "tabletop enclosure around glass angle, screen brightness, and scene contrast for a clean reflection"],
    // --- Homepage card ---
    card: {
      image: "projects/your-image.jpg",  // place image in public/projects/
      description: "2–3 sentence description shown on the card.",
      tags: ["Tool 1", "Tool 2", "Tool 3"],
    },

    // --- Detail page ---
    heroImage: "projects/your-image.jpg",
    timeframe: "Fall 2025",
    role: "Your Role",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    overview: "Longer paragraph describing the project for the detail page.",

    cards: [
      { title: "Card Title 1", body: "Short paragraph." },
      { title: "Card Title 2", body: "Short paragraph." },
      { title: "Card Title 3", body: "Short paragraph." },
    ],

    sections: [
      { heading: "Section Heading", body: "Longer body text for this section." },
      { heading: "Section Heading", body: "Longer body text for this section." },
    ],

    gallery: [
      { src: "projects/your-image.jpg", alt: "Description of image" },
    ],

    // reportUrl: "reports/your-report.pdf",  // uncomment if you have a PDF
    // repoUrl: "https://github.com/...",     // uncomment if you have a repo link
  },

  {
  // ── Identity ──────────────────────────────────────────────
  slug: "university-rover-challenge",
  title: "University Rover Challenge ",
  org: "UTEP Capstone Projects",
  hidden: false,

  // ── Homepage card ─────────────────────────────────────────
  blurb: "Leading mechanical design and project coordination for a Capstone Mars rover built for the University Rover Challenge, managing sub-teams and fabricating a modular robotic arm.",

  highlights: [
    "Designed arm manipulator with modular attachment system",
    "Led FDM 3D printing fabrication for structural components",
    "Coordinated sub-teams on timelines and deliverables",
  ],

  card: {
    image: "projects/URC_team.jpg",
    tags: ["Robotics", "Project Management", "Fusion 360", "FDM Printing"],
  },

  // ── Detail page ───────────────────────────────────────────
  heroImage: "projects/URC_team.jpg",
  timeframe: "Jan 2026 – Present",
  role: "Project Manager",

  tools: ["Fusion 360", "FDM 3D Printing", "MS Teanpms", "Project Management"],

  overview:
    "For UTEP's Capstone URC entry, I manage cross-disciplinary sub-teams and contribute directly to mechanical design and fabrication. The centerpiece of my technical work is a modular robotic arm with a tool-free attachment interface, supported by FDM-printed structural components iterated for strength, weight, and dimensional accuracy.",

  cards: [
    {
      title: "Goal & Context",
      body: "Design a competition-ready Mars rover meeting URC requirements, coordinating mechanical, electrical, and software teams under Capstone constraints and deadlines.",
    },
    {
      title: "Modular Arm System",
      body: "Engineered a robotic arm with a quick-detach interface that allows tool-free chassis separation, prioritizing structural integrity under load and fast field reconfiguration.",
    },
    {
      title: "Fabrication Approach",
      body: "Led FDM 3D printing of structural components, iterating on material selection, infill density, and print orientation to meet load, weight, and dimensional requirements.",
    },
  ],

  sections: [
    {
      heading: "Project Management",
      body: "As Project Manager, I coordinate sub-team leads across mechanical, electrical, and software disciplines, tracking deliverables and aligning design decisions with Capstone requirements and competition deadlines. I run regular syncs via MS Teams to surface blockers early and keep parallel workstreams on schedule.",
    },
    {
      heading: "Design & Fabrication",
      body: "Beyond coordination, I contribute directly to mechanical design in Fusion 360 and own the FDM fabrication pipeline. The modular arm attachment system was a core design challenge — the interface needed to withstand operational loads while remaining simple enough for quick swaps during competition. Fabrication decisions, including material choice, infill, and orientation, were driven by a balance of strength, weight, and print reliability.",
    },
  ],

  // gallery: [],
  // reportUrl: "reports/rover-report.pdf",
  // repoUrl: "https://github.com/...",
},
  // ─────────────────────────────────────────────────────────────
  // PROJECT TEMPLATE  —  copy this block, fill in, delete comments
  // ─────────────────────────────────────────────────────────────
  {
    // ── Identity ──────────────────────────────────────────────
    slug: "your-project-slug",    // becomes the URL: /projects/your-project-slug
    title: "Your Project Title",  // shown on card and detail page header
    org: "Class, Lab, or Personal Project", // shown as subtitle on detail page
    hidden: false,                // true = remove from homepage entirely

    // ── Flags ─────────────────────────────────────────────────
    notable: false,               // true = brass "Notable" badge on card image
    noDetail: false,              // true = card is not clickable, no detail page needed

    // ── Homepage card ─────────────────────────────────────────
    blurb: "One punchy sentence. What the project is and why it matters.",
    // blurb: 1 sentence · 20–35 words. Shown under the title on the homepage card.
    // Lead with what you built, end with the key result or purpose.

    highlights: [
      "Specific result or technique — keep each under ~8 words",
      "Another concrete outcome or method",
      "A third point (3–4 highlights is ideal)",
    ],
    // highlights: 3–4 items · 5–10 words each. Bullet list on the card below the blurb.
    // Be specific — numbers, methods, and outcomes beat vague descriptors.

    card: {
      image: "projects/your-image.jpg", // place file in /public/projects/
      tags: ["Tool 1", "Tool 2", "Tool 3", "Tool 4"],
      // tags: 3–5 items · 1–3 words each. Chips at the bottom of the card (first 4 shown).
    },

    // ── Detail page ───────────────────────────────────────────
    heroImage: "projects/your-image.jpg", // large image at top of detail page
    timeframe: "Fall 2025",               // e.g. "Jan 2026 – Present"
    role: "Your Role",                    // e.g. "Lead Designer", "Project Manager" · 2–4 words

    tools: [
      "Tool 1", "Tool 2", "Tool 3",
      // full list — all shown on detail page. 1–3 words each.
    ],

    overview:
      "2–3 sentences for the detail page opener. More expansive than the blurb — " +
      "describe what was built, the context, and the key outcome.",
    // overview: 2–3 sentences · 50–80 words. Expands on the blurb for someone who clicked through.
    // Cover: what it is, why it was built, and what the main result was.

    // cards = 3-column highlight boxes at the top of the detail page body.
    // Use for the 3 most important aspects: goal, method, outcome.
    cards: [
      { title: "Goal / Problem",    body: "What were you trying to solve or build?" },
      { title: "Approach / Method", body: "How did you approach it? Key decisions made." },
      { title: "Result / Outcome",  body: "What was the result? Quantify if possible." },
    ],
    // cards: exactly 3 · title = 2–4 words · body = 1–2 sentences, 20–40 words each.

    // sections = long-form write-up below the cards.
    // Each gets a heading and a paragraph. 2–3 sections is typical.
    sections: [
      { heading: "Section Heading", body: "Detailed paragraph about this aspect of the project." },
      { heading: "Section Heading", body: "Detailed paragraph about this aspect of the project." },
    ],
    // sections: 2–3 entries · heading = 2–4 words · body = 2–4 sentences, 50–100 words each.
    // Good headings: "Design Process", "Control Strategy", "Results & Lessons", "My Role".

    // gallery = images shown in the detail page gallery grid.
    gallery: [
      { src: "projects/your-image.jpg",   alt: "Describe what is shown in the image" },
      { src: "projects/your-image-2.jpg", alt: "Describe what is shown" },
    ],
    // gallery: 2–4 images. alt text = 5–10 words describing the image content.

    // ── Optional links ────────────────────────────────────────
    // reportUrl: "reports/your-report.pdf", // uncomment if you have a PDF report
    // repoUrl: "https://github.com/...",    // uncomment if you have a public repo
  },

  // Add New Projects above here
];

// Controls display order on the homepage. Add a new slug here when you add a project.
export const PROJECT_ORDER = [
  "university-rover-challenge",
  "kinova-gen3-controllers",
  "sun-tracker",
  "portfolio-website",
  "filament-recycler",
  "baja-buckle",
  "peppers-ghost",
];


export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectIndex(slug) {
  return PROJECTS.findIndex((p) => p.slug === slug);
}

/**
 * Prev/Next navigation for ProjectDetail
 * - Wrap-around: from first -> prev = last, from last -> next = first
 * If you prefer NO wrap-around, tell me and I'll switch it back.
 */
export function getPrevNext(slug) {
  const idx = getProjectIndex(slug);
  if (idx === -1) return { prev: null, next: null };

  const prevIndex = (idx - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (idx + 1) % PROJECTS.length;

  return {
    prev: PROJECTS[prevIndex],
    next: PROJECTS[nextIndex],
  };
}
