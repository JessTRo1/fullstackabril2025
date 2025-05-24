import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [themeState, setThemeState] = useState({
    theme: "light",
    direction: "dark-transition",
  });

  const toggleTheme = () => {
    setThemeState(prev => {
      if (prev.theme === "light") {
        // Claro -> Oscuro: derecho-a-izquierda 
        return { theme: "dark", direction: "dark-transition" };
      } else {
        // Oscuro -> Claro: izquierda-a-derecha
        return { theme: "light", direction: "light-transition" };
      }
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState.theme,
        direction: themeState.direction,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
