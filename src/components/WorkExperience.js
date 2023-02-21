import React from "react";
import { Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ExperienceInfo from "./ExperienceInformation";

const experiences = [
  {
    getImageSrc: () => require("../images/RiteAidLogo.png"),
    company: "Rite Aid",
    companyDates: "(September 2021 - Present)",
    dates: "System Administrator II (September 2021 - Present)",
    description: [
      {detail: "Maintaining AirWatch MDM Environment for 10,000+ devices"},
      {detail: "Developing/Testing New Technologies for Store Environment"},
      {detail: "Developed/Implemented Process to Upgrade Zebra Rugged Devices to newer versions of Android"},
      {detail: "Developed Android/iOS Configurations in Microsoft Intune"},
      {detail: "Implemented BlueFletch Launcher on Zebra Android Devices"} ]
  },
  {
    getImageSrc: () => require("../images/WellSpanHealthLogo.png"),
    company: "WellSpan Health",
    companyDates: "(December 2019 - September 2021)",
    dates: "Systems Administrator (Dec 2019 - September 2021)",
    description: [
      {detail: "Created/Developing Application Packages & Software Installations for mass/minor deployments"},
      {detail: "Creating Technical/Support Documentation for new & existing solutions"},
      {detail: "Evaluating/Designing Technical Solutions to improve End User Workflow"},
      {detail: "Developing/Troubleshooting Mobile Device Management Solutions"},
      {detail: "Maintaining/Improving IT Environment with new Technological Improvements"} ]
  },
  {
    getImageSrc: () => require("../images/BurlingtonStoresLogo.png"),
    company: "Burlington Stores, Inc",
    companyDates: "(April 2015 - November 2019)",
    dates: "Integration Analyst II (November 2017 - November 2019)",
    description: [
      {detail: "Created Installer/Scripting Packages for silent installations for 15,000 Machine (Unix Scripting, PowerShell & Bash)"},
      {detail: "Developed/Maintained the Base Computer Image for 4,000+ machines (Windows/Mac)"},
      {detail: "Created/Edited/Deployed Group Policy 15,000+ active devices"},
      {detail: "Responsible for large-scale Engineering/Design changes to our Mobile Device Management Platform (AirWatch) containing 11,000+ devices (iOS, Android & Windows CE)"},
      {detail: "Evaluated/Met with Senior Business Partners/Vendors on multiple different initiatives"} ]
  }
]

const heading = "Work Experience"

const WorkExperience = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={16}>
        <Heading as='h2' size='xl'>
          {heading}
        </Heading>
        {experiences.map((experience) => (
          <ExperienceInfo
          key={experience.company}
          company={experience.company}
          companyDates={experience.companyDates}
          dates={experience.dates}
          description={experience.description}
          imageSrc={experience.getImageSrc()}
          />
        ))}
      </VStack>
    </FullScreenSection>
  );

export default WorkExperience;