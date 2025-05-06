import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LandingSection from './components/LandingSection';
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience';
import AOS from 'aos'
import 'aos/dist/aos.css';
import SkillSection from './components/SkillSection';
import Education from './components/Education';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import ScrollToTop from "react-scroll-to-top";

import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/space-mono/400-italic.css";
// import "@fontsource/montserrat/300.css"
import "@fontsource/lato";

const customTheme = extendTheme({
    fonts: {
        heading: "Lato",
        body: "Lato"
    }
})

function App() {

  AOS.init({
    offset: 100,
    duration: 1000
    });

  return (

<ChakraProvider theme={customTheme} maxWidth="100%">
    <main>
      <NavBar />
      <LandingSection />
      <AboutMe />
      <WorkExperience />
      <Education />
      <SkillSection />
      <Projects />
      <Footer />
      <ScrollToTop smooth width="40"/>
    </main>
    </ChakraProvider>
  );
}

export default App;
