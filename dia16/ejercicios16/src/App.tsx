import './App.css';
import Saludo from './assets/saludo';
import Componente from './assets/Componente';
import Formulario from './assets/Formulario';
import Funcion from './assets/Funcion';
import { useState } from 'react';
import UsuarioCard from './assets/UsuarioCard';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, texto: "Hacer la compra", completada: false },
    { id: 2, texto: "Hacer la comida", completada: false },
    { id: 3, texto: "Hacer la cena", completada: false },
    { id: 4, texto: "Hacer la limpieza", completada: false },
    { id: 5, texto: "Hacer la cama", completada: false },
  ]);

  const usuarios: Usuario[] = [
    { nombre: "Ana López", edad: 28, activo: false },
    { nombre: "Carlos Ruiz", edad: 35, activo: true },
    { nombre: "María García", edad: 42, activo: false },
  ];

  const toggleTarea = (id: number) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  return (
    <div>
      <Saludo nombre="Antonio" />
      <Componente mensaje="Mensaje de componente" />
      <Formulario />
      <Funcion mensaje="Suma de dos números" />

      <h2>Lista de Tareas</h2>
      <ul className='tareas'>
        {tareas.map((tarea) => (
          <li className='tareas__item' key={tarea.id}>
            <label htmlFor={`tarea-checkbox-${tarea.id}`}>
              <input
                id={`tarea-checkbox-${tarea.id}`}
                type="checkbox"
                checked={tarea.completada}
                onChange={() => toggleTarea(tarea.id)}
                title={`Marcar tarea "${tarea.texto}" como completada`}
              />
              <span className={tarea.completada ? 'tarea-completada' : ''}>
                {tarea.texto} - {tarea.completada ? "Completada" : "No completada"}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <h2>Usuarios</h2>
      <div className="usuarios-container">
        {usuarios.map((usuario, index) => (
          <UsuarioCard key={index} usuario={usuario} />
        ))}
      </div>
    </div>
  );
}

export default App;