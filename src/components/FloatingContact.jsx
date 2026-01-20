import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <>
      {/* Left: LinkedIn */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col items-center gap-4">
        <a
          href="https://linkedin.com/in/ignacioduartef"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-white transition"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={18} />
        </a>

        <div className="h-20 w-px bg-zinc-700" />
      </div>

      {/* Right: Email */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-center gap-4">
        <a
          href="mailto:ignacioduartef@gmail.com"
          className="p-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-white transition"
          aria-label="Email"
        >
          <FiMail size={18} />
        </a>

        <div className="h-20 w-px bg-zinc-700" />
      </div>
    </>
  );
}
