import React from "react";
import { ThemeProvider } from "./ThemeContext";
import AppContent from "./AppContent";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
