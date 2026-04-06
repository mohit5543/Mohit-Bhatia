import { motion as Motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiChevronDown } from "react-icons/fi";
import { profile } from "../data/portfolioData";

function Hero() {
  return (
    <section id="hero">
      <Motion.div
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
        <Motion.button
          type="button"
          className="scroll"
          onClick={() => {
            document
              .querySelector("#skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Scroll Down</span>

          <Motion.div
            className="scroll-icon"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <FiChevronDown size={24} />
          </Motion.div>
        </Motion.button>
      </Motion.div>
    </section>
  );
}

export default Hero;
