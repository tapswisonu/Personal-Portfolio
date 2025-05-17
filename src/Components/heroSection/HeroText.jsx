import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl text-lightGrey "
      >
        Front-End Developer | HTML, CSS, JavaScript, React
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold"
      >
        Hi, I’m <span class="text-blue-600">Tapswi Yadav</span>{" "}
        <br className="sm:hidden md:block" />
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
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
        <p class="text-green-700 font-medium">
           Immediate joiner 
        </p>
        <a
          href="#contact"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </motion.p>
    </div>
  );
};

export default HeroText;
