import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ExperienceCard.scss";

interface Props {
  title: string;
  imageSrc: string;
  position: string;
  experienceItems: (string | JSX.Element)[];
}

const ExperienceCard: React.FC<Props> = ({
  title,
  imageSrc,
  position,
  experienceItems,
}): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`experience ${theme}`}>
      <div className="experience-card">
        <img className="experience-image" src={imageSrc} alt={title} />
        <h2 className="experience-header">{title} </h2>
        <h3 className="experience-position">{position}</h3>
        <ul className="experience-items">
          {experienceItems.map(
            (item: string | JSX.Element, index: number): JSX.Element => {
              return <li key={index}>{item}</li>;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
