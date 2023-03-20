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



function App() {

  AOS.init({
    offset: 100,
    duration: 1000
    });

  return (
    <ChakraProvider maxWidth="100%">
    <main>
      <NavBar />
      <LandingSection />
      <AboutMe />
      <WorkExperience />
      <SkillSection />
      <Education />
      <Footer />
    </main>
    </ChakraProvider>
  );
}

export default App;
