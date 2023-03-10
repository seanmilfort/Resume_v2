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
    <VStack spacing={12} textAlign="center">

      <Heading as='h4' size='3xl'>
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

  </FullScreenSection>
);

export default LandingSection;
