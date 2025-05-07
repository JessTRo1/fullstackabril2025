import React from 'react';
import App from '../App';
import './productos.css';


const Productos = ({ productos }) => {

    const precio = productos.filter(producto => producto.precio >= 700);
    return (
        <div className="productos-container">
            <h2 className="title">Lista de Productos</h2>
            <div className="categorias">
                <h3 className='categorias-menu'>Categorias</h3>
                <ul className='categorias-list'>
                    <li className='categorias-item'>Ropa</li>
                    <li className='categorias-item'>Accesorios</li>
                </ul>
            </div>
            <ul className="lista-productos">
                {productos.map((producto) => (
                    <li className="producto-item" key={producto.id}>
                        <div className="producto-index">
                            <span className="producto-nombre">{producto.nombre}</span>
                            <span className="producto-price">{producto.precio}€</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default Productos;