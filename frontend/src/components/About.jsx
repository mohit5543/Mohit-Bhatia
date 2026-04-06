import { profile } from "../data/portfolioData";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <span className="section-kicker">Who I am</span>
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
