import { useEffect, useState, useRef } from "react";
import { FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiCss, SiMongodb } from "react-icons/si";
import { motion as Motion } from "framer-motion";
import { skillsData } from "../data/portfolioData";

const iconMap = {
  react: <FaReact className="icon react" />,
  js: <FaJs className="icon js" />,
  css: <SiCss className="icon css" />,
  node: <FaNodeJs className="icon node" />,
  mongo: <SiMongodb className="icon mongo" />,
  git: <FaGitAlt className="icon git" />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const currentSkills = skillsData[activeTab];
  const progress = visible
    ? currentSkills.map((skill) => skill.value)
    : currentSkills.map(() => 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Motion.section
      className="skills"
      id="skills"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-heading">
        <span className="section-kicker">Core stack</span>
        <h1>Skills</h1>
        <p className="section-subtitle">
          A snapshot of the tools I use most often when building modern web
          experiences.
        </p>
      </div>

      <div className="skills-tabs">
        <button
          onClick={() => setActiveTab("frontend")}
          className={activeTab === "frontend" ? "active" : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={activeTab === "backend" ? "active" : ""}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={activeTab === "tools" ? "active" : ""}
        >
          Tools
        </button>
      </div>

      <div className="skills-list">
        {currentSkills.map((skill, index) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-header">
              <span className="skill-title">
                {iconMap[skill.icon]}
                {skill.name}
              </span>
              <span>{progress[index] || 0}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${progress[index] || 0}%` }}
              />
            </div>

            <p className="skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>
    </Motion.section>
  );
}
