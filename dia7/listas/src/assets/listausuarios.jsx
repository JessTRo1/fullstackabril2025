import React from "react";
import './listausuarios.css';

const Listausuarios = ({ usuarios }) => {
    return (
        <div className="usuarios-container">
            <h2 className="title">Lista de usuarios</h2>
            <ul className="usuarios-lista">
                {usuarios.map((usuario, index) => (
                    <li key={index} className="usuario-item">{usuario.usuario}</li>
                ))}
            </ul>
        </div>
    );
};

export default Listausuarios;