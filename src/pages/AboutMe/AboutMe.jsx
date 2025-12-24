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
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20front-end%20developer%20working%20on%20multiple%20screens%20with%20code%20and%20design%20interfaces%2C%20modern%20workspace%20with%20plants%20and%20minimalist%20decor%2C%20side%20view%20of%20person%20typing%20on%20keyboard%2C%20focused%20on%20work%2C%20natural%20lighting%20from%20large%20windows&width=600&height=700&seq=3&orientation=portrait"
              alt="About Me"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">1+ Years</p>
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
