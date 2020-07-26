import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ActiveNavigationProvider } from "./providers/activeNavigationProvider";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <ActiveNavigationProvider>
    <App />
  </ActiveNavigationProvider>,
  document.getElementById("root")
);
