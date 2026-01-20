import { Link } from "react-router-dom";

const projects = [
  {
    title: "Filament Recycler",
    slug: "filament-recycler",
    org: "UTEP Greenfund",
    image: "projects/filament-recycler.JPEG",
    description:
      "Designed a processing line to recycle 25+ kg of used PLA and troubleshot a PID heating system to enable continuous melting.",
    tags: ["Additive Manufacturing", "PID Control", "Design"],
  },
  {
    title: "Water Nozzle",
    slug: "water-nozzle",
    org: "Keck Center for 3D Innovation",
    image: "/projects/water-nozzle.jpg",
    description:
      "Independently designed, tested, and troubleshot a water nozzle to specification for an additive manufacturing project.",
    tags: ["Fusion 360", "3D Printing", "Prototyping"],
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

function ProjectCard({ p }) {
  return (
    <Link
      to={`/projects/${p.slug}`}
      aria-label={`Open project: ${p.title}`}
      className="
        group block rounded-2xl
        border border-[rgba(var(--text-muted),0.25)]
        bg-[rgba(var(--bg-card),0.65)]
        overflow-hidden
        transition duration-200
        hover:border-[rgb(var(--accent))]
        hover:-translate-y-0.4
        hover:shadow-[0_4px_16px_rgba(var(--accent),0.15)]

      "
    >
      {/* Image */}
      <div
        className="
          relative aspect-[16/10]
          bg-[rgb(var(--bg-card))]
          border-b border-[rgba(var(--text-muted),0.25)]
          overflow-hidden
        "
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="
            w-full h-full object-cover
            transition duration-300
          "
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* View cue */}
        <div
          className="
            absolute bottom-3 right-3
            text-xs px-3 py-1 rounded-full
            border border-[rgba(var(--accent),0.45)]
            bg-[rgba(var(--bg-main),0.7)]
            text-[rgb(var(--accent))]
          "
        >
          View →
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold tracking-tight text-[rgb(var(--text-main))]">
              {p.title}
            </h4>
            <p className="text-sm text-[rgb(var(--text-muted))] mt-1">
              {p.org}
            </p>
          </div>

          {/* Arrow accent */}
          <span
            className="
              text-[rgb(var(--text-muted))]
              transition
              group-hover:text-[rgb(var(--accent))]
            "
          >
            ↗
          </span>
        </div>

        <p className="mt-3 text-sm text-[rgb(var(--text-muted))] leading-relaxed">
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      data-topo="168 85 247"
      className="py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <span className="h-6 w-1 rounded-full bg-[rgb(var(--accent))]" />
            Projects
          </h3>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

