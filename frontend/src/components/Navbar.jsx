import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { navigationLinks, profile } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <div className="logo">{profile.name}</div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="cta" onClick={() => setOpen(false)}>
          Contact
        </a>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <div className={`menu-toggle ${open ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
