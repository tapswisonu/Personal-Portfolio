import React from 'react'
import { motion } from "motion/react";

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My career journey in web development, showcasing my growth and
            achievements.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience Items */}
          <div className="space-y-12">

            {/* Freelancing */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full border-4 border-violet-500 bg-white dark:bg-gray-900"></div>
              </div>
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md md:ml-auto md:mr-0 max-w-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Freelancer
                    </h3>
                    <p className="text-violet-600 dark:text-violet-400 font-medium">
                      Self-Employed · Freelancing
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Present</p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">Freelance Project Work</span>
                        <i className="fas fa-check-circle text-violet-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">Canva Social Media &amp; Branding Posts</span>
                        <i className="fas fa-check-circle text-violet-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">Portfolio Website Development</span>
                        <i className="fas fa-check-circle text-violet-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">Full-Stack Web Development Projects</span>
                        <i className="fas fa-check-circle text-violet-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">Business Profile Websites &amp; Hosting Setup</span>
                        <i className="fas fa-check-circle text-violet-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                      <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-xs rounded-full">React</span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 text-xs rounded-full">Canva</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">Hosting</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  {/* Empty div for layout */}
                </div>
              </div>
            </motion.div>


            {/* Experience 2 - Pioneer the Future */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full border-4 border-blue-600 bg-white dark:bg-gray-900"></div>
              </div>
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  {/* Empty div for layout */}
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Front-End Developer
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Pioneer the Future Pvt. Ltd.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                     October 2023 - May 2025
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>
                          Developed responsive websites for BlinkExam Projects.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                        <span>
                          Collaborated with designers to implement pixel-perfect
                          UI components
                        </span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs rounded-full">
                        SCSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience 3 - Locksish Digitech */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full border-4 border-blue-600 bg-white dark:bg-gray-900"></div>
              </div>
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md md:ml-auto md:mr-0 max-w-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      Junior Web Developer
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Locksish Digitech India Private Limited
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4"> March 2023 - June 2023</p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Assisted in building and maintaining client websites
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Implemented responsive designs and cross-browser
                          compatibility
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="md:order-2">
                          Participated in code reviews and team knowledge
                          sharing
                        </span>
                        <i className="fas fa-check-circle text-green-500 mr-2 md:ml-2 md:mr-0 mt-1 md:order-1"></i>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full">
                        HTML5
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        CSS3
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">
                        jQuery
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  {/* Empty div for layout */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
