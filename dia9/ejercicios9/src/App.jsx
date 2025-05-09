import './App.css';
import React from 'react';
import Perfil from './assets/perfil';
import Productos from './assets/productos';
import Saludo from './assets/saludo';
import Button from './assets/button';
import Tarea from './assets/tarea';
import UserProfile from './assets/userprofile';
import Tarjeta from './assets/tarjeta'
import Alerta from './assets/alerta'

const App = () => {

  const handleClick = () => {
    alert("Texto generado con clic de un botón");
  };

  const ListaTareas = [
    { id: 1, nombre: "Hacer la compra", estado: "pendiente" },
    { id: 2, nombre: "Limpiar la casa", estado: "pendiente" },
    { id: 3, nombre: "Estudiar", estado: "pendiente" },
    { id: 4, nombre: "Hacer ejercicio", estado: "pendiente" },
    { id: 5, nombre: "Leer un libro", estado: "pendiente" },
  ];

  return (
    <>
      <div className="perfil__container">
        <Perfil nombre="Juan Pérez" edad={30} />
        <Perfil nombre="María García" edad={25} />
      </div>
      <div className="producto__container">
        <h2 className="producto__title">Lista de productos</h2>
        <Productos nombre="Laptop" precio={1200} />
        <Productos nombre="Teléfono" precio={600} />
        <Productos nombre="Tablet" precio={300} />
      </div>
      <div>
        <Saludo nombre="Carlos" />
      </div>
      <div className='button-container'>
        <Button texto="Texto Generado con click de un botón" onClick={handleClick} />
      </div>
      <div className='tareas-container'>
        <Tarea tareas={ListaTareas} />
      </div>
      <div className='avatar-container'>
        <UserProfile
          name="Gerardo"
          avatarUrl="https://avatar.rf4game.com/rf4game.ru/wp-content/uploads/avatar/256/0003/3527.jpg" />
      </div>
      <div className='children-container'>
        <Tarjeta>
          <h2 className='cardtitle'>Gimnasio ESPARTACO</h2>
          <p className='description'>Tarjeta de miembro del ginmasio para que vengas y te pongas mamadísimo</p>
          <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/da/02/31/da0231a6-449a-0073-573d-3ca5f93806ca/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/256x256bb.jpg'></img>
        </Tarjeta>

        <Alerta>
          <strong>¡Cuidado!</strong> No te vayas a arañar esos dedos de princesa
        </Alerta>
      </div>

    </>
  );
};

export default App
