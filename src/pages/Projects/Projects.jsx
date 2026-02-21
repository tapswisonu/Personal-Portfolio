import React from 'react'
import { motion } from "framer-motion";
import hrmImg from '../../assets/hrm.png';
import typingImg from '../../assets/typing.png';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical
            skills and creativity.
          </p>
        </motion.div>



        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Project 1 - HRM Check-In / Check-Out */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src={hrmImg}
                alt="HRM Check-In Check-Out System"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">HRM Check-In / Check-Out</h3>
                  <p className="text-sm text-gray-200">
                    Location-based employee attendance system
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">
                  Leaflet / OpenStreetMap
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 text-xs rounded-full">
                  MongoDB
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A GPS-based HRM attendance platform with real-time location
                tracking, role-based access (Employee / HR / Admin), map
                visualization, and working-hours reports.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://hrm-frontend-mu.vercel.app/auth/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </motion.div>


          {/* Project 7 - KeySkill */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-60 overflow-hidden">
              <img
                src={typingImg}
                alt="KeySkill Typing Platform"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">KeySkill</h3>
                  <p className="text-sm text-gray-200">
                    Typing practice &amp; exam preparation platform
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 text-xs rounded-full">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full">
                  MySQL
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A SaaS-style EdTech platform for government typing exam
                preparation with English &amp; Hindi support, real exam-pattern
                tests (SSC, High Court, Police), game modes, WPM/accuracy
                tracking, and subscription-based access control.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.snine.online/"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects
