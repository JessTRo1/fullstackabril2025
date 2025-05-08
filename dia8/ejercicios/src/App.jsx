import React from 'react';
import ListaFrutas from "./assets/ListaFrutas";
import Productos from "./assets/productos";
import TablaUsuarios from "./assets/tablausuarios";
import ListaTareas from "./assets/tasklist";
import Empleados from "./assets/listaempleados";
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
    { id: 1, nombre: "Hacer la compra", estado: "pendiente"},
    { id: 2, nombre: "Limpiar la casa", estado: "pendiente" },
    { id: 3, nombre: "Estudiar", estado: "pendiente"},
    { id: 4, nombre: "Hacer ejercicio", estado: "pendiente"},
    { id: 5, nombre: "Leer un libro", estado: "pendiente"},
  ];

  const empleados = [
    {id: 1, nombre: "Ana", apellido: "Mesa", salario: 2500},
    {id: 2, nombre: "Luis", apellido: "Garcia", salario: 1800},
    {id: 3, nombre: "Carlos", apellido: "Perez", salario: 3200},
    {id: 4, nombre: "Marta", apellido: "Gutierrez", salario: 2800},
    {id: 5, nombre: "Pedro", apellido: "Almedaba", salario: 1500},
  ]

  return (
    <div className="App">
      <ListaFrutas frutas={frutas} /> 
      <Productos productos={productos} />
      <TablaUsuarios usuarios={usuarios}/>
      <ListaTareas tareas={tareas} />
      <Empleados empleados={empleados} />
    </div>
  );
}

export default App;