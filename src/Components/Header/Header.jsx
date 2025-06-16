import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            TY
          </div>
          <span className="text-xl font-bold">Tapswi Yadav</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                activePath === item.path
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              } hover:text-blue-500 transition-colors duration-300 capitalize cursor-pointer`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button (optional functionality) */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
