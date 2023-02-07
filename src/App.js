import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LandingSection from './components/LandingSection';

function App() {
  return (
    <ChakraProvider>
    <main>
      <LandingSection />
    </main>
    </ChakraProvider>
  );
}

export default App;
