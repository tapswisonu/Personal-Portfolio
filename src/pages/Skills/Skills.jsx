import React from 'react'
import { motion } from "framer-motion";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I specialize in, continuously
            expanding my expertise to stay current with industry trends.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Frontend Skills */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-6 mx-auto">
              <i className="fas fa-code text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Frontend</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-html5 text-orange-500 mr-2"></i>
                  HTML5
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-css3-alt text-blue-500 mr-2"></i>
                  CSS3
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-js text-yellow-500 mr-2"></i>
                  JavaScript
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </li>

              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-bootstrap text-purple-500 mr-2"></i>
                  Bootstrap
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                  ></motion.div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Frameworks */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-6 mx-auto">
              <i className="fas fa-layer-group text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Frameworks</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-react text-blue-400 mr-2"></i>
                  React.js
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-green-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </li>


              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-node-js text-green-600 mr-2"></i>
                  Node.js
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-green-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </li>

            </ul>
          </motion.div>

          {/* Design */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-6 mx-auto">
              <i className="fas fa-paint-brush text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Design</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-pencil-ruler text-gray-600 mr-2"></i>
                  UI/UX Design
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-figma text-orange-500 mr-2"></i>
                  Figma
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </li>

              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-palette text-red-500 mr-2"></i>
                  Photoshop
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </li>

            </ul>
          </motion.div>

          {/* Tools & Others */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg mb-6 mx-auto">
              <i className="fas fa-tools text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 dark:text-white">
              Tools & Others
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fab fa-git-alt text-orange-600 mr-2"></i>
                  Git
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-orange-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-terminal text-gray-700 mr-2"></i>
                  Command Line
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-orange-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-database text-blue-500 mr-2"></i>
                  RESTful APIs
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-orange-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </li>


            </ul>
          </motion.div>
          {/* AI Tools */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-lg mb-6 mx-auto">
              <i className="fas fa-robot text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 dark:text-white">AI Tools</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-comments text-green-500 mr-2"></i>
                  ChatGPT
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-violet-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-magic text-pink-500 mr-2"></i>
                  Canva AI
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-violet-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center">
                  <i className="fas fa-star text-blue-500 mr-2"></i>
                  Gemini
                </span>
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-violet-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}

export default Skills

