export const PROJECTS = [
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
          "Improved process reliability by diagnosing heating control behavior and reducing interruptions during melting.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body:
          "The challenge was turning real used PLA into consistent material while keeping the system stable and repeatable. Control and thermal behavior were key constraints.",
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
    slug: "water-nozzle",
    hidden: false,
    // *status: "WIP"
    title: "Water Nozzle",
    org: "Keck Center for 3D Innovation",
    // reportUrl: "reports/filament-recycler.pdf",

    // ---- Card content (homepage) ----
    card: {
      image: "/projects/water-nozzle.jpg",
      description:
        "Independently designed, tested, and troubleshot a water nozzle to specification for an additive manufacturing project.",
      tags: ["Fusion 360", "3D Printing", "Prototyping"],
    },

    // ---- Detail page content ----
    heroImage: "/projects/water-nozzle.jpg",
    timeframe: "2025",
    role: "Design, test, troubleshoot",
    tools: ["Fusion 360", "MakerBot", "3D Printing", "Testing"],
    overview:
      "Independently designed, tested, and troubleshot a water nozzle to specification for an additive manufacturing project.",
    cards: [
      {
        title: "Goal",
        body: "Design a nozzle that meets the given specification and performs reliably during testing.",
      },
      {
        title: "What I built",
        body: "A printable nozzle design modeled in Fusion 360 and manufactured for iterative validation.",
      },
      {
        title: "Key outcome",
        body:
          "Validated performance through testing and refined the design through troubleshooting and iteration.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body:
          "The nozzle had to meet specification while remaining manufacturable and reliable when tested in real conditions.",
      },
      {
        heading: "Approach",
        body:
          "I modeled the design in Fusion 360, printed prototypes, tested performance, and iterated based on observed issues.",
      },
      {
        heading: "Results",
        body:
          "The final nozzle met the specification and was validated through testing after multiple refinement cycles.",
      },
    ],
    gallery: [{ src: "/projects/water-nozzle.jpg", alt: "Water nozzle prototype" }],
  },
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
