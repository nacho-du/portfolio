export const PROJECTS = [


  {
    slug: "kinova-gen3-controllers",
    title: "Kinova Gen3 End-Effector Controllers",
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
    thumb: "icon",                        // icon label (robot, sun, buckle, etc.)
    blurb: "Peppers Ghost Illusion using custom media created using Unreal Engine and Motion Capture",
    highlights: ["Key point 1", "Key point 2", "Key point 3"],

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
    slug: "university-rover-challenge",
    title: "University Rover Challenge",
    org: "UTEP Capstone Projects",
    hidden: false,
    thumb: "rover",
    blurb: "Leading mechanical design and project coordination for Capstone project designing a Mars rover for the University Rover Challenge, leading sub-teams and fabricating a modular robotic arm.",
    highlights: ["Designed arm manipulator with modular attachment system", "Led FDM 3D printing fabrication for structural components", "Coordinated sub-teams on timelines and deliverables"],

    card: {
      image: "projects/rover.jpg",
      description: "",
      tags: ["Robotics", "Project Management", "Fusion 360", "FDM Printing"],
    },

    heroImage: "projects/rover.jpg",
    timeframe: "Jan 2026 – Present",
    role: "Project Manager",
    tools: ["Fusion 360", "FDM 3D Printing", "MS Teams", "Project Management"],
    overview:
      "As Project Manager for the URC team at UTEP I coordinated sub-teams, engineered a modular arm attachment system, and managed FDM fabrication of structural components.",

    cards: [
      {
        title: "Project Management",
        body: "Coordinated with sub-teams across mechanical, electrical, and software disciplines to align timelines and deliverables toward competition deadlines.",
      },
      {
        title: "Modular Arm Design",
        body: "Engineered robotic arm, including a modular attachment system that allows detachment from the rover chassis, reducing swap time.",
      },
      {
        title: "Fabrication",
        body: "Led 3D printing fabrication efforts using FDM technology, iterating on designs based on fit and load requirements while balancing print parameters — including material selection, infill density, and print orientation — for strength, weight, and dimensional accuracy.",
      },
    ],

    sections: [
      {
        heading: "Role & Responsibilities",
        body: "As Project Manager, I coordinate sub-team leads, track deliverables, and ensure design decisions align with Capstone Requirments. I also contribute directly to mechanical design and fabrication.",
      },
      {
        heading: "Arm Attachment System",
        body: "The modular arm attachment system was designed for rapid field reconfiguration without tools. The design prioritizes structural integrity under load while keeping the interface simple enough for quick swaps during competition.",
      },
    ],

    // gallery: [],
    // reportUrl: "reports/rover-report.pdf",
    // repoUrl: "https://github.com/...",
  },

  // ProjectTemplate
  { 
    slug: "your-project-slug",           // URL: /projects/your-project-slug
    title: "Your Project Title",
    org: "Class name, org, or Personal Project",
    hidden: false,                        // true = hides from homepage
    thumb: "icon",                        // not USED icon label (robot, sun, buckle, etc.)
    noDetail: true,   // ← hides button and disables link
    blurb: "One sentence shown on hover or in lists.",
    highlights: ["Key point 1", "Key point 2", "Key point 3"],

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
