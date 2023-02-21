import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LandingSection from './components/LandingSection';
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience';



function App() {
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
