import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If we're on home and there's no hash, optionally scroll to top
    if (pathname === "/" && !hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);

  return null;
}
