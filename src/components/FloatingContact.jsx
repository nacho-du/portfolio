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
      <div className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col items-center gap-5">
        <a
          href="https://linkedin.com/in/ignacioduartef"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative
            px-4 py-3
            rounded-xl
            border
            border-[rgb(var(--accent-in))]
            text-[rgb(var(--accent-in))]
            hover:bg-[rgb(var(--accent-in))]
            hover:text-white
            transition
            hover:-translate-y-0.5
          "


          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={18} />
                    <span
            className="
              pointer-events-none
              absolute inset-0
              rounded-xl
              border
              border-[rgb(var(--accent-in))]
              opacity-40
              translate-x-0.5 translate-y-0.5
            "
          />

        </a>
        <div className="flex flex-col items-center gap-2">
  <span className="h-3 w-px bg-[rgb(var(--accent-in))] opacity-70" />
  <span className="h-6 w-px bg-[rgb(var(--accent-in))]" />
  <span className="h-3 w-px bg-[rgb(var(--accent-in))] opacity-70" />
</div>
      </div>

      {/* Right: Email (copy to clipboard) */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={copyEmail}
          className="
            text-xs tracking-widest
            text-[rgb(var(--ink))]
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

        <div className="h-20 w-px bg-[rgb(var(--accent-in))] opacity-70" />
      </div>
    </>
  );
}
