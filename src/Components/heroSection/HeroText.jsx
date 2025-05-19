import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-center sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl md:block sm:hidden text-2xl font-manrope font-bold text-transparent bg-clip-text bg-gradient-to-r  text-white"
      >
        Front-End Developer | HTML, CSS, JavaScript, React
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl  text-white font-bold"
      >
        Hi, I’m <span className=" text-white">Tapswi Yadav</span>
        <br className="sm:hidden md:block" />
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4  text-white"
      >
        With over one year of experience in HTML, CSS, JavaScript, and React,
        <br /> I specialize in creating responsive and user-friendly web
        interfaces.
      </motion.p>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        {/* <p className="text-green-700 font-medium">
           Immediate joiner 
        </p> */}
        <a
          href="#contact"
          style={{ background: "#f77f00" }}
          className=" text-white px-6 py-2 rounded-lg hover:indigo-700 transition"
        >
          Download CV
        </a>
      </motion.p>
    </div>
  );
};

export default HeroText;
