import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <motion.div
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hi, I'm Mohit</h1>

      <TypeAnimation
        sequence={[
          "Frontend Developer ",
          1500,
          "Learning AI ",
          1500,
          "Building Projects ",
          1500,
        ]}
        speed={50}
        repeat={Infinity}
        className="typing"
      />
      <p className="scroll">↓ Scroll Down</p>
    </motion.div>
  );
}

export default Hero;