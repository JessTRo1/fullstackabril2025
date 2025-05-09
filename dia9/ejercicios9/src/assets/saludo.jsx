import React from 'react';
import './saludo.css';

const Saludo = ({ nombre }) => {
  return <h2 className="title">Que pasa, {nombre}!</h2>;
};

export default Saludo;
