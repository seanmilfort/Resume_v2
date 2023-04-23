import React from "react";
import { Heading, VStack, Text, Stack, Box, Image, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import resumeproject from '../images/resume_project_photo.png'



const heading = "Projects"

const WorkExperience = () => (
<div id="Projects">
    <FullScreenSection>
      <VStack spacing={16} textAlign="center">
      <div data-aos="fade-up" >
        <Heading as='h2' size='xl'>
          {heading}
        </Heading>
        </div>
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
        <Box>
        <div data-aos="fade-right">
          <Image src={resumeproject} maxWidth="300px" />
        </div>
        </Box>
        <Box>
        <div data-aos="fade-left">
          <VStack spacing={4} maxWidth="600px">
              <Heading size="md" textAlign={"center"}>
                Resume Website
              </Heading>
              <Text fontStyle={"italic"} textAlign={"center"}>
                React
              </Text>
              <Text>
              After completing some tutorials with React/Modern Web Development Tools, I have updated and recreated my website/portfolio with these tools. The goal of this project is to showcase my skills in React as well as other tools.<br /> <br /> This project is the second iteration of this information.The original iteration was created with HTML/CSS and vanilla JS. This one is utilizing React.
              </Text>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/seanmilfort/Resume_v2">View Code</a>
                </Button>
                <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                <a target="_blank" rel="noopener noreferrer" href="https://seanmilfort.com">Demo Project</a>
                </Button>
            </Stack>
          </VStack>
        </div>
      </Box>
    </Stack>

      </VStack>
    </FullScreenSection>
    </div>
  );

export default WorkExperience;