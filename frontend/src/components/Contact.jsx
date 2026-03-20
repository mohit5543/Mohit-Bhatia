function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h1>Contact</h1>

        <p className="contact-text">
          If you have an opportunity or would like to collaborate,
          feel free to reach out.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:your-email@gmail.com"
            className="button primary"
          >
            Email Me
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR_PROFILE"
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