
import Header from './Pages/Header/Header';
import Footer from './Pages/footer/Footer'
import HeroSection from "./Components/heroSection/HeroSection";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
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
      ;
      <Footer />
    </main>
  );
}

export default App;
