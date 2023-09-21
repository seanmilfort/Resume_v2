import {Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sean Milfort!";
const bio1 = "System Administrator II";
const bio2 = "Software Development";
const bio3 = "Professor";
const bio4 = "PhD Student";


  const LandingSection = () => (
  <div id="Home">
  <FullScreenSection >
    <VStack spacing={12} textAlign="center">

      <Heading as='h4' size='3xl'>{greeting}</Heading>

      <VStack spacing={4}>

        <Heading as='h2' fontStyle={"italic"} size='lg'>{bio1}</Heading>
        <Heading as='h2' fontStyle={"italic"} size='lg'>{bio2}</Heading>
        <Heading as='h2' fontStyle={"italic"} size='lg'>{bio3}</Heading>
        <Heading as='h2' fontStyle={"italic"} size='lg'>{bio4}</Heading>

      </VStack>
    </VStack>
  </FullScreenSection>
  </div>
);

export default LandingSection;
