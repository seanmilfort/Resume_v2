import React from "react";
import { Heading, VStack, HStack, Text, Box, Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faNewspaper } from "@fortawesome/free-solid-svg-icons"
import {
    faXTwitter,
    faLinkedin,
    faInstagram,
    faYoutube,
    faTiktok,
    faGithub,
    faMastodon,
    faThreads,
    faMedium
  } from "@fortawesome/free-brands-svg-icons";

  const socialsTop = [
    {
      icon: faXTwitter,
      url: "https://twitter.com/seanmilfort",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/seanmilfort/",
    },
    {
      icon: faThreads,
      url: "https://www.threads.net/@seanmilfort/",
    },
    {
      icon: faYoutube,
      url: "https://www.youtube.com/@seanmilfort",
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@seanmilfort",
    }
  ];

  const socialsBottom = [
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/seanmilfort",
    },
    {
      icon: faMedium,
      url: "https://www.linkedin.com/in/seanmilfort",
    },
    {
      icon: faNewspaper,
      url: "https://seanmilfort.substack.com",
    },
    {
      icon: faMastodon,
      url: "https://mastodon.social/@seanmilfort",
    },
    {
        icon: faGithub,
        url: "https://github.com/seanmilfort",
      }
  ];

const Footer = () => {
    return (
      <div id="ContactMe">
<VStack backgroundColor="#000000" color="#E5EFE7" >
    <VStack alignItems={"center"} paddingTop={"40px"} paddingBottom={"100px"} maxWidth="1000px" width="85%" minHeight="40vh" justifyContent={"center"} textAlign={"center"}>
        <div data-aos="fade-up">
        <VStack spacing={12}>
        <Heading as="h2" size="xl">Let's Keep In Touch</Heading>
        <Stack direction={["column", "column", "row"]} spacing={4} alignItems="center">
          <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
              {socialsTop.map(socialMediaLinks => {
                  return <Box key={socialMediaLinks.url}><a rel="me" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
              })}
          </HStack>
          <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
              {socialsBottom.map(socialMediaLinks => {
                  return <Box key={socialMediaLinks.url}><a rel="me" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
              })}
          </HStack>
        </Stack>
        <Text>Copyright &copy; 2023 Sean Milfort. All Rights Reserved.</Text>
        </VStack>
        </div>
    </VStack>
</VStack>
</div>
    )
};

export default Footer;
