import {Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sean Milfort!";
const bio1 = "System Administrator II";
const bio2 = "Passionate About Development Work";
const bio3 = "PhD Student";

  const LandingSection = () => (

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
  >
    <div data-aos="fade-in" >
    <VStack spacing={12} data>

      <Heading textAlign="center" as='h4' size='3xl'>
        {greeting}
      </Heading>
      <VStack spacing={4}>
      <Heading as='h2' size='lg'>
      {bio1}
      </Heading>
      <Heading as='h2' size='lg'>
      {bio2}
      </Heading>
      <Heading as='h2' size='lg'>
      {bio3}
      </Heading>
      </VStack>
    </VStack>
    </div>
  </FullScreenSection>
);

export default LandingSection;
