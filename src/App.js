import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LandingSection from './components/LandingSection';
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience';
import AOS from 'aos'
import 'aos/dist/aos.css';



function App() {

  AOS.init({
    offset: 100,
    duration: 1000
    });

  return (
    <ChakraProvider>
    <main>
      <LandingSection />
      <AboutMe />
      <WorkExperience />
    </main>
    </ChakraProvider>
  );
}

export default App;
