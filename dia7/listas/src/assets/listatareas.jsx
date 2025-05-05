import React, { useState } from 'react';
import './listafrutas.css';

const ListaTareas = ({ tareas }) => {
  return (
    <div className="task-list">
      <h1 className="title">Lista de Tareas</h1>

      {tareas.length === 0 && <p>No hay tareas disponibles.</p>}

      {tareas.length > 0 && (
        <ul className="list">
          {tareas.map((tarea, index) => (
            <Checkbox key={index} tarea={tarea} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Checkbox= ({ tarea }) => {
  const [checked, setChecked] = useState(tarea.completada);

  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox" checked={checked}
          onChange={() => setChecked(!checked)}
        />
        &nbsp;
        {tarea.nombre} - {checked ? 'Completada' : 'Pendiente'}
      </label>
    </li>
  );
};

export default ListaTareas;