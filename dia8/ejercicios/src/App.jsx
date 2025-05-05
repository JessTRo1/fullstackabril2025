import React from 'react';
import ListaFrutas from "./assets/ListaFrutas";
import Productos from "./assets/productos";
import TablaUsuarios from "./assets/TablaUsuarios";
import './App.css';

function App() {
  const frutas = ["manzana", "Banana", "Cereza", "Durazno", "Fresa"];

  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Celular", precio: 800 },
    { id: 3, nombre: "Tablet", precio: 500 },
  ];

  const usuarios = [
    { id: 1, nombre: "Argimiro", edad: 25, ciudad: "Retuerta del Bullaque" },
    { id: 2, nombre: "Maria", edad: 30, ciudad: "Arrancacepas" },
    { id: 3, nombre: "Ermenegildo", edad: 28, ciudad: "Viso del Marqués" },
    { id: 4, nombre: "Jose", edad: 30, ciudad: "Caracuel de Calatrava" },
    { id: 5, nombre: "Porfirio", edad: 20, ciudad: "Tembleque" },
  ];

  return (
    <div className="App">
      <ListaFrutas frutas={frutas} /> 
      <Productos productos={productos} />
      <TablaUsuarios usuarios={usuarios}/>
    </div>
  );
}

export default App;