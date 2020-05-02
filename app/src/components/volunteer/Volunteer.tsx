import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";
import data from "./volunteer.json";
import "./Volunteer.scss";

interface Props {}

class Volunteer extends React.Component<Props> {
  renderOpenSourceList() {
    return data["open-source-contributions"].map((os) => {
      return (
        <div className="open-source-item">
          <Header
            as="h3"
            inverted
            className="open-source-title"
            size="huge"
            color="purple"
          >
            {os.title} by {os.owner}
          </Header>
          <ul className="open-source-link-list">
            {os.contributions.map((link) => (
              <li>
                <a href={`${os.repo}/${link}`}>
                  {os.repo}/{link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    });
  }

  renderVolunteerList() {
    return data.volunteer.map((v) => {
      return (
        <div className="volunteer-item">
          <Header
            as="h3"
            inverted
            className="volunteer-title"
            size="huge"
            color="blue"
          >
            {v.title} {v.year}
          </Header>
          <p className="volunteer-description">{v.description}</p>
        </div>
      );
    });
  }

  render() {
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
          <Header.Content>Volunteer</Header.Content>
        </Header>
        {this.renderVolunteerList()}
        <Header as="h2" inverted className="open-source-header" size="huge">
          Open Source Contributions
        </Header>
        {this.renderOpenSourceList()}
      </div>
    );
  }
}

export default connect(null, null)(Volunteer);
