import React from "react";
import { Heading, VStack, Text, Image, Stack, Box,} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ExperienceInfo from "./ExperienceInformation";
//import profilePicture from '../images/seanmilfort_profile.jpg'

const heading = "Work Experience"

const WorkExperience = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={16}>
        <Heading as='h4' size='xl'>
          {heading}
        </Heading>
        <ExperienceInfo />
      </VStack>
    </FullScreenSection>
  );

export default WorkExperience;