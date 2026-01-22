const experience = [
  {
    role: "Operations Intern",
    org: "Franco & Associates — Bio-Digester System",
    date: "Summer 2025",
    image: "experience/francov2.JPEG",
    bullets: [
      "Operated anaerobic biodigester systems including pumps, agitators, and blowers.",
      "Collected and analyzed biogas composition data to support system optimization.",
      "Troubleshot combustion and gas routing issues under real operational constraints.",
      "Coordinated and logged organic waste deliveries for consistent system input.",
    ],
    tags: ["Energy Systems", "Data Collection", "Troubleshooting"],
  },
  {
    role: "Operations Chair",
    org: "Engineering Student Leadership Council — UTEP",
    date: "2025 — Present",
    image: "experience/eslc.JPG",
    bullets: [
      "Coordinated logistics and operations for events supporting 5,000+ engineering students.",
      "Managed officer rosters, communications, and internal documentation.",
      "Facilitated funding and operational support for nearly 50 student organizations.",
    ],
    tags: ["Leadership", "Operations", "Project Coordination"],
  },
  {
    role: "President",
    org: "Environmental Stewardship Initiative",
    date: "2020 — 2022",
    image: "experience/sesi.JPEG",
    bullets: [
      "Led a team of 60+ students focused on environmental restoration initiatives.",
      "Authored and submitted an EPA-approved project proposal securing $10,000 in funding.",
      "Planned and executed land restoration projects with data collected for publication.",
    ],
    tags: ["Leadership", "Grant Writing", "Environmental Projects"],
  },
];

function Tag({ children }) {
  return (
    <span
      className="
        text-xs rounded-full px-2 py-1
        border border-[rgba(var(--accent),0.45)]
        bg-[rgba(var(--accent),0.12)]
        text-[rgb(var(--accent))]
      "
    >
      {children}
    </span>
  );
}

function ExperienceItem({ item }) {
  return (
    <div
      className="
        rounded-3xl
        border border-[rgba(var(--text-muted),0.25)]
        bg-[rgba(var(--bg-card),0.75)]
        backdrop-blur-sm
        supports-[backdrop-filter]:bg-[rgba(var(--bg-card),0.65)]
        p-6 sm:p-8
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Image */}
        <div className="lg:col-span-1">
          <div className="h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">


            <img
              src={item.image}
              alt={item.role}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 flex flex-col">
          <h4 className="text-xl font-semibold tracking-tight">{item.role}</h4>
          <p className="text-sm text-zinc-400 mt-1">{item.org}</p>
          <p className="text-sm text-zinc-500 mt-1">{item.date}</p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Experience() {
  return (
    <section
      id="experience"
      data-topo="16 185 129"   // emerald (matches your accent)
      className="py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <span className="h-6 w-1 rounded-full bg-[rgb(var(--accent))]" />
            Experience
          </h3>
        </div>


        <div className="mt-12 space-y-16">
          {experience.map((item) => (
            <ExperienceItem key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
