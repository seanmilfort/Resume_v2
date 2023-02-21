import React from "react";
import { VStack, Text, Image, Stack, Box, UnorderedList, ListItem, Heading, HStack,} from "@chakra-ui/react";

const ExperienceInfo = ({company, description, companyDates, lastPosition, dates, imageSrc}) => {
  return (
        <Stack direction={["column", "row"]} spacing={8} alignItems="center">
        <Box alignItems="center">
          <Image src={imageSrc} maxWidth="300px" alignContent={"center"}/>
          </Box>
          <Box>
          <VStack spacing={4} maxWidth="600px">
              <Stack spacing={1} direction={["column", "row"]}>
                <Heading size="md" textAlign={"center"}>{company}</Heading>
                <Heading size="md" textAlign={"center"} fontStyle={"italic"}>{companyDates}</Heading>
              </Stack>
              <Stack spacing={1} direction={["column", "row"]}>
              <Text fontStyle={"italic"} textAlign={"center"}>{lastPosition}</Text>
              <Text fontStyle={"italic"} textAlign={"center"}>{dates}</Text>
              </Stack>
              <UnorderedList>
               {description.map((descriptionDetail) => (
                <ListItem key={descriptionDetail.detail}  marginLeft={"40px"} >{descriptionDetail.detail}</ListItem>
               ))}
              </UnorderedList>
          </VStack>
          </Box>
        </Stack>
  );
};

  export default ExperienceInfo;