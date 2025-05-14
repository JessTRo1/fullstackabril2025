import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('blue');
  
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "red";
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = "green";
  };

  const toggleColor = () => {
    setButtonColor(prevColor => prevColor === 'blue' ? 'red' : 'blue');
  };

  const styles = {
    titulo: {
      color: "blue",
      fontSize: "1.5rem",
      textAlign: "center",
      margin: "20px 0",
    }
  };

  const boton = {
    backgroundColor: "green",
    color: "white",
    padding: ".625rem",
    transition: "background-color 0.3s ease",
    border: "none",
  };

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }} className="Nivel1">
        <h1 style={{ color: "blue", fontSize: "1.5rem" }}>Título Nivel 1</h1>
        <button
          style={{width: "5vw", backgroundColor: "green", color: "white", padding: ".625rem", transition: "background-color 0.3s ease" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Presiona aquí
        </button>
        <div className='objeto' style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "0 3rem"}}>
          <h1 style={styles.titulo}>Título con estilos</h1>
          <button style={boton}>Botón con estilos</button>
        </div>
        <button 
          style={{
            backgroundColor: buttonColor,
            color: "white",
            padding: "10px 20px",
            marginTop: "20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
          onClick={toggleColor}
        >
          Cambiar Color ({buttonColor})
        </button>
      </div>
      <div className="Nivel2"></div>
      
      <div className="Nivel3"></div>
    </div>
  );
}

export default App;