import React from 'react';

type ContextType = {
  theme: 'light' | 'dark',
  settings: { [key: string]: string },
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ContextType>({
  theme: 'light',
  settings: {},
  toggleTheme: () => { },
})
