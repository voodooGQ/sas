import React from "react";
import { connect } from "react-redux";

interface Props {}

class App extends React.Component<Props> {
  render(): JSX.Element {
    return <div>App</div>;
  }
}

export default connect(null, null)(App);
