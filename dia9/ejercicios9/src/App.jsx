import './App.css';
import React from 'react';
import Perfil from './assets/perfil';
import Productos from './assets/productos';
import Saludo from './assets/saludo';
import Button from './assets/button';
import Tarea from './assets/tarea';
import UserProfile from './assets/userprofile';
import Tarjeta from './assets/tarjeta';
import Alerta from './assets/alerta';
import Caja from './assets/caja';
import BotonPersonalizado from './assets/buttonchildren';
import ListaAperturas from './assets/listachildren'

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
          <h2 className='cardtitle'>Gimnasio FITNESSTOPEWAY</h2>
          <p className='description'>Tarjeta de miembro del ginmasio para que vengas y te pongas mamadísimo</p>
          <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/da/02/31/da0231a6-449a-0073-573d-3ca5f93806ca/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/256x256bb.jpg'></img>
        </Tarjeta>

        <Alerta>
          <strong>¡Cuidado!</strong> No te vayas a arañar esos dedos de princesa
        </Alerta>
      </div>
      <div className='caja'>

        <Caja>
          <h2 className='title'>Apertura ajedrez</h2>
          <p className='descripcion'>Ejemplo de la apertura inglesa/escandinava</p>
          <img className='opening' src='https://herculeschess.com/wp-content/uploads/2020/04/English-Opening.png'></img>

          <BotonPersonalizado>

            <button className='thumbs'>&#128077;</button>
            <button className='thumbs'>&#128078;</button>

          </BotonPersonalizado>
        </Caja>
        <ListaAperturas>
          <li className="opening-item">Defensa Siciliana</li>
          <li className="opening-item">Defensa Francesa</li>
          <li className="opening-item">Apertura Inglesa</li>
          <li className="opening-item">Gambito de Dama</li>
          <li className="opening-item">Defensa Caro-Kann</li>
          <li className="opening-item">Apertura Italiana</li>

        </ListaAperturas>

      </div>

    </>
  );
};

export default App
