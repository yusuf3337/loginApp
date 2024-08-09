// TabBarVisibilityContext.js
import React, { createContext, useContext, useState } from 'react';

const TabBarVisibilityContext = createContext();

export const useTabBarVisibility = () => useContext(TabBarVisibilityContext);

export const TabBarVisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <TabBarVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
};
