
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
// Pages
import Home from "./Pages/Home/Home";
import HeroSection from "./Pages/HeroSection/HeroSection"
import AboutMe from "./Pages/AboutMe/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import ContactMe from "./Pages/ContactMe/ContactMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HeroSection />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;

