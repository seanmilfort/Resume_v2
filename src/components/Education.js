import React from "react";
import { Heading, VStack, Box, Text, Image} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import NCULogo from '../images/NCUWhiteLogo.png'
import LaSalleLogo from '../images/LaSalleUniversityWhiteLogo.png'


const heading = "Education"
const doctorateDegree = "Doctor of Philosophy (PhD), Computer Science"
const doctorateDegreeDates =  "Expected Graduation 2025"
const masterDegree = "Masters of Science (M.S.), Computer and Information Science"
const masterDegreeDates =  "May 2022"
const bachelorDegree = "Bachelor of Arts (B.A.), Computer Science"
const bachelorDegreeDates =  "May 2015"

const Education = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={16}>
      <div data-aos="fade-up">
        <Heading as='h2' size='xl'>
          {heading}
        </Heading>
        </div>
        <VStack spacing={6} alignItems="center">
        <div data-aos="fade-right">
        <Box alignItems="center">
          <Image src={NCULogo} maxWidth="300px" alignContent={"center"}/>
        </Box>
        </div>
        <div data-aos="fade-left">
        <Box>
                <VStack maxWidth="600px">
                        <Text>{doctorateDegree}</Text>
                        <Text fontStyle={"italic"}>{doctorateDegreeDates}</Text>
                </VStack>
        </Box>
        </div>
        </VStack>
        <VStack spacing={4} alignItems="center">
        <div data-aos="fade-right">
        <Box>
          <Image src={LaSalleLogo} maxWidth="300px" alignContent={"center"} />
          </Box>
          </div>
          <div data-aos="fade-left">
          <Box>
                <VStack spacing={6} textAlign="center">
                <VStack>
                        <Text>{masterDegree}</Text>
                        <Text fontStyle={"italic"}>{masterDegreeDates}</Text>
                </VStack>
                <VStack>
                        <Text>{bachelorDegree}</Text>
                        <Text fontStyle={"italic"}>{bachelorDegreeDates}</Text>
                </VStack>
                </VStack>
        </Box>
        </div>
        </VStack>
      </VStack>
    </FullScreenSection>
  );

export default Education;