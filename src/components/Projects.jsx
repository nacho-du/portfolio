import { Link } from "react-router-dom";
import { PROJECTS, PROJECT_ORDER } from "../data/projects";
import { QUICK_PROJECTS } from "../data/quickProjects";

export default function Projects() {
  const visible = PROJECT_ORDER
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p) => p && !p.hidden);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>Projects</h2>
          <span className="rule" />
        </div>

        <div className="proj-grid reveal-stagger">
          {visible.map((p) => {
            const inner = (
              <>
                <div className="proj-thumb">
                  {p.card?.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${p.card.image}`}
                      alt={p.title}
                      className="proj-thumb-img"
                    />
                  ) : null}
                </div>
                <div className="proj-body">
                  <div className="proj-row">
                    <span className="proj-arrow">
                      {p.status === "wip" && "WIP"}
                      {!p.status && !p.noDetail && <span className="open-pill">See Details ↗</span>}
                    </span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.blurb || p.card?.description}</p>
                  {p.highlights?.length > 0 && (
                    <ul className="proj-highlights">
                      {p.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
                  <div className="proj-stack">
                    {(p.card?.tags || p.tools || []).slice(0, 4).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>

                </div>
              </>
            );

            if (p.status === "wip" || !p.slug || p.noDetail) {
              return (
                <article className="proj-card proj-card--wip" key={p.slug || p.title}>
                  {inner}
                </article>
              );
            }

            return (
              <Link
                to={`/projects/${p.slug}`}
                className="proj-card"
                key={p.slug}
                style={{ textDecoration: "none" }}
              >
                {inner}
              </Link>
            );
          })}
        </div>

        {QUICK_PROJECTS.filter((p) => !p.hidden).length > 0 && (
          <div className="quick-projects reveal">
            <h4 className="quick-projects-heading">Additional Projects</h4>
            <div className="quick-grid">
              {QUICK_PROJECTS.filter((p) => !p.hidden).map((p) => (
                <div className="quick-card" key={p.title}>
                  <div className="quick-card-top">
                    <span className="quick-card-title">{p.title}</span>
                    {p.org && <span className="quick-card-org">{p.org}</span>}
                  </div>
                  <p className="quick-card-desc">{p.description}</p>
                  <div className="quick-card-tags">
                    {p.tags?.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
