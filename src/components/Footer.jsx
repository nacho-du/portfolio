import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      // allow route change before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <footer className="border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleBackToTop}
          className="hover:text-zinc-300 text-left"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
