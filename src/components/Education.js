import React from "react";
import { Heading, VStack, Box, Text, Image} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import nuLogo from '../images/NationalUniversityLogo.png'
import laSalleLogo from '../images/LaSalleUniversityWhiteLogo.png'
import courseraLogo from '../images/courseraLogo.png'


const headingEducation = "Education"
const headingCertifications = "Certifications"

const doctorateDegree = "Doctor of Philosophy (PhD), Computer Science"
const doctorateDegreeDates =  "Expected Graduation 2025"
const masterDegree = "Masters of Science (M.S.), Computer and Information Science"
const masterDegreeDates =  "May 2022"
const bachelorDegree = "Bachelor of Arts (B.A.), Computer Science"
const bachelorDegreeDates =  "May 2015"

const frontEndCertification = "Meta Front-End Developer Specialization"
const frontEndCertificationDates = "February 2023"

const iOSCertification = "Meta iOS Developer Specialization"
const iOSCertificationDates = "April 2023"

const Education = () => (
  <div id="Education">
  <FullScreenSection>
    <VStack spacing={16}>
      <div data-aos="fade-up">
        <Heading as="h2" size="xl">
          {headingEducation}
        </Heading>
      </div>
      <VStack spacing={6} alignItems="center">
        <div data-aos="fade-right">
          <Box alignItems="center">
            <Image src={nuLogo} maxWidth="300px" alignContent={"center"} />
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
      <VStack spacing={6} alignItems="center">
        <div data-aos="fade-right">
          <Box>
            <Image src={laSalleLogo} maxWidth="300px" alignContent={"center"} />
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
      <div data-aos="fade-up">
        <Heading as="h2" size="xl">
          {headingCertifications}
        </Heading>
      </div>
      <VStack spacing={6} alignItems="center">
        <div data-aos="fade-right">
          <Box alignItems="center">
            <Image
              src={courseraLogo}
              maxWidth="300px"
              alignContent={"center"}
            />
          </Box>
        </div>
        <div data-aos="fade-left">
          <Box>
            <VStack maxWidth="600px">
              <Text>{frontEndCertification}</Text>
              <Text fontStyle={"italic"}>{frontEndCertificationDates}</Text>
            </VStack>
          </Box>
        </div>
        <div data-aos="fade-left">
          <Box>
            <VStack maxWidth="600px">
              <Text>{iOSCertification}</Text>
              <Text fontStyle={"italic"}>{iOSCertificationDates}</Text>
            </VStack>
          </Box>
        </div>
      </VStack>
    </VStack>
  </FullScreenSection>
  </div>
);

export default Education;