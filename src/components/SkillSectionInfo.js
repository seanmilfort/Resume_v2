import React from "react";
import { VStack, UnorderedList, ListItem, Heading} from "@chakra-ui/react";

const SkillSectionInfo = ({category, description, aos}) => {
  return (
    <div data-aos={aos}>
          <VStack spacing={6} maxWidth="600px">
            <Heading size="md">{category}</Heading>
              <UnorderedList spacing={4}>
               {description.map((descriptionDetail) => (
                <ListItem listStyleType='none' key={descriptionDetail.item} >{descriptionDetail.item}</ListItem>
               ))}
              </UnorderedList>
          </VStack>
          </div>
  );
};

  export default SkillSectionInfo;