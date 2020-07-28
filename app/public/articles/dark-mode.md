Dark mode! Technically "Light" mode since the site started off in dark mode, but you get the idea. I wanted to jump on the bandwaggon and add the ability to switch from light to dark mode on my site. Here's how I did it:

### ThemeContext

The ThemeContext is created to define the shape of the Context we're creating. In this file we create the context and set the default value of our `theme` and `toggleTheme` parameters.

`/src/context/ThemeContext.ts`

```typescript
import React from "react";

type ContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
  theme: "dark",
  toggleTheme: () => {},
});
```

### Data Provider

A Data Provider higher order component is created that will provide the value for our current theme setting as well as a function `toggleTheme` that will allows us to toggle the value from light mode to dark mode. The initial state is determined based on the localStorage value for `ui.theme` which is set in the `toggleTheme` function call. If no initial state is found default the user to `dark` mode.

`/src/providers/themeProvider.tsx`

```typescript
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider: React.FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("ui.theme") as "light" | "dark") || "dark"
  );

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    localStorage.setItem("ui.theme", val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

## Index

Now we need to wrap our Application with the ThemeProvider to make the values accessible to other components.

`/src/index.tsx`

```typescript
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "./providers/themeProvider";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```

## ThemeSwitcher

A theme switcher component is created that utilizes our `ThemeContext` to determine the current value of the theme and switch from 'light' to 'dark' mode.

`/src/components/theme/ThemeSwitcher.tsx`

```typescript
import React, { useContext } from "react";
import { Icon, Checkbox } from "semantic-ui-react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {}

const ThemeSwitcher: React.FC<Props> = (): JSX.Element => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center" }}>
      <Icon
        name="sun outline"
        style={{ position: "relative", top: "-5px", left: "-5px" }}
      />
      <Checkbox onChange={toggleTheme} toggle checked={theme === "dark"} />
      <Icon
        name="moon outline"
        style={{ position: "relative", top: "-5px", left: "10px" }}
      />
    </div>
  );
};

export default ThemeSwitcher;
```

## Utilizing in other components

To utilize simply import the `ThemeContext` and `useContext` hook from React to deconstruct the values.

```typescript
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const MyComponent: React.FC = (): JSX.Element => {
  // Get your values from the hook
  const { theme } = useContext(ThemeContext);

  if (theme === "dark") {
    // do stuff
  }
};

export default MyComponent;
```
