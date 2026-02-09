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

    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    navigate(`/#${id}`);
  };

  const goHome = () => {
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
        bg-[rgba(var(--bg-main),0.92)]
        backdrop-blur-[6px]
        border-b border-[rgba(var(--ink,33,33,30),0.18)]
        shadow-[0_10px_25px_rgba(0,0,0,0.05)]
      "
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={goHome}
            className="
              inline-flex items-center justify-center
              w-10 h-10 rounded-2xl
              border border-[rgba(var(--ink,33,33,30),0.18)]
              bg-[rgba(var(--bg-card),0.70)]
              text-[rgb(var(--accent))]
              shadow-[0_3px_0_rgba(0,0,0,0.10)]
              hover:bg-[rgba(var(--accent),0.10)]
              hover:shadow-[0_4px_0_rgba(0,0,0,0.12)]
              transition
              active:translate-y-[1px]
              active:shadow-[0_2px_0_rgba(0,0,0,0.10)]
            "
            aria-label="Home"
          >
            <FiHome size={18} />
          </button>

          {/* Link style: mid-century label */}
          <button
            type="button"
            onClick={() => goToSection("tech")}
            className="
              font-body text-xs
              uppercase tracking-[0.26em]
              px-3 py-2 rounded-xl
              text-[rgba(var(--text-main),0.72)]
              hover:text-[rgb(var(--text-main))]
              hover:bg-[rgba(var(--accent),0.10)]
              hover:border hover:border-[rgba(var(--ink,33,33,30),0.16)]
              transition
            "
          >
            Tech
          </button>


          <button
            type="button"
            onClick={() => goToSection("projects")}
            className="
              font-body text-xs
              uppercase tracking-[0.26em]
              px-3 py-2 rounded-xl
              text-[rgba(var(--text-main),0.72)]
              hover:text-[rgb(var(--text-main))]
              hover:bg-[rgba(var(--accent),0.10)]
              hover:border hover:border-[rgba(var(--ink,33,33,30),0.16)]
              transition
            "
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => goToSection("experience")}
            className="
              font-body text-xs
              uppercase tracking-[0.26em]
              px-3 py-2 rounded-xl
              text-[rgba(var(--text-main),0.72)]
              hover:text-[rgb(var(--text-main))]
              hover:bg-[rgba(var(--accent),0.10)]
              hover:border hover:border-[rgba(var(--ink,33,33,30),0.16)]
              transition
            "
          >
            Experience
          </button>

        </div>

        {/* Right side */}
        <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-3">
          {/* Resume */}
          <a
            href={`${import.meta.env.BASE_URL}Ignacio_Duarte_Resume.pdf`}
            className="
              relative
              font-body text-sm
              px-4 py-2 rounded-xl
              border border-[rgba(var(--ink,33,33,30),0.18)]
              bg-[rgb(var(--bg-card))]
              text-[rgba(var(--text-main),0.86)]
              shadow-[0_3px_0_rgba(0,0,0,0.10)]
              hover:bg-[rgba(var(--accent),0.10)]
              hover:border-[rgba(var(--accent),0.35)]
              hover:shadow-[0_4px_0_rgba(0,0,0,0.12)]
              transition
              active:translate-y-[1px]
              active:shadow-[0_2px_0_rgba(0,0,0,0.10)]
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume

            {/* Offset border: print feel */}
            <span
              className="
                pointer-events-none
                absolute inset-0
                rounded-xl
                border border-[rgba(var(--ink,33,33,30),0.18)]
                translate-x-0.5 translate-y-0.5
                opacity-40
              "
            />
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="
              md:hidden
              inline-flex items-center justify-center
              w-10 h-10 rounded-2xl
              border border-[rgba(var(--ink,33,33,30),0.18)]
              text-[rgb(var(--text-main))]
              bg-[rgba(var(--bg-card),0.85)]
              shadow-[0_3px_0_rgba(0,0,0,0.10)]
              hover:bg-[rgba(var(--text-main),0.06)]
              hover:shadow-[0_4px_0_rgba(0,0,0,0.12)]
              transition
              active:translate-y-[1px]
              active:shadow-[0_2px_0_rgba(0,0,0,0.10)]
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
              mt-3 rounded-2xl
              border border-[rgba(var(--ink,33,33,30),0.18)]
              bg-[rgba(var(--bg-card),0.92)]
              backdrop-blur-[6px]
              shadow-[0_12px_30px_rgba(0,0,0,0.10)]
              overflow-hidden
            "
          >
            <button
              type="button"
              onClick={goHome}
              className="
                w-full flex items-center gap-2
                px-4 py-3 text-sm
                font-body
                text-[rgba(var(--text-main),0.88)]
                hover:bg-[rgba(var(--accent),0.10)]
                transition
              "
            >
              <FiHome size={16} />
              Home
            </button>

            <div className="h-px bg-[rgba(var(--ink,33,33,30),0.12)]" />

            <button
              type="button"
              onClick={() => goToSection("tech")}
              className="
                w-full text-left
                px-4 py-3 text-sm
                font-body
                text-[rgba(var(--text-main),0.88)]
                hover:bg-[rgba(var(--accent),0.10)]
                transition
              "
            >
              Tech
            </button>

  

            <button
              type="button"
              onClick={() => goToSection("projects")}
              className="
                w-full text-left
                px-4 py-3 text-sm
                font-body
                text-[rgba(var(--text-main),0.88)]
                hover:bg-[rgba(var(--accent),0.10)]
                transition
              "
            >
              Projects
            </button>

            <button
              type="button"
              onClick={() => goToSection("experience")}
              className="
                w-full text-left
                px-4 py-3 text-sm
                font-body
                text-[rgba(var(--text-main),0.88)]
                hover:bg-[rgba(var(--accent),0.10)]
                transition
              "
            >
              Experience
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
