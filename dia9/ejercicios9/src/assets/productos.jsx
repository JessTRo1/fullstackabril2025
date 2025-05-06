import React from 'react';
import './productos.css'

const Productos = ({ nombre, precio }) => {
    return (
      <ul className='producto__list'>
        <li className='producto__item'>Nombre: {nombre}</li>
        <li className='producto__item'>Precio: {precio}€</li>
      </ul>
    );
  };
  
export default Productos;