import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TopoColorSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ❌ Do nothing on project detail pages
    if (pathname.startsWith("/projects/")) return;

    const sections = Array.from(
      document.querySelectorAll("section[data-topo]")
    );

    if (!sections.length) return;

    const setTopoColor = (rgb) => {
      document.documentElement.style.setProperty("--topo-color", rgb);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target) {
          const rgb = visible.target.getAttribute("data-topo");
          if (rgb) setTopoColor(rgb);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
