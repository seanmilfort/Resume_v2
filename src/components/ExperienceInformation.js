import React from "react";
import { VStack, Text, Image, Stack, Box,} from "@chakra-ui/react";
import profilePicture from '../images/seanmilfort_profile.jpg'

const ExperienceInfo = () => (
        <Stack direction={["column", "row"]} spacing={8} alignItems="center">
        <Box>
          <Image src={profilePicture} maxWidth="300px"/>
          </Box>
          <Box>
          <VStack spacing={6} maxWidth="600px">
              <Text text-align="center">text</Text>
              <Text>Filler Text</Text>
              <Text>Fillter Text</Text>
              <Text>Filler Text</Text>
          </VStack>
          </Box>
        </Stack>
  );

  export default ExperienceInfo;
