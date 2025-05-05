import React from 'react';
import './listafrutas.css';

const ListaFrutas = ({ frutas }) => {
    return (
        <div className="frutas-container">
            <h2 className="title">Lista de frutas</h2>
            <ul className="frutas-lista">
                {frutas.map((fruta, index) => (
                    <li key={index} className="fruta-item">{fruta}</li>
                ))}
            </ul>
        </div>
    );
};


export default ListaFrutas;