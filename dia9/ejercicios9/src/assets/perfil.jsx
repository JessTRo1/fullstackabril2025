import React from 'react';
import './perfil.css'


const Perfil = ({ nombre, edad }) => {
  return (
    <div className="perfil">
      <h2 className="perfil__title">Perfil de Usuario</h2>
      <p className="perfil__item">Nombre: {nombre}</p>
      <p className="perfil__item">Edad: {edad}</p>
    </div>
  );
};


export default Perfil;