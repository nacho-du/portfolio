import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, getPrevNext, PROJECTS } from "../data/projects";

function Section({ title, children }) {
  return (
    <div className="pcs-section">
      <div className="pcs-section-side">
        <div className="pcs-section-num">{title}</div>
      </div>
      <div className="pcs-section-body">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const { prev, next } = getPrevNext(slug);
  const index = PROJECTS.findIndex((p) => p.slug === slug);

  useEffect(() => {
    if (project) document.title = `${project.title} · Ignacio Duarte`;
    window.scrollTo(0, 0);
  }, [slug, project]);

  if (!project) {
    return (
      <div className="container" style={{ padding: "120px 0" }}>
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--brass)" }}>No project found.</h1>
        <p><Link to="/#projects">← Back to projects</Link></p>
      </div>
    );
  }

  const tag = project.card?.tags?.[0] || "";

  const hasSections = project.sections?.length > 0;
  const hasHighlights = project.highlights?.length > 0;
  const hasTools = (project.tools || []).length > 0;

  return (
    <article className="pcs-page">
      {/* Sub-nav */}
      <nav className="pcs-nav">
        <div className="container pcs-nav-row">
          <Link className="brand" to="/">
            Ignacio<span className="dot">·</span>Duarte
          </Link>
          <Link className="pcs-back" to="/#projects">← Back to Projects</Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="pcs-hero">
        <div className="container">
          <div className="pcs-hero-grid">
            <div>
              <div className="pcs-hero-meta-line">
                {tag}
                {project.timeframe && <>{tag && <span className="dot">·</span>}{project.timeframe}</>}
              </div>
              <h1 className="pcs-hero-title">{project.title}</h1>
              <p className="pcs-hero-lede">{project.blurb || project.card?.description}</p>
              <dl className="pcs-hero-dl">
                {project.timeframe && <div><dt>Year</dt><dd>{project.timeframe}</dd></div>}
                {project.role      && <div><dt>Role</dt><dd>{project.role}</dd></div>}
                {project.status === "wip" && <div><dt>Status</dt><dd>In Progress</dd></div>}
              </dl>
              {hasTools && (
                <div className="pcs-tool-chips">
                  {project.tools.map((t) => <span key={t} className="pcs-tool-chip">{t}</span>)}
                </div>
              )}
              {(project.reportUrl || project.repoUrl) && (
                <div className="pcs-hero-actions">
                  {project.reportUrl && (
                    <a href={project.reportUrl} target="_blank" rel="noopener" className="btn-resume">
                      View Report <span className="arrow">↗</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener" className="btn-resume">
                      Repository <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="pcs-plate">
              {project.heroImage ? (
                <img
                  src={`${import.meta.env.BASE_URL}${project.heroImage}`}
                  alt={project.title}
                  className="pcs-hero-img"
                />
              ) : null}
              <div className="pcs-plate-cap">Fig. {String(index + 1).padStart(2, "0")}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="pcs-body">
        <div className="container">

          {/* Overview */}
          {project.overview && (
            <Section title="Overview">
              <p>{project.overview}</p>
            </Section>
          )}

          {/* Process / cards */}
          {project.cards?.length > 0 && (
            <Section title="Process">
              {project.cards.map((c, i) => (
                <div className="pcs-step" key={i}>
                  <div className="pcs-step-label">{c.title}</div>
                  <p>{c.body}</p>
                </div>
              ))}
            </Section>
          )}

          {/* Sections */}
          {hasSections && project.sections.map((s, i) => (
            <Section key={i} title={s.heading}>
              <p>{s.body}</p>
            </Section>
          ))}

          {/* Highlights */}
          {hasHighlights && (
            <Section title="Highlights">
              <ul className="pcs-list">
                {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </Section>
          )}

          {/* Gallery */}
          {project.gallery?.length > 0 && (
            <Section title="Gallery">
              <div className="pcs-gallery">
                {project.gallery.map((img) => (
                  <div className="pcs-gallery-item" key={img.src}>
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="pcs-gallery-cap">{img.alt}</div>
                  </div>
                ))}
              </div>
            </Section>
          )}

        </div>
      </div>

      {/* Pagination */}
      <nav className="pcs-pagination">
        <div className="container pcs-pagination-row">
          {prev ? (
            <Link className="pcs-pag-link pcs-pag-prev" to={`/projects/${prev.slug}`}>
              <span className="pcs-pag-arr">←</span>
              <div>
                <span className="pcs-pag-lab">Previous</span>
                <span className="pcs-pag-title">{prev.title}</span>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link className="pcs-pag-link pcs-pag-next" to={`/projects/${next.slug}`}>
              <div>
                <span className="pcs-pag-lab">Next</span>
                <span className="pcs-pag-title">{next.title}</span>
              </div>
              <span className="pcs-pag-arr">→</span>
            </Link>
          ) : <div />}
        </div>
      </nav>

      {/* Footer */}
      <footer className="pcs-footer">
        <div className="container pcs-footer-row">
          <div>Ignacio Duarte · 2026</div>
          <div className="pcs-footer-links">
            <Link to="/#projects">← All Projects</Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
