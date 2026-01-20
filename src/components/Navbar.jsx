import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-[rgba(var(--bg-main),0.80)]
        backdrop-blur
        border-b border-[rgba(var(--text-muted),0.25)]
      "
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-6 text-sm text-[rgb(var(--text-muted))]">
          {/* Home icon */}
          <Link
            to="/"
            className="text-[rgb(var(--accent))] hover:text-[rgba(var(--accent),0.85)] transition"
            aria-label="Home"
          >
            <FiHome size={18} />
          </Link>

          <Link
            to="/#tech"
            className="hover:text-[rgb(var(--text-main))] transition"
          >
            Tech
          </Link>

          <Link
            to="/#experience"
            className="hover:text-[rgb(var(--text-main))] transition"
          >
            Experience
          </Link>

          <Link
            to="/#projects"
            className="hover:text-[rgb(var(--text-main))] transition"
          >
            Projects
          </Link>
        </div>

        <a
          href="/Ignacio_Duarte_f25.pdf"
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
