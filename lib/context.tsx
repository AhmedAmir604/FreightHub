"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context data
interface MenuContextType {
  menuActive: boolean;
  toggleMenu: () => void;
}

interface Props {
  children: React.ReactNode;
}

// Create the context
export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

// Create a provider component
export const MenuProvider = ({ children }: Props) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <MenuContext.Provider value={{ menuActive, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook for consuming the context
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};
