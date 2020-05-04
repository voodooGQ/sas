import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";

interface Props {}

class NotFound extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header
          as="h1"
          textAlign="center"
          icon
          inverted
          size="huge"
          className="page-header"
        >
          <Icon name="exclamation circle" circular inverted color="red" />
          <Header.Content className="page-header-content">
            404 - Not Found
          </Header.Content>
        </Header>
      </React.Fragment>
    );
  }
}

export default connect(null, null)(NotFound);
