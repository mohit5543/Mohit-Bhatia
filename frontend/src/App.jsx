import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ScrollToTop from "./components/features/ScrollToTop";

function App() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth > 768 : false
  );
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
      if (!desktop) {
        setActiveSection("hero");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const sections = useMemo(
    () => ({
      hero: <Hero isDesktop={isDesktop} onClose={() => setActiveSection(null)} />,
      skills: <Skills isDesktop={isDesktop} onClose={() => setActiveSection(null)} />,
      projects: (
        <Projects isDesktop={isDesktop} onClose={() => setActiveSection(null)} />
      ),
      about: <About isDesktop={isDesktop} onClose={() => setActiveSection(null)} />,
      contact: (
        <Contact isDesktop={isDesktop} onClose={() => setActiveSection(null)} />
      ),
    }),
    [isDesktop]
  );

  return (
    <div>
      <Navbar
        activeSection={activeSection}
        isDesktop={isDesktop}
        onNavigate={openSection}
      />
      <div className={`container ${isDesktop ? "desktop-workspace" : ""}`}>
        {isDesktop ? (
          <div className="workspace-stage">
            {activeSection ? (
              <div className="workspace-layer is-active">{sections[activeSection]}</div>
            ) : (
              <div className="workspace-empty">
                <p>Choose a section from the navbar to open its window.</p>
              </div>
            )}
          </div>
        ) : (
          <>
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
          </>
        )}
      </div>

      {!isDesktop ? <ScrollToTop /> : null}

      <Footer />
    </div>
  );
}

export default App;
