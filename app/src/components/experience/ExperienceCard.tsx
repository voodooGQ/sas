import React from "react";

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
  return (
    <div className="experience">
      <div className="experience-card">
        <img className="experience-image" src={imageSrc} alt={title} />
        <h2 className="experience-header">{title} </h2>
        <h3 className="experience-position">{position}</h3>
        <ul className="experience-items">
          {experienceItems.map(
            (item: string | JSX.Element): JSX.Element => {
              return <li>{item}</li>;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
