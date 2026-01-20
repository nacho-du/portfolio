import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

export default function FloatingContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const email = "ignacioduartef@gmail.com";

    // Show confirmation immediately no matter what
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);

    // Try modern clipboard first
    try {
      await navigator.clipboard.writeText(email);
      return;
    } catch {}

    // Fallback copy
    try {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } catch {
      // Last resort: manual copy prompt
      window.prompt("Copy email:", email);
    }
  };

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

      {/* Right: Email (copy to clipboard) */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={copyEmail}
          className="
            text-xs tracking-widest
            text-zinc-300
            hover:text-[rgb(var(--accent))]
            active:text-[rgb(var(--accent))]
            transition
            cursor-pointer
            [writing-mode:vertical-rl]
            rotate-180
            select-none
          "
          aria-label="Copy email to clipboard"
        >
          {copied ? "Copied!" : "ignacioduartef@gmail.com"}
        </button>

        <div className="h-20 w-px bg-zinc-700" />
      </div>
    </>
  );
}
