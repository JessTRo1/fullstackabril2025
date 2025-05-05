import React from 'react';
import App from '../App';
import './tablausuarios.css';


const TablaUsuarios = ({ usuarios }) => {
    return (
        <div className="usuarios-container">
            <h2 className="title">Lista de Usuarios</h2>
            <table className="tabla-usuarios">
                <thead className="tabla-header">
                    <tr className="tabla-row">
                        <th className="tabla-header-item">Nombre</th>
                        <th className="tabla-header-item">Edad</th>
                        <th className="tabla-header-item">Ciudad</th>
                    </tr>
                </thead>
                <tbody className="tabla-body">
                    {usuarios.map((usuario) => (
                        <tr className="tabla-body-row" key={usuario.id}>
                            <td className="tabla-body-item">{usuario.nombre}</td>
                            <td className="tabla-body-item">{usuario.edad}</td>
                            <td className="tabla-body-item">{usuario.ciudad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default TablaUsuarios;