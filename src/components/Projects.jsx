import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { QUICK_PROJECTS } from "../data/quickProjects";

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

function StatusBadge({ status }) {
  if (status !== "wip") return null;

  return (
    <span
      className="
        text-xs rounded-full px-2 py-1
        border border-[rgba(var(--accent),0.35)]
        bg-[rgba(var(--accent),0.10)]
        text-[rgb(var(--accent))]
      "
    >
      Work in Progress
    </span>
  );
}

function ProjectCard({ p }) {
  const isWip = p.status === "wip";

  // WIP projects are visible but not clickable (prevents unfinished detail-page dead ends)
  const Wrapper = isWip ? "div" : Link;
  const wrapperProps = isWip ? {} : { to: `/projects/${p.slug}` };

  return (
    <Wrapper
      {...wrapperProps}
      aria-label={isWip ? `Project (Work in Progress): ${p.title}` : `Open project: ${p.title}`}
      className={`
        group block rounded-2xl
        border border-[rgba(var(--text-muted),0.25)]
        bg-[rgba(var(--bg-card),0.65)]
        overflow-hidden
        transition duration-200
        ${isWip ? "opacity-[0.92] cursor-not-allowed" : ""}
        ${isWip ? "" : "hover:border-[rgb(var(--accent))] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(var(--accent),0.15)]"}
      `}
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
          src={p.card?.image || p.heroImage}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition duration-300"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* View/WIP cue */}
        <div
          className="
            absolute bottom-3 right-3
            text-xs px-3 py-1 rounded-full
            border border-[rgba(var(--accent),0.45)]
            bg-[rgba(var(--bg-main),0.7)]
            text-[rgb(var(--accent))]
          "
        >
          {isWip ? "WIP" : "View →"}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold tracking-tight text-[rgb(var(--text-main))]">
              {p.title}
            </h4>
            <p className="text-sm text-[rgb(var(--text-muted))] mt-1">{p.org}</p>
          </div>

          <div className="flex items-center gap-2">
            <StatusBadge status={p.status} />

            {/* Arrow accent */}
            <span
              className={`
                text-[rgb(var(--text-muted))]
                transition
                ${isWip ? "" : "group-hover:text-[rgb(var(--accent))]"}
              `}
            >
              ↗
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm text-[rgb(var(--text-muted))] leading-relaxed">
          {p.card?.description || p.overview}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(p.card?.tags || []).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function QuickTag({ children }) {
  return (
    <span
      className="
        text-xs rounded-full px-2 py-1
        border border-[rgba(var(--text-muted),0.25)]
        text-[rgb(var(--text-muted))]
      "
    >
      {children}
    </span>
  );
}

function QuickProject({ p }) {
  const Wrapper = p.link ? "a" : "div";

  return (
    <Wrapper
      href={p.link}
      target={p.link ? "_blank" : undefined}
      rel={p.link ? "noopener noreferrer" : undefined}
      className="
        block rounded-xl
        border border-[rgba(var(--text-muted),0.25)]
        bg-[rgba(var(--bg-card),0.55)]
        p-4
        transition
        hover:border-[rgba(var(--accent),0.45)]
        hover:bg-[rgba(var(--bg-card),0.75)]
      "
    >
      <h4 className="font-medium text-[rgb(var(--text-main))]">{p.title}</h4>
      <p className="text-sm text-[rgb(var(--text-muted))] mt-1">{p.org}</p>
      <p className="text-sm text-[rgb(var(--text-muted))] mt-3">{p.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <QuickTag key={t}>{t}</QuickTag>
        ))}
      </div>
    </Wrapper>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-topo="168 85 247" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <span className="h-6 w-1 rounded-full bg-[rgb(var(--accent))]" />
            Projects
          </h3>
        </div>

        {/* Featured / Case-study projects */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PROJECTS.filter((p) => !p.hidden).map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        {/* Quick Add projects */}
        {QUICK_PROJECTS?.length ? (
          <div className="mt-14">
            <h4 className="text-xl font-semibold tracking-tight text-[rgb(var(--text-main))]">
              Additional Projects
            </h4>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {QUICK_PROJECTS.filter((p) => !p.hidden).map((p) => (
                <QuickProject key={p.title} p={p} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
