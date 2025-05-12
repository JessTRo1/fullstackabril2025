import { useState } from "react";
import ThemeToggleButton from "./assets/ThemeToggleButton";
import mapImage from "./assets/img/map.jpg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="head">
        <h1 className="head__title">Mapa del Continente - The Witcher</h1>
         <ThemeToggleButton darkMode={darkMode} onToggle={toggleTheme} />
      </header>

      <main className="main">
        <img
          src={mapImage}
          alt="Mapa del continente de The Witcher"
          className="main__mapa"
        />
      </main>
    </div>
  );
}

export default App;
