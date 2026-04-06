import { profile } from "../data/portfolioData";

function Contact() {
  const { email, github, linkedin } = profile.contact;

  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <span className="section-kicker">Let's connect</span>
        <h1>Contact</h1>
        <p className="section-subtitle">
          If you have an opportunity or would like to collaborate, feel free to
          reach out.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-buttons">
          {email ? (
            <a href={`mailto:${email}`} className="button primary">
              Email Me
            </a>
          ) : null}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`button ${email ? "secondary" : "primary"}`}
          >
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
    </section>
  );
}

export default Contact;
