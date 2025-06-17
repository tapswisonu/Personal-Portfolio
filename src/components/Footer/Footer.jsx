import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                TY
              </div>
              <span className="text-xl font-bold">Tapswi Yadav</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Front-end developer specializing in creating responsive,
              user-friendly web experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-blue-500"></i>
                <span className="text-gray-400">Noida, UP</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope mt-1 text-blue-500"></i>
                <span className="text-gray-400">sytapswi@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone-alt mt-1 text-blue-500"></i>
                <span className="text-gray-400">+91 7041029596</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tapswi Yadav. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
