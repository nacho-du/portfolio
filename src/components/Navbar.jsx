import { useEffect, useRef, useState } from "react";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const goToSection = (id) => {
    setOpen(false);

    // If already on home, scroll directly
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // From any other route, go home WITH a hash
    navigate(`/#${id}`);
  };

  const goHome = () => {
    setOpen(false);

    // If already home, scroll to top
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // From other routes, go home (top)
    navigate("/");
  };

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close menu on outside click + Escape
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onMouseDown = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [open]);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-[rgb(var(--bg-main))]
        border-b border-[rgba(var(--text-muted),0.25)]
      "
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Desktop nav (unchanged) */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[rgb(var(--text-muted))]">
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

        {/* Right side: Resume LEFT, Hamburger RIGHT on mobile; desktop stays the same */}
        <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-3">
          {/* Resume (left on mobile) */}
          <a
            href={`${import.meta.env.BASE_URL}Ignacio_Duarte_f25.pdf`}
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

          {/* Hamburger (right on mobile) */}
          <button
            type="button"
            className="
              md:hidden
              inline-flex items-center justify-center
              w-10 h-10 rounded-md
              border border-[rgba(var(--text-muted),0.25)]
              text-[rgb(var(--text-main))]
              hover:bg-[rgba(var(--text-muted),0.08)]
              transition
            "
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

      </nav>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden px-6 pb-4" ref={panelRef}>
          <div
            className="
              mt-2 rounded-xl
              border border-[rgba(var(--text-muted),0.25)]
              bg-[rgb(var(--bg-main))]
              shadow-lg
              overflow-hidden
            "
          >
            <button
              type="button"
              onClick={goHome}
              className="
                w-full flex items-center gap-2
                px-4 py-3 text-sm
                text-[rgb(var(--text-main))]
                hover:bg-[rgba(var(--text-muted),0.08)]
                transition
              "
            >
              <FiHome size={16} />
              Home
            </button>

            <button
              type="button"
              onClick={() => goToSection("tech")}
              className="
                w-full text-left
                px-4 py-3 text-sm
                text-[rgb(var(--text-main))]
                hover:bg-[rgba(var(--text-muted),0.08)]
                transition
              "
            >
              Tech
            </button>

            <button
              type="button"
              onClick={() => goToSection("experience")}
              className="
                w-full text-left
                px-4 py-3 text-sm
                text-[rgb(var(--text-main))]
                hover:bg-[rgba(var(--text-muted),0.08)]
                transition
              "
            >
              Experience
            </button>

            <button
              type="button"
              onClick={() => goToSection("projects")}
              className="
                w-full text-left
                px-4 py-3 text-sm
                text-[rgb(var(--text-main))]
                hover:bg-[rgba(var(--text-muted),0.08)]
                transition
              "
            >
              Projects
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
