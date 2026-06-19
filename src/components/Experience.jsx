const experience = [
  {
    role: "Operations Intern",
    company: "Franco & Associates",
    tag: "Bio-Digester System",
    date: "Summer 2025",
    image: `${import.meta.env.BASE_URL}experience/francov2.JPEG`,
    tags: ["Energy Systems", "Data Collection", "Troubleshooting"],
    bullets: [
      "Operated anaerobic biodigester systems including pumps, agitators, and blowers.",
      "Collected and analyzed biogas composition data to support system optimization.",
      "Troubleshot combustion and gas routing issues under real operational constraints.",
      "Coordinated and logged organic waste deliveries for consistent system input.",
    ],
  },
  {
    role: "Operations Chair",
    company: "Engineering Student Leadership Council, UTEP",
    tag: "Student Leadership",
    date: "2025 — Present",
    image: `${import.meta.env.BASE_URL}experience/eslc.JPG`,
    tags: ["Leadership", "Operations", "Project Coordination"],
    bullets: [
      "Coordinated logistics and operations for events supporting 5,000+ engineering students.",
      "Managed officer rosters, communications, and internal documentation.",
      "Facilitated funding and operational support for nearly 50 student organizations.",
    ],
  },
  {
    role: "President",
    company: "Environmental Stewardship Initiative - Cathedral High School",
    tag: "Student Leadership",
    date: "2020 — 2022",
    image: `${import.meta.env.BASE_URL}experience/sesi.JPEG`,
    tags: ["Leadership", "Grant Writing", "Environmental Projects"],
    bullets: [
      "Led a team of 60+ students focused on environmental restoration initiatives.",
      "Authored and submitted an EPA-approved project proposal securing $10,000 in funding.",
      "Planned and executed land restoration project with data collected for publication.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>Experience</h2>
          <span className="rule" />
        </div>

        <div className="exp-list reveal-stagger">
          {experience.map((item, i) => (
            <article className="exp-item" key={i}>
              <div className="exp-photo">
                {item.image ? (
                  <img src={item.image} alt={item.role} />
                ) : (
                  <div className="exp-placeholder">
                    <span className="placeholder-mark">[ image ]</span>
                    <span className="placeholder-label">{item.tag}</span>
                  </div>
                )}
              </div>
              <div className="exp-body">
                <h3>{item.role}</h3>
                <div className="exp-company">{item.company}</div>
                <div className="exp-date">{item.date}</div>
                <ul>
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                {item.tags && (
                  <div className="exp-tags">
                    {item.tags.map((t) => <span key={t} className="exp-chip">{t}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
