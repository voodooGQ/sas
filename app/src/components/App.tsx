import React from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import history from "../history";
import { setActiveNavItemFromStorage } from "../redux/actions/ui";
import { HeaderState } from "../redux/types";
import "./App.scss";
import BlogDetail from "../views/blog/BlogDetail";
import BlogList from "../views/blog/BlogList";
import Experience from "../views/experience/Experience";
import NotFound from "../views/NotFound";
import Training from "../views/training/Training";
import Header from "./header/Header";
import Volunteer from "../views/volunteer/Volunteer";

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
              <Route path="/" exact component={BlogList} />
              <Route path="/experience" exact component={Experience} />
              <Route path="/training" exact component={Training} />
              <Route path="/volunteer" exact component={Volunteer} />
              <Route path="/blog/:slug" exact component={BlogDetail} />
              <Route path="*" component={NotFound} />
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
