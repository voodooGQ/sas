import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const settings: { light: {}; dark: {} } = {
  light: {
    background: "#f0f0f0",
    fontColor: "#444444",
    inputBackgroundColor: "#ffffff",
    cardBackground: "#ffffff",
  },
  dark: {
    background: "#222222",
    fontColor: "#f0f0f0",
    inputBackgroundColor: "grey",
    cardBackground: "#1b1c1d",
  },
};

export const ThemeProvider: React.FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("ui.theme") as "light" | "dark") || "light"
  );

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    localStorage.setItem("ui.theme", val);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, settings: settings[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
