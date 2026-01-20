import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToHash from "./components/ScrollToHash";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <>
      {/* Handles /#experience, /#projects, etc */}
      <ScrollToHash />

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
    </>
  );
}
