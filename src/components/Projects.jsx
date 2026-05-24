import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import ProjectThumb from "./ProjectThumb";

export default function Projects() {
  const visible = PROJECTS.filter((p) => !p.hidden);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="idx">II.</span>
          <h2>Projects</h2>
          <span className="rule" />
          <span className="meta">{visible.length} Projects</span>
        </div>

        <div className="proj-grid reveal-stagger">
          {visible.map((p, i) => {
            const inner = (
              <>
                <div className="proj-thumb">
                  <ProjectThumb kind={p.thumb || "web"} />
                  <div className="proj-thumb-overlay">
                    <span className="open-pill">
                      {p.status === "wip" ? "WIP" : "Open ↗"}
                    </span>
                  </div>
                </div>
                <div className="proj-body">
                  <div className="proj-row">
                    <span className="proj-tag">
                      No. {String(i + 1).padStart(2, "0")} · {p.card?.tags?.[0] || ""}
                      {p.status === "wip" && " · WIP"}
                    </span>
                    <span className="proj-arrow">↗</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.blurb || p.card?.description}</p>
                  <div className="proj-stack">
                    {(p.card?.tags || p.tools || []).slice(0, 4).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </>
            );

            if (p.status === "wip" || !p.slug) {
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
      </div>
    </section>
  );
}
