import React from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import history from "../history";
import { setActiveNavItemFromStorage } from "../redux/actions/ui";
import { HeaderState } from "../redux/types";
import "./App.scss";
import Experience from "./experience/Experience";
import Home from "./home/Home";
import Header from "./ui/Header";

interface Props {
  header: HeaderState;
  setActiveNavItemFromStorage: () => Promise<void>;
}

class App extends React.Component<Props> {
  public componentDidMount = () => {
    if (!this.props.header.active) {
      this.props.setActiveNavItemFromStorage();
    }
  };

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Router history={history}>
          <Container className="site">
            <Header></Header>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/experience" exact component={Experience} />
            </Switch>
          </Container>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: { header: HeaderState }) => {
  return { header: state.header };
};

export default connect(mapStateToProps, { setActiveNavItemFromStorage })(App);
