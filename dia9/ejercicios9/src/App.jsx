import './App.css';
import React from 'react';
import Perfil from './assets/perfil';
import Productos from './assets/productos';

const App = () => {
  return (
    <>
      <div className="perfil__container">
        <Perfil nombre="Juan Pérez" edad={30} />
        <Perfil nombre="María García" edad={25} />
      </div>
      <div className="producto__container">
        <h2 className="producto__title">Lista de productos</h2>
        <Productos nombre="Laptop" precio={1200} />
        <Productos nombre="Teléfono" precio={600} />
        <Productos nombre="Tablet" precio={300} />
      </div>
      <div>
        <h2 className='title'> Hola, {nombre}</h2>
      </div>
    </>
  );
};
export default App
