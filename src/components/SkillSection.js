import React from "react";
import { Heading, Stack, Box, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import SkillSectionInfo from "./SkillSectionInfo";

const skills = [
  {
    category:"Languages",
    aos: "fade-left",
    description: [
      {item: "React Native"},
      {item: "React/JavaScipt"},
      {item: "Swift/Kotlin"},
      {item: "HTML/CSS"},
      {item: "PowerShell"} ]
  },
  {
    category:"Infrastructure Skills",
    aos: "fade-up",
    description: [
      {item: "OS Management (Windows, macOS, Android, Linux & iOS)"},
      {item: "Mobile Device Management (Workspace ONE & Intune)"},
      {item: "Active Directory & Group Policy Management"},
      {item: "Large Scale Packaging & Deployment"},
      {item: "Microsoft Deployment Toolkit"} ]
  },
  {
    category:"Interpersonal Skills",
    aos: "fade-right",
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
  <div id="Skills">
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={16}>
      <div data-aos="fade-up">
        <Heading as='h2' size='xl' textAlign="center">
          {heading}
        </Heading>
        </div>
        <Stack direction={["column", "row"]} spacing={12} textAlign="center" alignItems={"center"}>
        {skills.map((skill) => (
          <Box width="30%">
          <SkillSectionInfo key={skill.category}
          category={skill.category}
          aos={skill.aos}
          description={skill.description} />
          </Box>
        ))}

      </Stack>
      </VStack>
    </FullScreenSection>
    </div>
  );

export default SkillSection;