import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import ProjectDetail from "./pages/ProjectDetail";

import TopoBackground from "./components/TopoBackground";
import TopoColorSync from "./components/TopoColorSync";

export default function App() {
  return (
    <>
      {/* Fixed topo background (behind everything) */}
      <TopoBackground />

      {/* Sync topo color with visible section */}
      <TopoColorSync />

      {/* App content */}
      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TechStack />
                <Experience />
                <Projects />
              </>
            }
          />

          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}
