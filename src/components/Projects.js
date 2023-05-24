import React from "react";
import { Heading, VStack, Text, Stack, Box, Image, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

import resumeproject from '../images/resume_project_photo.png'
import linktreev2project from '../images/linktreev2_project_photo.png'
import littlelemonswiftproject from '../images/iPhoneFoodOrdering_Screenshots.png'
import littlelemonbookingproject from '../images/littlelemonbooking_project_photo.png'
import djwebsitegproject from '../images/djwebsite_project_photo.png'
import linktreev1project from '../images/linktreev1DJ_project_photo.png'


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

        {/* Resume Project */}
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
          <Box>
            <div data-aos="fade-right">
              <Image src={resumeproject} maxWidth="300px" border='2px' borderColor='#E5EFE7' />
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
                  After completing some tutorials with React/Modern Web Development Tools, I have updated and recreated my website/portfolio with these tools. The goal of this project is to showcase my skills in React as well as other tools.<br /><br />This project is the second iteration of this information.The original iteration was created with HTML/CSS and vanilla JS. This one is utilizing React.
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

        {/* Link Tree v2 Project */}
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
          <Box>
            <div data-aos="fade-right">
              <Image src={linktreev2project} maxWidth="300px" border='2px' borderColor='#E5EFE7' />
            </div>
          </Box>
          <Box>
            <div data-aos="fade-left">
              <VStack spacing={4} maxWidth="600px">
                <Heading size="md" textAlign={"center"}>
                  Linktree v2 Clone
                </Heading>
                <Text fontStyle={"italic"} textAlign={"center"}>
                  React
                </Text>
                <Text>
                  This project was created with the attempt to make my own version of the current website Linktree. Linktree is a website that allows users to put all their social media links on one page web page. Since that solution is a paid offering and it is just a website, I decided to develop my own.<br /><br />This project is the second iteration of this information. The original iteration was created with HTML/CSS and vanilla JS. This one is utilizing React.
                </Text>
                <Stack spacing={6} direction={["column", "row"]}>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/seanmilfort/Link-Page-v2">View Code</a>
                  </Button>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://links.seanmilfort.com">Demo Project</a>
                  </Button>
                </Stack>
              </VStack>
            </div>
          </Box>
        </Stack>

        {/* Little Lemon Food Ordering Project */}
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
          <Box>
            <div data-aos="fade-right">
              <Image src={littlelemonswiftproject} maxWidth="300px" border='2px' borderColor='#E5EFE7' />
            </div>
          </Box>
          <Box>
            <div data-aos="fade-left">
              <VStack spacing={4} maxWidth="600px">
                <Heading size="md" textAlign={"center"}>
                  Little Lemon Food Ordering Application
                </Heading>
                <Text fontStyle={"italic"} textAlign={"center"}>
                  Swift
                </Text>
                <Text>
                  This project was the final project created during Meta's iOS Developer Specialization Course. This website was the culmuniation of the iOS Developer Development Track.<br /><br />This application is set to be used as a demo for creating a Food Ordering Application for the Little Lemon Restaurant. This utilizes a Login Page, pulling raw data from a Data Source and populating a Menu List, while also implenting sorting, filtering and search capabilities.
                </Text>
                <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/seanmilfort/LittleLemon_FoodOrdering_Swift">View Code</a>
                </Button>
              </VStack>
            </div>
          </Box>
        </Stack>

        {/* Little Lemon Booking Project Project */}
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
          <Box>
            <div data-aos="fade-right">
              <Image src={littlelemonbookingproject} maxWidth="300px" border='2px' borderColor='#E5EFE7' />
            </div>
          </Box>
          <Box>
            <div data-aos="fade-left">
              <VStack spacing={4} maxWidth="600px">
                <Heading size="md" textAlign={"center"}>
                  Little Lemon Booking Application
                </Heading>
                <Text fontStyle={"italic"} textAlign={"center"}>
                  React, API
                </Text>
                <Text>
                  This project was created during Meta's Coursera Front-End Development course. This website was the culmuniation of the Front-End Development Track.<br /><br />This website showcased implementing a booking application on the Little Lemon Website. This was created with React Components to show an understanding of utilizing React for creating the website. This also features utilzing API calls.<br /><br />Please note: the only functionality working on this website besides the design is the Reserve a Table function.
                </Text>
                <Stack spacing={6} direction={["column", "row"]}>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/seanmilfort/LittleLemon_Booking">View Code</a>
                  </Button>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://main--neon-faloodeh-82f570.netlify.app/">Demo Project</a>
                  </Button>
                </Stack>
              </VStack>
            </div>
          </Box>
        </Stack>

        {/* DJ Website */}
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
          <Box>
            <div data-aos="fade-right">
              <Image src={djwebsitegproject} maxWidth="300px" border='2px' borderColor='#E5EFE7' />
            </div>
          </Box>
          <Box>
            <div data-aos="fade-left">
              <VStack spacing={4} maxWidth="600px">
                <Heading size="md" textAlign={"center"}>
                  DJ Website
                </Heading>
                <Text fontStyle={"italic"} textAlign={"center"}>
                  HTML, CSS, JavaScript
                </Text>
                <Text>
                  This website was created with HTML, CSS and JavaScript. It was created for the purpose of showcasing one of my side projects and hobbies, being a DJ.
                </Text>
                <Stack spacing={6} direction={["column", "row"]}>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/seanmilfort/DJWebsite">View Code</a>
                  </Button>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://djseanzie.club/">Demo Project</a>
                  </Button>
                </Stack>
              </VStack>
            </div>
          </Box>
        </Stack>

        {/* Link Tree v1 */}
        <Stack direction={["column", "row"]} spacing={12} alignItems="center">
          <Box>
            <div data-aos="fade-right">
              <Image src={linktreev1project} maxWidth="300px" border='2px' borderColor='#E5EFE7' />
            </div>
          </Box>
          <Box>
            <div data-aos="fade-left">
              <VStack spacing={4} maxWidth="600px">
                <Heading size="md" textAlign={"center"}>
                  Linktree v1 Clone
                </Heading>
                <Text fontStyle={"italic"} textAlign={"center"}>
                  HTML, CSS, JavaScript
                </Text>
                <Text>
                This project was created with the attempt to make my own version of the current website Linktree. Linktree is a website that allows users to put all their social media links on one page web page. Since that solution is a paid offering and it is just a website, I decided to develop my own. <br /><br />This project is the first iteration of this information. It was created with HTML/CSS and vanilla JS.
                </Text>
                <Stack spacing={6} direction={["column", "row"]}>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/seanmilfort/LinkPage_DJ">View Code</a>
                  </Button>
                  <Button borderColor='#E5EFE7' variant='outline' size='md' _hover={{ color: '#000000', bg: '#E5EFE7' }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://links.djseanzie.club/">Demo Project</a>
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