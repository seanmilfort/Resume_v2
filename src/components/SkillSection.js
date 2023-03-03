import React from "react";
import { Heading, Stack, Box, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import SkillSectionInfo from "./SkillSectionInfo";

const skills = [
  {
    category:"Languages",
    description: [
      {item: "React"},
      {item: "JavaScipt"},
      {item: "Swift/Kotlin"},
      {item: "HTML/CSS"},
      {item: "PowerShell"} ]
  },
  {
    category:"Infrastructure Skills",
    description: [
      {item: "OS Management (Windows, macOS, Android, Linux & iOS)"},
      {item: "Mobile Device Management (Workspace ONE & Intune)"},
      {item: "Active Directory & Group Policy Management"},
      {item: "Large Scale Packaging & Deployment"},
      {item: "Microsoft Deployment Toolkit"} ]
  },
  {
    category:"Interpersonal Skills",
    description: [
      {item: "Leadership"},
      {item: "Teamwork"},
      {item: "Technical Documentation"},
      {item: "Customer Service"},
      {item: "Communication"} ]
  }
]

const heading = "Skills"

const SkillSection = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={16}>
        <Heading as='h2' size='xl' textAlign="center">
          {heading}
        </Heading>
        <Stack direction={["column", "row"]} spacing={12} textAlign="center">
        {skills.map((skill) => (
          <Box width="30%">
          <SkillSectionInfo key={skill.category}
          category={skill.category}
          description={skill.description} />
          </Box>
        ))}

      </Stack>
      </VStack>
    </FullScreenSection>
  );

export default SkillSection;