import { useLocation, useNavigate } from "react-router-dom";

const RESUME = `${import.meta.env.BASE_URL}Ignacio_Duarte_Resume.pdf`;
const LINKEDIN = "https://linkedin.com/in/ignacioduartef";
const EMAIL = "nachoduartefranco@gmail.com";

export default function Footer({ onJump }) {
  const location = useLocation();
  const navigate = useNavigate();

  const goTop = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      onJump?.("intro") ?? window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  return (
    <footer className="footer">
      <div className="container row">
        <div>Ignacio Duarte · 2026</div>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          <a href={RESUME} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${EMAIL}`}>Correspondence ↗</a>
          <a href="#intro" onClick={goTop}>Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
