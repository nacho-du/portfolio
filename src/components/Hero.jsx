export default function Hero({ onJump }) {
  return (
    <section id="intro" className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="intro">

          <div className="intro-photo reveal">
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Ignacio Duarte" />
            <div className="caption">I. Duarte · 2026</div>
          </div>

          <div className="intro-copy reveal-stagger">
            <div className="eyebrow">Mechanical Engineer</div>
            <h1>
              Ignacio<br />Duarte
            </h1>
            <p className="subtitle">Robotics, mechatronics &amp; sustainable systems.</p>
            <p className="lede">
              I'm a mechanical engineering student at UTEP with a strong interest in
              hands-on engineering, prototyping, and building real-world mechanical
              and robotic systems.
            </p>

            <div className="intro-cta">
              <a
                href={`${import.meta.env.BASE_URL}Ignacio_Duarte_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume"
              >
                Resume
                <span className="arrow">↗</span>
              </a>
              <a
                href="#projects"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  onJump?.("projects");
                }}
              >
                Selected Works
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
