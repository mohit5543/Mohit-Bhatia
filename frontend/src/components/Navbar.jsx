import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Mohit</div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#contact" className="cta" onClick={() => setOpen(false)}>Contact</a>
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