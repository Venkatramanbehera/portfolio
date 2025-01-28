import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = document.querySelector(".HomeContainer");

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const containerScroll = container?.scrollTop || 0;
      const containerHeight = container?.clientHeight || 0;
      const scrollPosition = containerScroll + containerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    // Add scroll event listener to the container instead of window
    container?.addEventListener("scroll", handleScroll);

    // Call handleScroll initially to set the active section
    handleScroll();

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array since we don't need to re-run this effect

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">V</div>
          <div className="nav-items">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className={activeSection === "about" ? "active" : ""}
            >
              about
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
              className={activeSection === "experience" ? "active" : ""}
            >
              experience
            </a>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
              }}
              className={activeSection === "project" ? "active" : ""}
            >
              project
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className={activeSection === "contact" ? "active" : ""}
            >
              contact
            </a>
          </div>
          <div className="cta-buttons">
            <button className="resume-btn">Resume</button>
            <button className="hire-btn">Hire Me</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
