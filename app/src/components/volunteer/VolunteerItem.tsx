import React from "react";
import { Header } from "semantic-ui-react";

interface Props {
  title: string;
  year: string;
  description: string;
}

const VolunteerItem: React.FC<Props> = ({
  title,
  year,
  description,
}): JSX.Element => {
  return (
    <div className="volunteer-item">
      <Header
        as="h3"
        inverted
        className="volunteer-title"
        size="huge"
        color="blue"
      >
        {title} {year}
      </Header>
      <p className="volunteer-description">{description}</p>
    </div>
  );
};

export default VolunteerItem;
