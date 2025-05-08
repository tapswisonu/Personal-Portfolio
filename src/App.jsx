import NavbarMain from "./Components/navbar/NavbarMain";
import HeroMain from "./Components/heroSection/HeroMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
import SubHeroMain from "./Components/subHeroSection/SubHeroMain";
import AboutMeMain from "./Components/aboutMeSection/AboutMeMain";
function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
    </main>
  );
}

export default App;
