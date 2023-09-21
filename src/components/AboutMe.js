import React from "react";
import { Heading, VStack, Text, Image, Stack, Box, ListItem, UnorderedList,} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePicture from '../images/seanmilfort_profile.jpg'

const heading = "About Me";
const aboutMe1 = "Hello! Welcome to my page! If you are new here, you may have found this page from either my resume/professional links or from my social media/content creation paths. Either way that you got here you are more than welcome!";
const aboutMe2 = "I am an individual with a passion for technology. I take this passion for technology and apply it to the many parts of my life professionally and leisurely. The top two parts of technology that I enjoy are consumer electronics, specifically mobile devices and smart home automation, and software development, specifically front-end and mobile development. I am constantly getting myself into the latest tech and love showing the information to anyone willing to listen. My love for constantly learning about technology has brought me to the path of currently pursuing a PhD in Computer Science.";
const aboutMe3 = "Professionally, I'm currently working as a System Administrator II at Rite Aid. With this role, I get to do a ton of Infrastructure work with our systems and have been specializing in Mobile Device Management (Android/iOS) on this front. I have also been starting to help out with our Software Development teams and starting to write code for them on the various projects that happen internally. On another professional front, I have also begun teaching at the college level. This desire to share my knowledge has brought me to this path.";
const aboutMe4 = "Leisurely, I run a lot of side projects. Following my social media is the best way to keep up to date with all the things that I'm working on, but in case you were curious, here is a list of the side things that I do run:";
const aboutMe5 = "Feel free to follow any of these pages to get a live look into the things that I'm learning and passionate about!";
const aboutMe6 = "Besides my passion for technology, I’m also involved in some other side projects (I like to stay busy!). I have a passion for music that comes out as a DJ, specializing in Dance Music (EDM), and a passion for gaming that I bring out with streaming a couple of nights a week.";
const aboutMe7 = "I'm a hard-working individual who likes to stay busy and see how much I can handle and learn. As long as I'm experiencing new things, I am feeling fulfilled.";

const LandingSection = () => (
  <div id="AboutMe">
  <FullScreenSection>
    <VStack spacing={16}>
      <div data-aos="fade-up">
        <Heading as="h2" size="xl">
          {heading}
        </Heading>
      </div>
      <Stack direction={["column", "row"]} spacing={8} alignItems={"center"}>
        <Box>
          <div data-aos="fade-right">
            <VStack spacing={4} maxWidth="500px" text-align="center">
              <Text>{aboutMe1}</Text>
              <Text>{aboutMe2}</Text>
              <Text>{aboutMe3}</Text>
              <Text>
                {aboutMe4}
                <UnorderedList mt={2}>
                    <ListItem><u><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@seanmilfort">YouTube Page</a></u></ListItem>
                    <ListItem><u><a target="_blank" rel="noopener noreferrer" href="https://news.seanmilfort.com/">Newsletter</a></u></ListItem>
                    <ListItem><u><a target="_blank" rel="noopener noreferrer" href="https://blog.seanmilfort.com/">Blog</a></u></ListItem>
                </UnorderedList>
              </Text>
              <Text>{aboutMe5}</Text>
              <Text>{aboutMe6}</Text>
              <Text>{aboutMe7}</Text>
            </VStack>
          </div>
        </Box>
        <Box>
          <div data-aos="fade-left" >
            <Image src={profilePicture} maxWidth="500px" margin="auto"/>
          </div>
        </Box>
      </Stack>
    </VStack>
  </FullScreenSection>
  </div>
);

export default LandingSection;
