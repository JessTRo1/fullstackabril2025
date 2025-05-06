import React from 'react';
import App from '../App';
import './productos.css';


const Productos = ({ productos }) => {

    const precio = productos.filter(producto => producto.precio >= 700); 
    return (
        <div className="productos-container">
        <h2 className="title" >Lista de Productos</h2>
        <ul className="lista-productos">
            {productos.map((producto) => (
                <div className="producto-index" key={producto.id}>
                    <li className="producto-item">{producto.nombre}</li>
                    <li className="producto-price">{producto.precio}€</li>
                </div>
            ))}
            <h2 className="title" >Productos con precio mayor o igual a 700€</h2>
            {precio.map((producto) => (
                <div className="producto-index" key={producto.id}>
                    <li className="producto-item">{producto.nombre}</li>
                    <li className="producto-price">{producto.precio}€</li>
                </div>
            ))}
        </ul>
        </div>
    );
};
            


export default Productos;