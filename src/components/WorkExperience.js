import React from "react";
import { Heading, VStack, Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ExperienceInfo from "./ExperienceInformation";
import resume from '../files/Sean_Milfort_Resume_NoEmail.pdf'

const experiences = [
  {
    getImageSrc: () => require("../images/RiteAidLogo.png"),
    company: "Rite Aid",
    companyDates: "(Sep 2021 - Present)",
    lastPosition: "System Administrator II",
    dates: "(Sep 2021 - Present)",
    description: [
      {detail: "Led New Configurations and Implementation for Workspace ONE UEM MDM Environment/Configurations for 8,000+ devices (iOS/Android)"},
      {detail: "Streamlined Device Configuration for Android/iOS/macOS devices to cut deployment time down by 30% to improve deployment and configuration efficiency"},
      {detail: "Upgraded Android Zebra Handhelds from Android 8 to Android 13 – Multi-year Initiative"},
      {detail: "Developed/Implemented Configurations and Builds for Android/iOS/macOS Configurations via Microsoft Intune"},
      {detail: "Implemented BlueFletch Suite on Zebra Android Devices to improve productivity/security on device"},
      {detail: "Updated/Implemented New Code for HTML/CSS/JS Code & Made Changes to CMS Platform Modules on Company Website"} ]
  },
  {
    getImageSrc: () => require("../images/GwyneddMercyUniversity_logo_new.png"),
    company: "Gwynedd Mercy University",
    companyDates: "(August 2023 - Present)",
    lastPosition: "Adjunct Faculty",
    dates: "(August 2023 - Present)",
    description: [
      {detail: "Spring 2025: CIS 420 - Mobile Application Development"},
      {detail: "Fall 2024: CIS - Introduction to Desktop Computing, CIS 114 – Web Design I"},
      {detail: "Spring 2024: CIS 424 – Web Design II"},
      {detail: "Fall 2023: CIS 420 - Mobile Application Development"}
    ]
  },
  {
    getImageSrc: () => require("../images/WellSpanHealthLogo.png"),
    company: "WellSpan Health",
    companyDates: "(Dec 2019 - Sep 2021)",
    lastPosition: "Systems Administrator",
    dates: "(Dec 2019 - Sep 2021)",
    description: [
      {detail: "Creating/Developing Application Packages & Software Installations for mass deployments - (Windows, macOS, Android)"},
      {detail: "Creating Technical/Support Documentation for new & existing solutions"},
      {detail: "Designed Technical Solutions to improve End User Workflow"},
      {detail: "Developing/Troubleshooting Mobile Device Management Solutions (AirWatch)"},
      {detail: "Maintaining/Improving IT Environment with new Technological Improvements"} ]
  },
  {
    getImageSrc: () => require("../images/BurlingtonStoresLogo.png"),
    company: "Burlington Stores, Inc",
    companyDates: "(Apr 2015 - Nov 2019)",
    lastPosition: "Integration Analyst II",
    dates: "(Nov 2017 - Nov 2019)",
    description: [
      {detail: "Responsible for large-scale Engineering/Design changes to our Mobile Device Management Platform (AirWatch) containing 11,000+ devices (iOS, Android & Windows CE)"},
      {detail: "Created Installer/Scripting Packages for silent installations for 15,000 Machine utilizing IBM BigFix (Unix Scripting, PowerShell & Bash)"},
      {detail: "Developed/Maintained the Base Computer Image for 4,000+ machines (Windows/Mac)"},
      {detail: "Created/Edited/Deployed Active Directory Group Policy 15,000+ active devices"},
      {detail: "Evaluated/Met with Senior Business Partners/Vendors on multiple different initiatives to improve customer/employee experience and workflow"} ]
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