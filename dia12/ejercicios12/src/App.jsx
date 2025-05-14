import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('blue');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Estilos oscuros
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });
  const toggleTheme = () => setDarkMode(prev => !prev);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
   
  const baseStyles = {
    button: {
      color: darkMode ? "#fff" : "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "1rem"
    },
    title: {
      color: darkMode ? "#fff" : "blue",
      fontSize: "1.5rem",
      textAlign: "center",
      margin: "20px 0",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
      color: darkMode ? "#fff" : "#000",
      transition: "all 0.3s ease"
    },
    responsiveText: {
      color: windowWidth <= 600 ? (darkMode ? '#ff6b6b' : 'red') : (darkMode ? '#90ee90' : 'green'), 
      fontSize: '1.2rem',
      margin: '20px 0',
      transition: 'color 0.3s ease'
    },
    themeToggle: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: darkMode ? '#fff' : '#1a1a1a',
      color: darkMode ? '#1a1a1a' : '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  };
 
  const specificStyles = {
    greenButton: {
      backgroundColor: "green",
      width: "5vw",
      padding: ".625rem"
    },
    colorToggleButton: {
      backgroundColor: buttonColor,
      marginTop: "20px"
    }
  };

 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "red";
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = "green";
  };

  const toggleColor = () => {
    setButtonColor(prevColor => prevColor === 'blue' ? 'red' : 'blue');
  };

  return (
    <div className="App" style={{ ...baseStyles.container, minHeight: "100vh" }}>
      <button 
        onClick={toggleTheme} 
        style={baseStyles.themeToggle}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <div style={baseStyles.container} className="Nivel1">
        <h1 style={baseStyles.title}>Nivel 1</h1>
        
        <button
          style={{ ...baseStyles.button, ...specificStyles.greenButton }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Presiona aquí
        </button>
        
        <div className='objeto' style={{...baseStyles.container, margin: "0 3rem"}}>
          <h1 style={baseStyles.title}>Título con estilos</h1>
          <button style={{ ...baseStyles.button, ...specificStyles.greenButton }}>
            Botón con estilos
          </button>
        </div>
        
        <button 
          style={{ ...baseStyles.button, ...specificStyles.colorToggleButton }}
          onClick={toggleColor}
        >
          Cambiar Color ({buttonColor})
        </button>
      </div>
      
      <div className="Nivel2"
      style={{ ...baseStyles.container, margin: "0 3rem" }}>
        <h1 style={baseStyles.title}>Nivel 2</h1>
        
        <p style={baseStyles.responsiveText}>
          Ancho de ventana: {windowWidth}px - {windowWidth <= 600 ? 'Móvil' : 'Escritorio'}
        </p>
      
        <button 
          style={{ ...baseStyles.button, ...specificStyles.greenButton }}
          onMouseEnter={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Botón Nivel 2
        </button>
      </div>

    </div>
  );
}

export default App;