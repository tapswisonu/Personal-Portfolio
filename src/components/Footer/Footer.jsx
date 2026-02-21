import React from "react";

function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tapswi Yadav. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/tapswi-yadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/tapswisonu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => scrollTo("home")}
            className="text-gray-500 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 cursor-pointer bg-transparent border-none"
          >
            <i className="fas fa-arrow-up"></i> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
