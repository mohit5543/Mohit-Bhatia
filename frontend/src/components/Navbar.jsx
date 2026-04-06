import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiDownload } from "react-icons/fi";
import { navigationLinks, profile } from "../data/portfolioData";

export default function Navbar({ activeSection, isDesktop, onNavigate }) {
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
          isDesktop ? (
            <button
              key={link.href}
              type="button"
              className={activeSection === link.href.slice(1) ? "active" : ""}
              onClick={() => {
                onNavigate(link.href.slice(1));
                setOpen(false);
              }}
            >
              {link.label}
            </button>
          ) : (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          )
        ))}
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href={profile.resume.href}
            className="nav-download"
            download
            onClick={() => setOpen(false)}
          >
            <FiDownload size={16} />
            <span>{profile.resume.label}</span>
          </a>
        </div>
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
