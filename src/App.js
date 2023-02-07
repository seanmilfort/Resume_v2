import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LandingSection from './components/LandingSection';
import AboutMe from './components/AboutMe'

function App() {
  return (
    <ChakraProvider>
    <main>
      <LandingSection />
      <AboutMe />
    </main>
    </ChakraProvider>
  );
}

export default App;
