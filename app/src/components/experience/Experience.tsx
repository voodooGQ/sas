import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";

interface Props {}

class Experience extends React.Component<Props> {
  render() {
    return (
      <Header as="h1" textAlign="center" icon inverted>
        <Icon name="briefcase" circular inverted />
        <Header.Content>Experience</Header.Content>
      </Header>
    );
  }
}

export default connect(null, null)(Experience);
