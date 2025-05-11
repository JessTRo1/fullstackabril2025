import React from "react";
import { useState } from 'react';
import './formulario.css';

function Formulario({onEnviar}) {
    const [inputValor, setInputValor] = useState("");
    const [inputValor2, setInputValor2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onEnviar(inputValor, inputValor2);
        setInputValor("");
        setInputValor2("");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    const handleMouseEvent = (e, isOver) => {
        e.target.style.backgroundColor = isOver ? "lightblue" : "";
    };
    const handleMouseOver = (e) => handleMouseEvent(e, true);
    const handleMouseOut = (e) => handleMouseEvent(e, false);

    return (
        <form className="formulario" onSubmit={handleSubmit} onKeyDown={handleKeyDown} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h2 className="title">Formulario</h2>
            <label className="label" htmlFor="nombre">Nombre:</label>
            <input className="input"
                id="nombre"
                type="text"
                value={inputValor}
                onChange={(e) => setInputValor(e.target.value)}
                placeholder="Ingresa tu nombre"
                required
            />
            <label className="label" htmlFor="email">Correo electrónico:</label>
            <input className="input"
                id="email"
                type="email"
                value={inputValor2} 
                onChange={(e) => setInputValor2(e.target.value)} 
                placeholder="Ingresa tu correo electrónico"
                required
            />
            <button className="button" type="submit">Enviar</button>
        </form>
    );
}
export default Formulario;