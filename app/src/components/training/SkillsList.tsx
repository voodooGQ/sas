import React from "react";
import { Image } from "semantic-ui-react";

interface Props {
  list: { name: string; image: string }[];
}

const SkillsList: React.FC<Props> = ({ list }): JSX.Element => {
  const items = list.map((skill: { name: string; image: string }) => {
    const nameToLower = skill.name.toLowerCase().replace(" ", "");
    return (
      <li>
        <span className={`skill ${nameToLower}`}>
          <Image src={skill.image} alt={skill.name} />
          <span className="skill-text">{skill.name}</span>
        </span>
      </li>
    );
  });

  return <ul className="skills-list">{items}</ul>;
};

export default SkillsList;
