import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  const [fontSize, setFontSize] = useState("medium");

  const switchTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

   const updateFontSize = (size) => {
        setFontSize(size);
    };

  return <ThemeContext.Provider
   value={{
        theme,
        fontSize,
        switchTheme,
        updateFontSize,
      }}
    >
      {children}
   </ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return context;
}

export default ThemeProvider;
