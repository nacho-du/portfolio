import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "tech",       label: "Tech" },
];

export default function Navbar({ activeSection = "", onJump }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const jump = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      onJump?.(id);
    } else {
      navigate(`/#${id}`);
    }
  };

  const goHome = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container row">
        <a href="#intro" onClick={goHome} className="brand" aria-label="Home">
          <span>Ignacio</span>
          <span className="dot">·</span>
          <span>Duarte</span>
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={jump(s.id)}
              className={`nav-link ${activeSection === s.id ? "active" : ""}`}
            >
              {s.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}Ignacio_Duarte_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
            style={{ marginLeft: 12 }}
          >
            Resume
            <span className="arrow">↗</span>
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {open ? (
              <g stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="3" x2="13" y2="13" />
                <line x1="13" y1="3" x2="3" y2="13" />
              </g>
            ) : (
              <g stroke="currentColor" strokeWidth="1.5">
                <line x1="2" y1="5" x2="14" y2="5" />
                <line x1="2" y1="11" x2="14" y2="11" />
              </g>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
