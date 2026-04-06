import { profile } from "../data/portfolioData";
import WindowShell from "./features/WindowShell";

function About({ isDesktop, onClose }) {
  return (
    <WindowShell
      id="about"
      title="about.md"
      className="about-section"
      contentClassName="section-window-body"
      isDesktopOverride={isDesktop}
      onClose={onClose}
    >
      <div className="about">
        <div className="section-heading">
          <span className="section-kicker">Who I am</span>
          <h1>About Me</h1>
          <p className="section-subtitle">
            I&apos;m a frontend-focused developer who enjoys turning ideas into
            clean, responsive, and user-friendly web experiences.
          </p>
        </div>

        <div className="about-roadmap">
          {profile.about.map((paragraph, index) => (
            <article className="roadmap-step" key={paragraph}>
              <div className="roadmap-marker">
                <span>{index + 1}</span>
              </div>
              <div className="roadmap-content">
                <p>{paragraph}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </WindowShell>
  );
}

export default About;
