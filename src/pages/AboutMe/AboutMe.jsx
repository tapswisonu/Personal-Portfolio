import React from "react";
import { motion } from "motion/react";

function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Code Editor Mockup */}
            <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">Portfolio.jsx</div>
              </div>
              <div className="p-6 font-mono text-sm text-gray-300 space-y-2 overflow-x-auto">
                <div className="flex">
                  <span className="text-purple-400 mr-2">const</span>
                  <span className="text-blue-400">Developer</span>
                  <span className="text-white mx-2">=</span>
                  <span className="text-white">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-red-400">name:</span>
                  <span className="text-green-400 mx-2">'Tapswi Yadav'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-red-400">role:</span>
                  <span className="text-green-400 mx-2">'Front-End Dev'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-red-400">passion:</span>
                  <span className="text-green-400 mx-2">'Building UI/UX'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-red-400">skills:</span>
                  <span className="text-white mx-2">[</span>
                  <span className="text-green-400">'React'</span>,
                  <span className="text-green-400 mx-1">'Tailwind'</span>
                  <span className="text-white">]</span>
                </div>
                <div>
                  <span className="text-white">{`}`}</span>;
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-2xl font-bold">2+ Years</p>
              <p>Experience</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold dark:text-gray-100">
              I'm Tapswi Yadav, a Front-End Developer based in Noida
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I specialize in creating responsive, user-friendly web
              applications that deliver exceptional user experiences. With a
              strong foundation in HTML, CSS, and JavaScript, and expertise in
              modern frameworks like React.js, I bridge the gap between design
              and functionality.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              My journey in web development began during my computer science
              studies, where I discovered my passion for creating intuitive user
              interfaces. Since then, I've worked with startups and established
              companies to build products that users love.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium dark:text-gray-200">Name:</p>
                <p className="dark:text-gray-400">Tapswi Yadav</p>
              </div>
              <div>
                <p className="font-medium dark:text-gray-200">Email:</p>
                <p className="dark:text-gray-400">sytapswi@gmail.com</p>
              </div>
              <div>
                <p className="font-medium dark:text-gray-200">Location:</p>
                <p className="dark:text-gray-400">Noida, UP</p>
              </div>
              <div>
                <p className="font-medium dark:text-gray-200">Availability:</p>
                <p className="dark:text-gray-400">Full-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
