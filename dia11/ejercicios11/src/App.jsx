import './App.css';
import Boton from './assets/boton.jsx';
import Cuadrado from './assets/cuadrado.jsx';
import ListaCompra from './assets/listacompra.jsx';
import ListaAlumnos from './assets/listaalumnos.jsx';


function App() {

  const listaCompra = [
    {id:"1", nombre: "Leche", cantidad: 2},
    {id:"2", nombre: "Pan", cantidad: 1},
    {id:"3", nombre: "Huevos", cantidad: 12},
    {id:"4", nombre: "Carne", cantidad: 1},
    {id:"5", nombre: "Verduras", cantidad: 5},
    {id:"6", nombre: "Frutas", cantidad: 3},
    {id:"7", nombre: "Arroz", cantidad: 2},
  ]

   const alumnos = [
    { id: 1, nombre: 'Juan Pérez', curso: 'Matemáticas' },
    { id: 2, nombre: 'María García', curso: 'Historia' },
    { id: 3, nombre: 'Carlos López', curso: 'Química' },
    { id: 4, nombre: 'Ana Martínez', curso: 'Literatura' },
  ];
  return (
    <div>
      <Boton />
      <Cuadrado />
      <ListaCompra lista={listaCompra} />
      <ListaAlumnos> 
        {alumnos.map(alumno => (
          <div key={alumno.id} className='alumno'>
            <h3>{alumno.nombre}</h3>
            <p>Curso: {alumno.curso}</p>
          </div>
        ))}
      </ListaAlumnos>
    </div>
  );
}

export default App;
