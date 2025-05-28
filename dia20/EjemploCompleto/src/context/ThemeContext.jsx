import { createContext, useContext, useState, useEffect } from "react";


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);           // HOOK


export const ThemeProvider = ({ children }) => {                  // PROVIDER
 
  const [darkMode, setDarkMode] = useState(() => {
    
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  
  useEffect(() => {                                               // Guarda el tema en localStorage 
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark-mode", darkMode);        // cambia clase global
  }, [darkMode]);

  const toggleTema = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
};
