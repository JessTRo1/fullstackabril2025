import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './listatareas.css';

const ListaTareas = ({ tareas }) => {
  return (
    <motion.div 
      className="task-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="title"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Lista de Tareas
      </motion.h1>

      {tareas.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No hay tareas disponibles.
        </motion.p>
      )}

      {tareas.length > 0 && (
        <ul className="list">
          {tareas.map((tarea, index) => (
            <Checkbox key={index} tarea={tarea} />
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const Checkbox = ({ tarea }) => {
  const [checked, setChecked] = useState(tarea.completada);

  return (
    <motion.li 
      className="task-item"
      initial={{ opacity: 0, x: -10 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        backgroundColor: checked ? 'rgba(46, 204, 113, 0.7)' : 'rgba(252, 73, 73, 0.697)'
      }}
      transition={{ 
        backgroundColor: { duration: 0.3 },
        default: { type: 'spring', stiffness: 300 }
      }}
      whileHover={{ scale: 1.02 }}
    >
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="checkbox"
        />
        <motion.span
          transition={{ duration: 0.2 }}
        >
          {tarea.nombre} - {checked ? 'Completada' : 'Pendiente'}
        </motion.span>
      </label>
    </motion.li>
  );
};

export default ListaTareas;