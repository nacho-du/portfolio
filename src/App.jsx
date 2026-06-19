import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import SideRails from "./components/SideRails";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToHash from "./components/ScrollToHash";
import NewProjects from "./components/Projects_new";

const STARS = [
  { x: "4%",  y: "8%",  s: 2,   o: 0.45 },
  { x: "12%", y: "16%", s: 1.5, o: 0.3 },
  { x: "24%", y: "5%",  s: 2.5, o: 0.4 },
  { x: "34%", y: "12%", s: 1.5, o: 0.3 },
  { x: "48%", y: "4%",  s: 2,   o: 0.45 },
  { x: "62%", y: "14%", s: 2,   o: 0.35 },
  { x: "78%", y: "6%",  s: 2.5, o: 0.4 },
  { x: "92%", y: "12%", s: 1.5, o: 0.3 },
  { x: "6%",  y: "32%", s: 1.5, o: 0.3 },
  { x: "94%", y: "30%", s: 2,   o: 0.3 },
  { x: "16%", y: "52%", s: 1.5, o: 0.25 },
  { x: "84%", y: "58%", s: 2,   o: 0.3 },
  { x: "8%",  y: "76%", s: 2,   o: 0.35 },
  { x: "30%", y: "88%", s: 1.5, o: 0.25 },
  { x: "60%", y: "92%", s: 2,   o: 0.3 },
  { x: "88%", y: "82%", s: 2.5, o: 0.4 },
  { x: "44%", y: "70%", s: 1.5, o: 0.25 },
  { x: "72%", y: "44%", s: 2,   o: 0.3 },
];

const SECTIONS = ["intro", "experience", "projects", "tech"];

function MainPage() {
  const [activeSection, setActiveSection] = useState("intro");

  // scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const e of entries) {
          if (e.isIntersecting) {
            if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
          }
        }
        if (best) setActiveSection(best.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const jump = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onJump={jump} />
      <main>
        <Hero onJump={jump} />
        <Experience />
        <NewProjects />
        <TechStack />
      </main>
      <Footer onJump={jump} />
      <SideRails />
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="starfield" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{ fontSize: s.s * 5, top: s.y, left: s.x, opacity: s.o }}
          >✦</span>
        ))}
      </div>

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
