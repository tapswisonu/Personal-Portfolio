import React from "react";
import tapswiImg from './../../assets/tapswi-img.png';
import backgroundImg from "./../../assets/background-img.jpg";
import file from "./../../assets/Tapaswi_Resume.pdf";

function HeroSection() {
  return (
    <div>
      <section
        id="home"
        className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImg}
            alt="Hero Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Front-End <span className="text-blue-600">Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                Crafting responsive, user-friendly web experiences with modern
                technologies. Passionate about creating intuitive interfaces
                that bridge design and functionality.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={file}
                  type="application/pdf"
                  download
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-download"></i> Download Resume
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/tapswisonu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tapswi-yadav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                
                
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={tapswiImg}
                  alt="Tapswi Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
