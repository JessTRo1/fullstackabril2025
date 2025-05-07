import React from 'react';
import ListaFrutas from "./assets/ListaFrutas";
import Productos from "./assets/productos";
import TablaUsuarios from "./assets/tablausuarios";
import ListaTareas from "./assets/tasklist";
import './App.css';

function App() {
  const frutas = ["manzana", "Banana", "Cereza", "Melocotón", "Fresa"];

  const productos = [
    { id: 1, nombre: "Laptop", categoría: "Electrónica", precio: 1200 },
    { id: 2, nombre: "Celular", categoría: "Electrónica", precio: 800 },
    { id: 3, nombre: "Tablet", categoría: "Electrónica", precio: 500 },
    { id: 4, nombre: "Camiseta", categoría: "Ropa", precio: 20 },
    { id: 5, nombre: "Zapatos", categoría: "Ropa", precio: 160 },

  ];

  const usuarios = [
    { id: 1, nombre: "Argimiro", edad: 25, ciudad: "Retuerta del Bullaque" },
    { id: 2, nombre: "Maria", edad: 17, ciudad: "Arrancacepas" },
    { id: 3, nombre: "Ermenegildo", edad: 28, ciudad: "Viso del Marqués" },
    { id: 4, nombre: "Jose", edad: 42, ciudad: "Caracuel de Calatrava" },
    { id: 5, nombre: "Porfirio", edad: 15, ciudad: "Tembleque" },
  ];

  const tareas = [
    { id: 1, nombre: "Hacer la compra"},
    { id: 2, nombre: "Limpiar la casa" },
    { id: 3, nombre: "Estudiar"},
    { id: 4, nombre: "Hacer ejercicio"},
    { id: 5, nombre: "Leer un libro"},
  ];

  return (
    <div className="App">
      <ListaFrutas frutas={frutas} /> 
      <Productos productos={productos} />
      <TablaUsuarios usuarios={usuarios}/>
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;