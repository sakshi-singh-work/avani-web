import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";
import TeamCertification from "./components/TeamCertification";
import About from "./About";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <TeamCertification />
      <Contact />
    </>
  );
};

export default Home;
