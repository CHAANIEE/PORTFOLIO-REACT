import ShootingStars from "./components/effects/ShootingStars";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Benefits from "./components/sections/Benefits";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import FAQ from "./components/sections/FAQ";
import ProjectRequestForm from "./components/sections/ProjectRequestForm";

function App() {
  return (
    <>
      <ShootingStars />
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Skills />
      <Projects />
      <Process />
      <FAQ />
      <ProjectRequestForm />
      <Footer />
    </>
  );
}

export default App;