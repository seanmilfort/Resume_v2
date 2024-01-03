import React from "react";
import { Heading, VStack, Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ExperienceInfo from "./ExperienceInformation";
import resume from '../files/Sean_Milfort_Resume.pdf'

const experiences = [
  {
    getImageSrc: () => require("../images/GwyneddMercyUniversity_logo.png"),
    company: "Gwynedd Mercy University",
    companyDates: "(August 2023 - Present)",
    lastPosition: "Lecturer",
    dates: "(August 2023 - Present)",
    description: [
      {detail: "Spring 2024: CIS 424 – Web Design II"},
      {detail: "Fall 2023: CIS 420 - Mobile Application Development"}
    ]
  },
  {
    getImageSrc: () => require("../images/RiteAidLogo.png"),
    company: "Rite Aid",
    companyDates: "(Sep 2021 - Present)",
    lastPosition: "System Administrator II",
    dates: "(Sep 2021 - Present)",
    description: [
      {detail: "Maintaining Workspace ONE UEM MDM Environment for 8,000+ devices (iOS/Android)"},
      {detail: "Developing/Testing New Technologies for Store Environment"},
      {detail: "Developed/Implemented Process to Upgrade Zebra Rugged Devices to newer versions of Android (Android 8 -> Android 10 -> Android 11)"},
      {detail: "Developed Android/iOS Configurations in Microsoft Intune"},
      {detail: "Implemented BlueFletch Launcher on Zebra Android Devices"},
      {detail: "Assisted Software Development Team with Maintaining Elixir Website: Updated HTML/CSS/JS Code & Made Changes to CMS Platform Modules"} ]
  },
  {
    getImageSrc: () => require("../images/WellSpanHealthLogo.png"),
    company: "WellSpan Health",
    companyDates: "(Dec 2019 - Sep 2021)",
    lastPosition: "Systems Administrator",
    dates: "(Dec 2019 - Sep 2021)",
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
    companyDates: "(Apr 2015 - Nov 2019)",
    lastPosition: "Integration Analyst II",
    dates: "(Nov 2017 - Nov 2019)",
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
<div id="WorkExperience">
    <FullScreenSection>
      <VStack spacing={16} textAlign="center">
      <div data-aos="fade-up" >
      <VStack spacing={4}>
        <Heading as='h2' size='xl'>
          {heading}
        </Heading>
        <Text>My complete work history is available at my <u><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/seanmilfort">LinkedIn</a></u> or feel free to download my <u><a href={resume} rel="noopener noreferrer" target="_blank">resume</a></u>.</Text>
        </VStack>
        </div>
        {experiences.map((experience) => (
          <ExperienceInfo
          key={experience.company}
          company={experience.company}
          companyDates={experience.companyDates}
          lastPosition={experience.lastPosition}
          dates={experience.dates}
          description={experience.description}
          imageSrc={experience.getImageSrc()}
          />
        ))}
      </VStack>
    </FullScreenSection>
    </div>
  );

export default WorkExperience;