import React from 'react';

type ContextType = {
  active: string,
  toggleActive: (navItem: string) => void
}

export const ActiveNavigationContext = React.createContext<ContextType>({
  active: 'blog',
  toggleActive: (navItem: string) => { }
})
