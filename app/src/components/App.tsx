import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import history from "../history";
import "./App.scss";
import BlogDetail from "../views/blog/BlogDetail";
import BlogList from "../views/blog/BlogList";
import Experience from "../views/experience/Experience";
import NotFound from "../views/NotFound";
import Training from "../views/training/Training";
import Header from "./header/Header";
import Volunteer from "../views/volunteer/Volunteer";

const App: React.FC = (): JSX.Element => {
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
};

export default App;
