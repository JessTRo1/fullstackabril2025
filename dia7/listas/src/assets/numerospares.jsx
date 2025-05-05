import React from 'react';
import './numerospares.css'; 

const NumerosPares = () => {
    const pares =Array.from({ length: 10 }, (_, i) => i * 2);
    return (
        <div className="numeros-pares-container">
            <h2 className="title">Números Pares</h2>
            <ul className="numeros-pares-list">
                {pares.map((numero, index) => (
                    <li key={index} className="numeros-pares-item">{numero}</li>
                ))}
            </ul>
        </div>
    );
};

export default NumerosPares; 