import React, { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          if (!isScrolling) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
           TY
          </div>
          <span className="text-xl font-bold">Tapswi Yadav</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {["home", "about", "projects", "skills", "experience", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${
                  activeSection === section
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                } hover:text-blue-500 transition-colors duration-300 capitalize !rounded-button whitespace-nowrap cursor-pointer`}
              >
                {section}
              </button>
            )
          )}
        </nav>

        <button className="md:hidden text-gray-600 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
