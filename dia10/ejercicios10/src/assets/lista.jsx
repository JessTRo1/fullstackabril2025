import React, { useState } from 'react';
import './lista.css';

const ListaColores = ({ colores }) => {
  const [listaColores, setListaColores] = useState([...colores]);
  const [nuevoColor, setNuevoColor] = useState('');

  const agregarColor = () => {
    if (nuevoColor.trim() !== '') {
      const nuevoColorObj = {
        id: listaColores.length + 1,
        color: nuevoColor.trim()
      };
      setListaColores([...listaColores, nuevoColorObj]);
      setNuevoColor('');
    }
  };

  return (
    <div className="colores-container">
      <h2 className="title">Lista de colores</h2>
      <ul className="colores-lista">
        <label className="label" htmlFor="color">
          <input
            className="input"
            type="text"
            id="color"
            name="color"
            required
            placeholder="Introduce un color"
            value={nuevoColor}
            onChange={(e) => setNuevoColor(e.target.value)}
          />
        </label>
        <button className="add-button" onClick={agregarColor}>
          Añadir
        </button>
        {listaColores.map((colorObj) => (
          <li className="color-item" key={colorObj.id}>
            {colorObj.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaColores;