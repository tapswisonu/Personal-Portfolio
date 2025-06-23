
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
// pages
import HeroSection from "./pages/HeroSection/HeroSection"
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import ContactMe from "./pages/ContactMe/ContactMe";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HeroSection />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

