import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, ...boxProps }) => {
  return (
    <VStack backgroundColor="#000000" color="#E5EFE7" >
      <VStack paddingTop={"40px"} paddingBottom={"100px"} maxWidth="1000px" width="85%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
