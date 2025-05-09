import React, { useState } from 'react';
import './tarea.css'

const Tarea = ({ tareas: initialTareas }) => {
    const [tareas, setTareas] = useState(initialTareas);

    const handleChange = (id) => {
        const updatedTareas = tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    estado: tarea.estado === "pendiente" ? "completada" : "pendiente",
                };
            }
            return tarea;
        });
        setTareas(updatedTareas);
    };

    return (
        <div >
            <h2 className="title">Lista de Tareas</h2>
            <ul className="categorias">
                {tareas.map((tarea) => (
                    <li className="categorias-item" key={tarea.id}>
                        {tarea.nombre}
                        <button className='toggle-button' onClick={() => handleChange(tarea.id)}>
                            {tarea.estado === "pendiente" ? "Completar" : "Revertir"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tarea;