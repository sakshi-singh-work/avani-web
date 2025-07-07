import { useEffect } from "react";
import { useGlobalContext } from "./context";
import AboutHeroSection from "./components/AboutHeroSection";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <AboutHeroSection />;
};

export default About;
