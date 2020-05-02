import React from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import history from "../history";
import "./App.scss";
import HomePage from "./pages/HomePage";
import Header from "./ui/Header";

interface Props {}

class App extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Router history={history}>
          <Container>
            <Header></Header>
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
          </Container>
        </Router>
      </React.Fragment>
    );
  }
}

export default connect(null, null)(App);
