import React from "react";
import {VStack, Text, Image, Stack, Box, UnorderedList, ListItem, Heading} from "@chakra-ui/react";

const ExperienceInfo = ({company, description, companyDates, lastPosition, dates, imageSrc}) => {
  return (
    <Stack direction={["column", "column", "column", "row"]} spacing={12} alignItems="center">
      <Box>
        <div data-aos="fade-right">
          <Image src={imageSrc} maxWidth="300px" />
        </div>
      </Box>
      <Box>
        <div data-aos="fade-left">
          <VStack spacing={4} maxWidth="600px">
            <Stack spacing={1} direction={["column", "row"]}>
              <Heading size="md" textAlign={"center"}>
                {company}
              </Heading>
              <Heading size="md" textAlign={"center"} fontStyle={"italic"}>
                {companyDates}
              </Heading>
            </Stack>
            <Stack spacing={1} direction={["column", "row"]}>
              <Text fontStyle={"italic"} textAlign={"center"}>
                {lastPosition}
              </Text>
              <Text fontStyle={"italic"} textAlign={"center"}>
                {dates}
              </Text>
            </Stack>
            <UnorderedList>
              {description.map((descriptionDetail) => (
                <ListItem key={descriptionDetail.detail} textAlign="start" marginLeft={"40px"}>
                  {descriptionDetail.detail}
                </ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </div>
      </Box>
    </Stack>
  );
};

export default ExperienceInfo;
