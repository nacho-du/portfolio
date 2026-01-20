import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
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
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TechStack />
              <Projects />
              <Experience />
              
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
