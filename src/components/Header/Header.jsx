import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    setMobileMenuOpen(false); // Close menu on route change
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            TY
          </div>
          <span className="text-xl font-bold dark:text-white">LoGo</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${activePath === item.path
                ? "text-blue-600 font-medium"
                : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition-colors duration-300 capitalize cursor-pointer`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun text-yellow-400 text-xl"></i>
            ) : (
              <i className="fas fa-moon text-gray-600 text-xl"></i>
            )}
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
          >
            {theme === 'dark' ? (
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
            <Link
              key={item.path}
              to={item.path}
              className={`block ${activePath === item.path
                ? "text-blue-600 font-medium"
                : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition-colors duration-300 capitalize`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
