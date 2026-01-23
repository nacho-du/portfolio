import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function TopoColorSync() {
  const { pathname } = useLocation();
  const activeKeyRef = useRef(null);

  useEffect(() => {
    // ❌ Do nothing on project detail pages
    if (pathname.startsWith("/projects/")) return;

    const sections = Array.from(document.querySelectorAll("section[data-topo]"));
    if (!sections.length) return;

    const resolveKeyToRgb = (key) => {
      if (!key) return "";
      const cssVar = `--topo-${key}`;
      return getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar)
        .trim()
        .replace(/,/g, " ");
    };

    const setTopoKey = (key) => {
      if (!key) return;
      if (activeKeyRef.current === key) return;

      const rgb = resolveKeyToRgb(key);
      if (!rgb) return;

      activeKeyRef.current = key;
      document.documentElement.style.setProperty("--topo-color", rgb);
    };

    const pickMostVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;

      let best = null;
      let bestRatio = 0;

      for (const s of sections) {
        const r = s.getBoundingClientRect();

        // visible height within viewport
        const visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
        const ratio = visible / Math.max(1, r.height);

        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = s;
        }
      }

      if (best) {
        setTopoKey(best.getAttribute("data-topo"));
      }
    };

    // Initial
    pickMostVisible();

    const observer = new IntersectionObserver(
      () => {
        // Recompute from all sections (stable)
        pickMostVisible();
      },
      {
        // Tweak these if you want earlier/later switching
        root: null,
        threshold: [0, 0.1, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));
    window.addEventListener("resize", pickMostVisible);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", pickMostVisible);
    };
  }, [pathname]);

  return null;
}