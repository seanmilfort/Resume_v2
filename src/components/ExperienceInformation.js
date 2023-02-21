import React from "react";
import { VStack, Text, Image, Stack, Box, UnorderedList, ListItem, Heading, HStack,} from "@chakra-ui/react";

const ExperienceInfo = ({company, description, companyDates, dates, imageSrc}) => {
  return (
        <Stack direction={["column", "row"]} spacing={8} alignItems="center">
        <Box alignItems="center">
          <Image src={imageSrc} maxWidth="300px" alignContent={"center"}/>
          </Box>
          <Box>
          <VStack spacing={4} maxWidth="600px">
              <HStack>
                <Heading size="md" textAlign={"center"}>{company}</Heading>
                <Heading size="md" textAlign={"center"} fontStyle={"italic"}>{companyDates}</Heading></HStack>
              <Text fontStyle={"italic"} textAlign={"center"}>{dates}</Text>
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