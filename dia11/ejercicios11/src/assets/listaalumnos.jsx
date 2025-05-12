import React from 'react';
import './listaalumnos.css';
import Boton from './boton.jsx';
import { useState } from "react";

function ListaAlumnos({ children }) {
     const [isButtonActive, setIsButtonActive] = useState(false)

     const handleButtonToggle = (isActive) => {
        setIsButtonActive(isActive);
    };

  return (
    <div className={`lista-alumnos ${isButtonActive ? 'size' : ''}`}>
      <h2 className='title'>Alumnos registrados</h2>
      <div className="alumnos-container">
        {children}
      </div>
      <Boton className="btn-alumnos" onToggle={handleButtonToggle} />
    </div>
  );
}

export default ListaAlumnos;