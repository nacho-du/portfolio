import { FiHome } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    // If already on home, scroll directly
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // From any other route, go home WITH a hash
    navigate(`/#${id}`);
  };

  const goHome = () => {
    // If already home, scroll to top
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // From other routes, go home (top)
    navigate("/");
  };

  return (
    <header
      className="
        sticky top-0 z-50
        bg-[rgb(var(--bg-main))]
        border-b border-[rgba(var(--text-muted),0.25)]
      "
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-6 text-sm text-[rgb(var(--text-muted))]">
          {/* Home icon */}
          <button
            type="button"
            onClick={goHome}
            className="text-[rgb(var(--accent))] hover:text-[rgba(var(--accent),0.85)] transition"
            aria-label="Home"
          >
            <FiHome size={18} />
          </button>

          <button
            type="button"
            onClick={() => goToSection("tech")}
            className="hover:text-[rgb(var(--text-main))] transition"
          >
            Tech
          </button>

          <button
            type="button"
            onClick={() => goToSection("experience")}
            className="hover:text-[rgb(var(--text-main))] transition"
          >
            Experience
          </button>

          <button
            type="button"
            onClick={() => goToSection("projects")}
            className="hover:text-[rgb(var(--text-main))] transition"
          >
            Projects
          </button>
        </div>

        <a
          href="Ignacio_Duarte_f25.pdf"
          className="
            text-sm px-4 py-2 rounded-md
            border border-[rgb(var(--accent))]
            text-[rgb(var(--accent))]
            hover:bg-[rgba(var(--accent),0.12)]
            hover:text-[rgba(var(--accent),0.90)]
            transition
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
