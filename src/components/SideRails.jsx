import { useState } from "react";

const email = "nachoduartefranco@gmail.com";
const linkedin = "https://linkedin.com/in/ignacioduartef";
const github = "https://github.com/nacho-du";

export default function SideRails() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* no-op */ }
  };

  return (
    <>
      <aside className="side-rail left" aria-label="Profiles">
        <span className="star">✦</span>
        <a className="icon-btn" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </a>
        <span className="div" />
        <a className="icon-btn" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12.05c0 5.1 3.3 9.4 7.88 10.93.58.11.79-.25.79-.56v-2c-3.21.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.72 1.27 3.39.97.1-.75.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18A11 11 0 0 1 12 6.84c.99.01 1.99.13 2.92.39 2.21-1.5 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.4-5.26 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.79.56A11.55 11.55 0 0 0 23.5 12.05C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
        <span className="star">✦</span>
      </aside>

      <aside className="side-rail right" aria-label="Email">
        <span className="star">✦</span>
        <button className="vmail" onClick={copyEmail} aria-label="Copy email">
          <span className={copied ? "copied" : ""}>
            {copied ? "Copied ✓" : email}
          </span>
        </button>
        <span className="star">✦</span>
      </aside>
    </>
  );
}
