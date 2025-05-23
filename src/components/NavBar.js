import React from "react";
import { useState } from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";

import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} toggle={toggle} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, toggle, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}  >
      <Text display="block" onClick={toggle} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({isOpen, toggle }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
        
      >
        <MenuItem to="#Home" onClick={toggle}>Home</MenuItem>
        <MenuItem to="#AboutMe" onClick={toggle}>About Me</MenuItem>
        <MenuItem to="#WorkExperience" onClick={toggle}>Work Experience</MenuItem>
        <MenuItem to="#Education" onClick={toggle}>Education</MenuItem>
        <MenuItem to="#Skills" onClick={toggle}>Skills</MenuItem>
        <MenuItem to="#Projects" onClick={toggle}>Projects</MenuItem>
        <MenuItem to="#ContactMe" onClick={toggle} isLast>
          Contact Me
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      position={"fixed"}
      wrap="wrap"
      w="100%"
      mb={4}
      p={4}
      bg={["#000000"]}
      borderColor={["#FFFFFF"]}
      borderBottom={"4px"}
      color={["#E5EFE7", "#E5EFE7", "solid", "solid"]}
      zIndex={100}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;