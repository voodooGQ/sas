import React, { useState } from "react";
import { ActiveNavigationContext } from "../context/ActiveNavigationContext";

export const ActiveNavigationProvider: React.FC = ({
  children,
}): JSX.Element => {
  const [active, setActive] = useState<string>(
    localStorage.getItem("ui.header.active") || "blog"
  );

  const toggleActive = (navItem: string): void => {
    setActive(navItem);
    localStorage.setItem("ui.header.active", navItem);
  };

  return (
    <ActiveNavigationContext.Provider value={{ active, toggleActive }}>
      {children}
    </ActiveNavigationContext.Provider>
  );
};

export default ActiveNavigationProvider;
