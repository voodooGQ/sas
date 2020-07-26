import React, { useContext, useEffect } from "react";
import { Header, Icon } from "semantic-ui-react";
import data from "./volunteer.json";
import OpenSourceItem from "../../components/volunteer/OpenSourceItem";
import VolunteerItem from "../../components/volunteer/VolunteerItem";
import "./Volunteer.scss";
import { ActiveNavigationContext } from "../../context/ActiveNavigationContext";

const Volunteer: React.FC = (): JSX.Element => {
  const { toggleActive } = useContext(ActiveNavigationContext);

  useEffect(() => {
    toggleActive("volunteer");
  }, [toggleActive]);

  return (
    <div className="volunteer">
      <Header
        as="h1"
        textAlign="center"
        icon
        inverted
        size="huge"
        className="page-header"
      >
        <Icon name="handshake outline" circular inverted color="blue" />
        <Header.Content className="page-header-content">
          Volunteer
        </Header.Content>
      </Header>
      {data.volunteer.map((v, i) => {
        return (
          <VolunteerItem
            title={v.title}
            key={v.title + i}
            year={v.year}
            description={v.description}
          />
        );
      })}
      <Header as="h2" inverted className="open-source-header" size="huge">
        Open Source Contributions
      </Header>
      {data["open-source-contributions"].map((os) => {
        return (
          <OpenSourceItem
            title={os.title}
            key={os.title}
            owner={os.owner}
            contributions={os.contributions}
            repo={os.repo}
          />
        );
      })}
    </div>
  );
};

export default Volunteer;
