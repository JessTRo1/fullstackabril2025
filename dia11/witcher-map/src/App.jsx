import { useState, useEffect } from "react";
import ThemeToggleButton from "./assets/ThemeToggleButton";
import MainMap from "./assets/mainmap";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });
  const [selectedLocation, setSelectedLocation] = useState(() => {
    return localStorage.getItem("selectedLocation") || null;
  });
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    localStorage.setItem("selectedLocation", location);
  };
  const toggleTheme = () => setDarkMode(prev => !prev);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleMainClick = () => {
    setSelectedLocation(null);
  };
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="head">
        <h1 className="head__title">The Witcher - The Continent Map</h1>
        <ThemeToggleButton
          darkMode={darkMode}
          onToggle={toggleTheme}
        />
      </header>

      <main className="main" onClick={handleMainClick}>
        <div onClick={(e) => e.stopPropagation()}>
          <MainMap selectedLocation={selectedLocation} />
        </div>
        <aside className="main__aside" onClick={(e) => e.stopPropagation()}>
          <p className="main__aside-location" onClick={() => handleLocationChange("kaerMorhen")}>Kaer Morhen</p>
          <p className="main__aside-location" onClick={() => handleLocationChange("novigrad")}>Novigrad</p>
          <p className="main__aside-location" onClick={() => handleLocationChange("skellige")}>Skellige</p>
          <p className="main__aside-location" onClick={() => handleLocationChange("vizima")}>Vizima</p>
          <p className="main__aside-location" onClick={() => handleLocationChange("toussaint")}>Toussaint</p>
        </aside>

      </main>
    </div>
  );
}

export default App;
