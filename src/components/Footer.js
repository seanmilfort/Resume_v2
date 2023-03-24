import React from "react";
import { Heading, VStack, HStack, Text, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    faTwitter,
    faLinkedin,
    faInstagram,
    faYoutube,
    faTiktok,
    faGithub,
    faMastodon
  } from "@fortawesome/free-brands-svg-icons";

  const socials = [
    {
      icon: faTwitter,
      url: "https://twitter.com/seanmilfort",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/seanmilfort/",
    },
    {
      icon: faYoutube,
      url: "https://www.youtube.com/@seanmilfort",
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@seanmilfort",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/seanmilfort",
    },
    {
      icon: faMastodon,
      url: "https://techhub.social/@seanmilfort",
    },
    {
        icon: faGithub,
        url: "https://github.com/seanmilfort",
      },
    {
        icon: faEnvelope,
        url: "mailto: seanmilfort@me.com",
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
        <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a rel="me" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
            })}
        </HStack>
        <Text>Copyright &copy; 2023 Sean Milfort. All Rights Reserved.</Text>
        </VStack>
        </div>
    </VStack>
</VStack>
</div>
    )
};

export default Footer;