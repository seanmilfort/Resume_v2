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

import { extendTheme } from "@chakra-ui/react";
import "@fontsource/pt-sans/400-italic.css"
import "@fontsource/bitter"

const customTheme = extendTheme({
    fonts: {
        heading: `'PT Sans' ,sans-serif`,
        body: `'Bitter', serif`
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
      <SkillSection />
      <Projects />
      <Education />
      <Footer />
    </main>
    </ChakraProvider>
  );
}

export default App;
