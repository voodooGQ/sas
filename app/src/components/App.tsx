import React, { useContext } from "react";
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
import ThemeSwitcher from "../components/theme/ThemeSwitcher";
import { ThemeContext } from "../context/ThemeContext";

const App: React.FC = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`body ${theme}`}>
      <Router history={history}>
        <Container className="site">
          <ThemeSwitcher />
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
    </div>
  );
};

export default App;
