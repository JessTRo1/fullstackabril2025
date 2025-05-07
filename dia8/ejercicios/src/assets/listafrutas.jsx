import React, { useState } from 'react';
import './listafrutas.css';

const ListaFrutas = ({ frutas }) => {
  const [listaFrutas, setListaFrutas] = useState([...frutas]);
  const [nuevaFruta, setNuevaFruta] = useState('');

  const agregarFruta = () => {
    if (nuevaFruta !== '') {
      setListaFrutas([...listaFrutas, nuevaFruta]);
      setNuevaFruta('');
    }
  };

  return (
    <div className="frutas-container">
      <h2 className="title">Lista de frutas</h2>
      <ul className="frutas-lista">
        <label className="label" htmlFor="fruta">
          <input
            className="input"
            type="text"
            id="fruta"
            name="fruta"
            required
            placeholder="Introduce una fruta"
            value={nuevaFruta}
            onChange={(e) => setNuevaFruta(e.target.value)}
          />
        </label>
        <button className="add-button" onClick={agregarFruta}>
          Añadir
        </button>
        {listaFrutas.map((fruta, index) => (
          <li className="fruta-item" key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaFrutas;
