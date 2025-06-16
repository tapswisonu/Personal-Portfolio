
import Header from './../../Components/Header/Header'
import HeroSection from "./../../Pages/HeroSection/HeroSection";
import AboutMe from "./../../Pages/AboutMe/AboutMe";
import Projects from "./../../Pages/Projects/Projects";
import Skills from "./../../Pages/Skills/Skills";
import Experience from "./../../Pages/Experience/Experience";
import ContactMe from "./../../Pages/ContactMe/ContactMe";

function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        <AboutMe />
        {/* Projects Section */}
        {/* <Projects /> */}
        {/* Skills Section */}
        <Skills />
        {/* Experience Section */}
        <Experience />
        {/* Contact Section */}
        <ContactMe/>
      </main>
      
    </main>
  );
}

export default Home;