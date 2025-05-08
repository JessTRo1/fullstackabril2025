import React, { useState } from "react";
import "./tasklist.css";

const ListaTareas = ({ tareas: initialTareas }) => {
    const [tareas, setTareas] = useState(initialTareas);
    const [filtro, setFiltro] = useState("todas");

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

    const tareasPendientes = tareas.filter(
        (tarea) => tarea.estado === "pendiente"
    );
    const tareasCompletadas = tareas.filter(
        (tarea) => tarea.estado === "completada"
    );

    const tareasMostradas =
        filtro === "pendientes"
            ? tareasPendientes
            : filtro === "completadas"
                ? tareasCompletadas
                : tareas;

    return (
        <div className="tareas-container">
            <h2 className="title">Lista de Tareas</h2>
            <ul className="categorias">
                <li className="categorias-item" onClick={() => setFiltro("pendientes")}>
                    Pendientes ({tareasPendientes.length})
                </li>
                <li
                    className="categorias-item"
                    onClick={() => setFiltro("completadas")}
                >
                    Completadas ({tareasCompletadas.length})
                </li>
                <li className="categorias-item" onClick={() => setFiltro("todas")}>
                    Todas ({tareas.length})
                </li>
            </ul>
            <ul className="lista-tareas">
                {tareasMostradas.map((tarea) => (
                    <li className="tarea-item" key={tarea.id}>
                        {tarea.nombre}
                        <button
                            className="toggle-button"
                            onClick={() => handleChange(tarea.id)}
                        >
                            {tarea.estado === "pendiente" ? "Completar" : "Pendiente"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTareas;
