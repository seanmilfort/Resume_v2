import * as React from "react";
import { VStack } from "@chakra-ui/react";

const breakpoints = {  sm: '0px',
md: '700px',
lg: 'null',
xl: 'null',
'2xl': 'null'}

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, ...boxProps }) => {
  return (
    <VStack backgroundColor="#000000" color="#E5EFE7"
    >
      <VStack maxWidth="1000px" width="85%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
