import React from "react";
import { Heading, VStack, HStack, Text, Image, Stack, Box, AspectRatio } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePicture from '../images/seanmilfort_profile.jpg'

const heading = "About Me";
const aboutMe1 = "Hi, I’m Sean Milfort!";
const aboutMe2 = "I am currently a System Administrator II at Rite Aid! I have a passion for looking at new technology and continuing to better myself, specifically in the mobile field. I keep myself up to date with all of the different operating systems (Windows, macOS, Linux, Android) and the newest technology trends.";
const aboutMe3 = "Besides my passion of IT, I'm also involved in many different other activities. On the side, I'm a mobile DJ that plays at many different venues for a magnitude of crowds. I am also into gaming and have my own Twitch channel!";
const aboutMe4 = "My current position in my organization allows me to test and utilize new technology to improve our work environment. With this position, I am looking at inefficient processes and problems that are currently implemented. Once identified, we look at re-mediating and improving them with new technology. Because of this, I have been able to think outside the box to find different solutions.";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
  >
    <VStack spacing={16}>
      <Heading as='h4' size='xl'>
        {heading}
      </Heading>
      <Stack direction={["column", "row"]} spacing={8} alignItems="center">
        <Box>
        <VStack spacing={6} maxWidth="600px">
            <Text text-align="center">{aboutMe1}</Text>
            <Text>{aboutMe2}</Text>
            <Text>{aboutMe3}</Text>
            <Text>{aboutMe4}</Text>
        </VStack>
        </Box>
        <Box>
        <Image src={profilePicture} maxWidth="300px"/>
        </Box>
      </Stack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
