import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { vars } from "./theme";

// Apply theme colors to :root before first render — no flash
Object.entries(vars).forEach(([key, val]) =>
  document.documentElement.style.setProperty(key, val)
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
