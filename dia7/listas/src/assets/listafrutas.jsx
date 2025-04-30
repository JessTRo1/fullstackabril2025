import React from 'react';
import './listafrutas.css';

const ListaFrutas = () => { 
  const frutas = new Map([
    ['platano', 1],
    ['manzana', 2],
    ['naranja', 3],
    ['uva', 4],
    ['nectarina', 5],
  ]);

  return (
    <div className="fruit-list">
      <h1 className="title">Lista de frutas</h1>
      <ul className="list">
        {(() => {
          const items = [];
          frutas.forEach((id, fruta) => {
            items.push(
              <li className="fruit-item" key={id}>
                {fruta}
              </li>
            );
          });
          return items;
        })()}
      </ul>
      <p className="total-count">Total frutas: {frutas.size}</p>
    </div>
  );
};

export default ListaFrutas;