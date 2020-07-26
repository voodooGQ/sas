import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ActiveNavigationProvider } from "./providers/activeNavigationProvider";
import { ThemeProvider } from "./providers/themeProvider";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <ThemeProvider>
    <ActiveNavigationProvider>
      <App />
    </ActiveNavigationProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
