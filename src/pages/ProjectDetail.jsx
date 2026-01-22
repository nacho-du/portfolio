import { Link, useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import { getProject, getPrevNext } from "../data/projects";

function Chip({ children }) {
  return (
    <span
      className="
        text-xs rounded-full px-2 py-1
        border border-[rgba(var(--accent),0.45)]
        bg-[rgba(var(--accent),0.10)]
        text-[rgb(var(--accent))]
      "
    >
      {children}
    </span>
  );
}


export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const { prev, next } = getPrevNext(slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-[rgb(var(--text-muted))]">Project not found.</p>
        <Link
          to="/"
          className="text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-main))] inline-block mt-4 transition"
        >
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          to="/"
          className="text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-main))] transition"
        >
          ← Back
        </Link>

        {/* Header */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[rgb(var(--text-main))]">
              {project.title}
            </h1>

            <p className="mt-2 text-[rgb(var(--text-muted))]">{project.org}</p>

            <p className="mt-6 text-[rgb(var(--text-muted))] leading-relaxed">
              {project.overview}
            </p>
            {project.reportUrl ? (
  <a
    href={project.reportUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      mt-6
      text-sm px-4 py-2 rounded-md
      border border-[rgba(var(--accent),0.45)]
      text-[rgb(var(--accent))]
      bg-[rgba(var(--accent),0.10)]
      transition
      hover:bg-[rgba(var(--accent),0.16)]
      hover:border-[rgba(var(--accent),0.65)]
    "
  >
    View Report
    <span className="opacity-80">↗</span>
  </a>
) : null}




            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>{project.timeframe}</Chip>
              <Chip>{project.role}</Chip>
              {project.tools.slice(0, 3).map((t) => (
                <Chip key={t} >{t}</Chip>
              ))}
            </div>

            {/* subtle divider accent */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[rgba(var(--accent),0.35)] to-transparent" />
          </div>

          {/* Hero image */}
          <div
            className="
              rounded-2xl overflow-hidden
              border border-[rgba(var(--text-muted),0.25)]
              bg-[rgb(var(--bg-card))]
            "
          >
            <div className="aspect-[16/10]">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Top cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {project.cards.map((c) => (
            <DetailCard key={c.title} title={c.title}>
              {c.body}
            </DetailCard>
          ))}
        </div>

        {/* Main sections */}
        <div className="mt-10 grid gap-4">
          {project.sections.map((s) => (
            <DetailCard key={s.heading} title={s.heading}>
              {s.body}
            </DetailCard>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery?.length ? (
          <div className="mt-10">
            <h2 className="text-xl font-semibold tracking-tight text-[rgb(var(--text-main))]">
              Gallery
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <div
                  key={img.src}
                  className="
                    rounded-2xl overflow-hidden
                    border border-[rgba(var(--text-muted),0.25)]
                    bg-[rgb(var(--bg-card))]
                  "
                >
                  <div className="aspect-video">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Footer nav */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Previous */}
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="
                rounded-xl px-4 py-3
                border border-[rgba(var(--text-muted),0.25)]
                bg-[rgba(var(--bg-card),0.45)]
                hover:border-[rgba(var(--accent),0.8)]
                hover:bg-[rgba(var(--accent),0.10)]
                transition
              "
            >
              <p className="text-xs text-[rgb(var(--text-muted))]">Previous</p>
              <p className="text-sm text-[rgb(var(--text-main))] mt-1">
                ← {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {/* Back */}
          <Link to="/#projects" className="text-sm text-zinc-400 hover:text-white">
             Back to Projects
          </Link>
          {/* Next */}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="
                rounded-xl px-4 py-3 text-right
                border border-[rgba(var(--text-muted),0.25)]
                bg-[rgba(var(--bg-card),0.45)]
                hover:border-[rgba(var(--accent),0.8)]
                hover:bg-[rgba(var(--accent),0.10)]
                transition
              "
            >
              <p className="text-xs text-[rgb(var(--text-muted))]">Next</p>
              <p className="text-sm text-[rgb(var(--text-main))] mt-1">
                {next.title} →
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
