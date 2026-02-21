import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/ContactMe/ContactMe";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}

export default App;
