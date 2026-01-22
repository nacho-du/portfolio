import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Hash navigation (e.g. "/#projects")
    if (hash) {
      // Wait one frame to ensure DOM is painted
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
      return;
    }

    // Normal route navigation (e.g. "/projects/:slug")
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if you prefer
    });
  }, [pathname, hash]);

  return null;
}
