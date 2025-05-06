import './App.css';
import ListaFrutas from './assets/listafrutas.jsx';
import ListaTareas from './assets/listatareas.jsx';
import ArticulosDestacados from './assets/articulosdestacados.jsx';
import NumerosPares from './assets/numerospares.jsx';
import AlumnosAprobados from './assets/alumnosaprobados.jsx';
import Listausuarios from './assets/listausuarios.jsx';
import { useState } from 'react';


function App() {

  const tareas = [
    { nombre: 'Hacer la compra', completada: false },
    { nombre: 'Ir al gimnasio', completada: false },
    { nombre: 'Estudiar React', completada: false },
    { nombre: 'Hacer la comida', completada: false },
    { nombre: 'Salir a correr', completada: false },
    { nombre: 'Leer un libro', completada: false },
  ];

  const articulosDestacados = [
    { nombre: 'zapatos', destacado: false },
    { nombre: 'chaqueta', destacado: true },
    { nombre: 'reloj', destacado: true},
    { nombre: 'gafas', destacado: true },
    { nombre: 'mochila', destacado: false },
  ];

  const destacadosIniciales = articulosDestacados.filter(a => a.destacado).length;

  const [contadorDestacados] = useState(destacadosIniciales);

  const alumnos = [
    { nombre: 'Juan', nota: 8 },
    { nombre: 'María', nota: 6 },
    { nombre: 'Mónica', nota: 3 },
    { nombre: 'Pedro', nota: 4 },
    { nombre: 'Ana', nota: 7 },
    { nombre: 'Alejandro', nota: 4 },
    { nombre: 'Luis', nota: 5 },
    { nombre: 'Lorena', nota: 2 },
    { nombre: 'Laura', nota: 9 },
    { nombre: 'Javier', nota: 3 },
    { nombre: 'Sofía', nota: 10 },
    { nombre: 'Diego', nota: 2 },
  ]

  const  usuarios = [
    { nombre: 'Juan', usuario: 'juan123'},
    { nombre: 'María', usuario: 'maria456'},
    { nombre: 'Pedro', usuario: 'pedro789'},
    { nombre: 'Ana', usuario: 'ana101'},
    { nombre: 'Luis', usuario: 'luis112'},
    { nombre: 'Laura', usuario: 'laura131'},
    { nombre: 'Javier', usuario: 'javier415'},
    { nombre: 'Sofía', usuario: 'sofia161'},
    { nombre: 'Diego', usuario: 'diego718'},
  ];

  return (
    <div className="app-container">
        <ListaFrutas /> 
        <ListaTareas tareas={tareas} />
        <ArticulosDestacados articulos={articulosDestacados} />
        <h2 className="title">Artículos destacados: {contadorDestacados}</h2>
        <NumerosPares />
        <AlumnosAprobados alumnos={alumnos} />
        <Listausuarios usuarios={usuarios} />
    </div>
  );
}

export default App;