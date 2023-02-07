import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sean Milfort!";
const bio1 = "System Administrator II";
const bio2 = "Front-End Development";
const bio3 = "PhD Student";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
  >
    <VStack spacing={12}>

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
  </FullScreenSection>
);

export default LandingSection;
