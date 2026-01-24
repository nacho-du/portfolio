export const PROJECTS = [
  
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    org: "Personal Project",
    hidden: false,

    card: {
      image: "projects/portfolio-home.jpg",
      description:
        "A React + Vite + Tailwind portfolio deployed on GitHub Pages, featuring data-driven case studies, WIP handling, and optional project reports.",
      tags: [
        "React",
        "Vite",
        "Tailwind",
        "GitHub Pages",
        "React Router",
      ],
    },

    heroImage: "projects/portfolio-home.jpg",
    timeframe: "Jan 2026",
    role: "Designer & Developer",
    tools: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "GitHub Pages",
      "gh-pages",
    ],
    overview:
      "This portfolio website was built to showcase engineering and software projects in a clean, scalable format. The site uses a data-driven project system that powers both the homepage and individual case-study pages. It supports work-in-progress states, optional project reports, and GitHub Pages–safe asset handling, making it easy to maintain and extend over time.",

    cards: [
      {
        title: "Project Goal",
        body:
          "Design a fast, modern portfolio that highlights projects through detailed pages while remaining easy to update and deploy.",
      },
      {
        title: "Key Features",
        body:
          "Projects are defined in a single data file and rendered dynamically across the site, with support for Work in Progress states, image galleries, and optional report links.",
      },
      {
        title: "Deployment Workflow",
        body:
          "The site is built with Vite and deployed to GitHub Pages using a consistent base path and a simple npm deploy command.",
      },
    ],

    sections: [
      {
        heading: "Architecture & Data Model",
        body:
          "Featured projects are stored in a centralized data file and rendered across the homepage and detail pages using helper functions. This approach keeps content and layout cleanly separated.",
      },
      {
        heading: "Routing & User Experience",
        body:
          "Each project has a dedicated detail page with slug-based routing and previous/next navigation. Work-in-progress projects are clearly labeled and intentionally non-clickable.",
      },
      {
        heading: "Assets & GitHub Pages Constraints",
        body:
          "Images and static files are served from the public directory using absolute paths and case-sensitive filenames to ensure reliable loading on GitHub Pages.",
      },
      
    ],

   /* gallery: [
      {
        src: "/projects/portfolio-home.png",
        alt: "Portfolio homepage showing featured project cards",
      },
    ],
    */
    repoUrl: "https://github.com/nacho-du/portfolio",
  },

  {
    slug: "kinova-gen3-controllers",
    title: "Kinova Gen3 End-Effector Controllers",
    org: "MECH 4332 – Mechanical Computational Applications in Vision and Robotics",
    hidden: false,

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
    role: "Controls & Robotics",
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
      slug: "mechatronic-head",
      title: "Mechatronic Head",
      org: "Personal Project",
      hidden: false,
      status: "wip",
      card: {
        image: "/projects/<your-image-file>",
        description: "A modular mechatronic head project focused on expandable facial features. Currently developing the eye mechanism and refining CAD components for full system integration.",
        tags: ["Mecatronics", "CAD", "Fusion 360"],
      },
  },
    
  {
    slug: "sun-tracker",
    title: "Sun Tracker - Group Project",
    org: "MECH 3103 – Mechatronics Lab (UTEP)",
    hidden: false,

    card: {
      image: "projects/flower-full.png",
      description:
        "A sunflower-inspired, low-cost solar tracking system that uses photoresistors and PID control to follow sunlight across two axes.",
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
      "Photoresistors (LDRs)",
      "PID Control",
      "Servo Motors (SG-90)",
      "Autodesk Fusion 360",
      "TinkerCAD",
      "FDM 3D Printing",
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
    // status: "wip",
    title: "Filament Recycler",
    org: "UTEP Greenfund",

    // ---- Card content (homepage) ----
    card: {
      image: "projects/filament-recycler.JPEG",
      description:
        "Designed a processing line to recycle 25+ kg of used PLA and troubleshot a PID heating system to enable continuous melting.",
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
    lug: "baja-buckle",
    title: "Baja Buckle",
    org: "MECH 3334 – Mechanical Design (UTEP)",
    hidden: false,

    card: {
      image: "projects/baja-buckle-cad.png",
      description:
        "Designed and validated a titanium buckle through hand calculations and finite element analysis to safely withstand a 5000 N load with a factor of safety above design requirements.",
      tags: [
        "Mechanical Design",
        "FEA",
        "Stress Analysis",
        "Fusion 360",
        "CAD",
      ],
    },

    heroImage: "projects/baja-buckle-cad.png",
    timeframe: "Fall 2025",
    role: "Mechanical Design Engineer (Student)",
    tools: [
      "Autodesk Fusion 360",
      "Finite Element Analysis (FEA)",
      "Hand Stress Calculations",
      "Titanium Ti-6Al-4V",
      "FDM 3D Printing",
    ],
    overview:
      "The Baja Buckle project focused on the design, analysis, and validation of a load-bearing buckle intended for a one-inch strap interface. The component was modeled in Autodesk Fusion 360 and evaluated under a 5000 N load using both hand calculations and finite element analysis. Results confirmed that the design meets safety requirements, with FEA predicting a minimum factor of safety of 3.51 and negligible deformation.",

    cards: [
      {
        title: "Design Objective",
        body:
          "Design a compact, load-bearing buckle capable of supporting a 5000 N tensile load while maintaining a minimum factor of safety of 3.0 and compatibility with a one-inch strap.",
      },
      {
        title: "Structural Validation",
        body:
          "The buckle was validated using both hand stress calculations and finite element analysis. Critical regions such as the slot fillet and pin hole were analyzed for axial, bending, and bearing stresses.",
      },
      {
        title: "Manufacturing & Prototyping",
        body:
        "Final geometry was documented through detailed engineering drawings and verified using a 3D-printed prototype to confirm strap fit and dimensional accuracy.",
      },
    ],

    sections: [
      {
        heading: "Finite Element Analysis",
        body:
          "A static FEA study was conducted in Fusion 360 using Ti-6Al-4V material properties. A 5000 N load was applied at the strap slot while the bottom pin hole was fully constrained. Results showed a maximum von Mises stress of approximately 251 MPa and a minimum factor of safety of 3.51.",
      },
      {
        heading: "Hand Stress Calculations",
        body:
          "Manual calculations were performed at critical locations including the slot fillet and bottom pin hole. The slot fillet experienced combined axial and bending stress, resulting in a conservative factor of safety of 1.25, while the pin hole exhibited a factor of safety of 5.57.",
      },
      {
        heading: "Prototyping & Verification",
        body:
          "A physical prototype was produced using FDM 3D printing with a 0.2 mm layer height. The prototype verified dimensional accuracy and confirmed proper fit for the one-inch strap requirement.",
      },
    ],

    gallery: [
      {
        src: "projects/mech-design-results-2x.png",
        alt: "Finite element analysis results showing safety factor distribution",
      },
      {
        src: "projects/mech-design-von-mises.png",
        alt: "Von Mises stress distribution highlighting critical regions",
      },
      {
        src: "projects/MECH-Design-MESH.png",
        alt: "MESH view of CAD Model",
      },
    ],

    reportUrl: "reports/Mech_Design_Final_Project.pdf",
  },

  

  // Add New Projects above here
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
