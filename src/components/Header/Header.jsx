import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Highlight nav item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            TY
          </div>
          <span className="text-xl font-bold dark:text-white">Tapswi</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`${activeSection === item.id
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition-colors duration-300 capitalize cursor-pointer bg-transparent border-none`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <i className="fas fa-sun text-yellow-400 text-xl"></i>
            ) : (
              <i className="fas fa-moon text-gray-600 text-xl"></i>
            )}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
          >
            {theme === "dark" ? (
              <i className="fas fa-sun text-yellow-400 text-xl"></i>
            ) : (
              <i className="fas fa-moon text-gray-600 text-xl"></i>
            )}
          </button>
          <button
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left ${activeSection === item.id
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition-colors duration-300 capitalize bg-transparent border-none cursor-pointer`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
