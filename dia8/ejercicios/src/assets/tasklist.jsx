import React, { useState } from 'react';
import './tasklist.css';

const ListaTareas = ({ tareas: initialTareas }) => {
    const [tareas, setTareas] = useState(initialTareas); 

    const handleDelete = (id) => {
        const updatedTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(updatedTareas); 
    };

    return (
        <div className="tareas-container">
            <h2 className="title">Lista de Tareas</h2>
            <ul className="lista-tareas">
                {tareas.map((tarea) => (
                    <li className="tarea-item" key={tarea.id}>
                        {tarea.nombre}
                        <button className="delete-button" onClick={() => handleDelete(tarea.id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTareas;