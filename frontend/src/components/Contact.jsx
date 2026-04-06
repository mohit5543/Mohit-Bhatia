import { profile } from "../data/portfolioData";
import WindowShell from "./features/WindowShell";

function Contact({ isDesktop, onClose }) {
  const { email, github, linkedin } = profile.contact;

  return (
    <WindowShell
      id="contact"
      title="contact.links"
      className="contact-section"
      contentClassName="section-window-body"
      isDesktopOverride={isDesktop}
      onClose={onClose}
    >
      <div className="contact">
        <div className="section-heading">
          <span className="section-kicker">Let's connect</span>
          <h1>Contact</h1>
          <p className="section-subtitle">
            I&apos;m currently open to internships, freelance work, and frontend
            opportunities where I can contribute, learn fast, and help build
            thoughtful digital products.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-copy">
            <p>
              If you&apos;re building something interesting, hiring for a
              frontend role, or just want to connect, I&apos;d be glad to hear
              from you.
            </p>
            <p>
              The best way to reach me is through email or LinkedIn, and you can
              also explore my work on GitHub.
            </p>
          </div>

          <div className="contact-buttons">
            {email ? (
              <a href={`mailto:${email}`} className="button primary">
                Email Me
              </a>
            ) : null}
            <a href={github} target="_blank" rel="noopener noreferrer" className="button secondary">
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

export default Contact;
