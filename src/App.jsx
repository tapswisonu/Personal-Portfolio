import NavbarMain from "./Components/navbar/NavbarMain";
import HeroMain from "./Components/heroSection/HeroMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
import SubHeroMain from "./Components/subHeroSection/SubHeroMain";
import AboutMeMain from "./Components/aboutMeSection/AboutMeMain";
import SkillsMain from "./Components/skillsSection/SkillsMain";
import SubSkills from "./Components/skillsSection/SubSkills";
import ExperienceMain from "./Components/experienceSection/ExperienceMain";
import ContactMeMain from "./Components/contactMeSection/ContactMeMain";
import FooterMain from "./Components/footer/FooterMain";
// import HelperSection from "./Components/HelperSection";
function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
     <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      {/* <ProjectsMain /> */}
      <ContactMeMain />
      {/* <HelperSection /> */}
      <FooterMain />
    </main>
  );
}

export default App;
