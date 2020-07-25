import React from "react";
import { Header } from "semantic-ui-react";
import SkillsList from "./SkillsList";

interface Props {
  title: string;
  skills: { name: string; image: string }[];
}

const SkillsSection: React.FC<Props> = ({ title, skills }): JSX.Element => {
  return (
    <div className="skills-section">
      <Header inverted as="h3">
        {title}
      </Header>
      <SkillsList list={skills} />
    </div>
  );
};

export default SkillsSection;
