import { motion as Motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { TypeAnimation } from "react-type-animation";
import WindowShell from "./features/WindowShell";

function Hero({ isDesktop, onClose }) {
  return (
    <WindowShell
      id="hero"
      title="portfolio.exe"
      className="hero-section"
      contentClassName="hero-body"
      isDesktopOverride={isDesktop}
      onClose={onClose}
    >
      <Motion.div
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-kicker">Available for frontend roles</span>
        <h1>Hi, I'm {profile.name.split(" ")[0]}</h1>
        <p>{profile.title}</p>

        <TypeAnimation
          sequence={profile.rotatingRoles}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            View Projects
          </a>
          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-highlights">
          <span>React</span>
          <span>Responsive UI</span>
          <span>Clean Frontend</span>
        </div>
      </Motion.div>
    </WindowShell>
  );
}

export default Hero;
