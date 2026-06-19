import { Link } from "react-router-dom";
import { PROJECTS, PROJECT_ORDER } from "../data/projects";
import { QUICK_PROJECTS } from "../data/quickProjects";

export default function ProjectsNew() {
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

        <div className="pn-list reveal-stagger">
          {visible.map((p) => {
            const isWip = p.status === "wip";
            const noDetail = p.noDetail === true;
            const inner = (
              <div className="pn-inner">
                {/* Col 1 — button + image */}
                <div className="pn-img-col">
                  <div className="pn-img-wrap">
                    {p.card?.image ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${p.card.image}`}
                        alt={p.title}
                        className="pn-img"
                      />
                    ) : (
                      <div className="pn-img-placeholder" />
                    )}
                  </div>
                  {!isWip && !noDetail && <span className="pn-open-box">See Details ↗</span>}
                </div>

                {/* Col 2 — content */}
                <div className="pn-content">
                  <div className="pn-meta">
                    {p.org && <span>{p.org}</span>}
                    {p.org && p.timeframe && <span className="pn-dot">·</span>}
                    {p.timeframe && <span>{p.timeframe}</span>}
                    {p.role && <><span className="pn-dot">·</span><span>{p.role}</span></>}
                  </div>

                  <h3 className="pn-title">{p.title}</h3>

                  {p.blurb && <p className="pn-blurb">{p.blurb}</p>}

                  {p.highlights?.length > 0 && (
                    <ul className="pn-highlights">
                      {p.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}

                  {(p.tools || p.card?.tags)?.length > 0 && (
                    <div className="pn-chips">
                      {(p.tools || p.card?.tags).slice(0, 6).map((t) => (
                        <span key={t} className="pn-chip">{t}</span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );

            if (isWip || !p.slug || noDetail) {
              return (
                <article className="pn-card pn-card--wip" key={p.slug || p.title}>
                  {inner}
                </article>
              );
            }

            return (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="pn-card"
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
