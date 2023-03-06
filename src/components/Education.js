import React from "react";
import { Heading, VStack, Box, Text, Image, Stack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import NCULogo from '../images/NCUWhiteLogo.png'
import LaSalleLogo from '../images/LaSalleUniversityWhiteLogo.png'


const heading = "Education"

const Education = () => (
    <FullScreenSection
      justifyContent="center"
    >
      <VStack spacing={16}>
      <div data-aos="fade-up">
        <Heading as='h2' size='xl'>
          {heading}
        </Heading>
        </div>
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
        <Box  maxWidth="300px">
        <div data-aos="fade-right">
          <Image src={NCULogo}/>
          </div>
          </Box>
          <Box maxWidth="600px">
            <div data-aos="fade-left">
                <VStack width="500px">
                        <Text>Doctor of Philosophy (PhD), Computer Science</Text>
                        <Text fontStyle={"italic"}>Expected Graduation 2025</Text>
                </VStack>
            </div>
        </Box>
        </Stack>
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
        <Box >
        <div data-aos="fade-right">
          <Image src={LaSalleLogo} maxWidth="300px" />
          </div>
          </Box>
          <Box>
            <div data-aos="fade-left">
                <VStack width="500px" spacing={6}>
                <VStack width="500px">
                        <Text>Masters of Science (M.S.), Computer and Information Science</Text>
                        <Text fontStyle={"italic"}>May 2022</Text>
                        </VStack>
                <VStack width="500px">
                        <Text>Bachelor of Arts (B.A.), Computer Science</Text>
                        <Text fontStyle={"italic"}>May 2015</Text>
                </VStack>
                </VStack>
            </div>
        </Box>
        </Stack>
      </VStack>
    </FullScreenSection>
  );

export default Education;