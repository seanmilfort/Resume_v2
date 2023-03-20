import React from "react";
import { Box, Image } from "@chakra-ui/react";
import textLogo from '../images/MainLogoWhite.png'

export default function Logo(props) {
  return (
    <Box {...props}>
        <Image src={textLogo}/>
    </Box>
  );
}