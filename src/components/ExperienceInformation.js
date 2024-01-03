import React from "react";
import {VStack, Text, Image, Stack, Box, UnorderedList, ListItem, Heading} from "@chakra-ui/react";

const ExperienceInfo = ({company, description, companyDates, lastPosition, dates, imageSrc}) => {
  return (
    <Stack direction={["column", "column", "column", "row"]} spacing={12} alignItems="center" width="100%">
      <Box>
        <div data-aos="fade-right">
          <Image src={imageSrc} maxWidth="300px" />
        </div>
      </Box>
      <Box width="100%"> 
        <div data-aos="fade-left">
          <VStack spacing={4} maxWidth="600px">
            <Stack spacing={1} direction={["column", "row"]} textAlign={"center"}>
              <Heading size="md">
                {company}
              </Heading>
              <Heading size="md"fontStyle={"italic"}>
                {companyDates}
              </Heading>
            </Stack>
            <Stack spacing={1} direction={["column", "row"]} textAlign={"center"}>
              <Text fontStyle={"italic"} >
                {lastPosition}
              </Text>
              <Text fontStyle={"italic"}>
                {dates}
              </Text>
            </Stack>
            <VStack textAlign="start">
            <UnorderedList marginLeft={"40px"} >
              {description.map((descriptionDetail) => (
                <ListItem key={descriptionDetail.detail} >
                  {descriptionDetail.detail}
                </ListItem>
              ))}
            </UnorderedList>
            </VStack>
          </VStack>
        </div>
      </Box>
    </Stack>
  );
};

export default ExperienceInfo;
