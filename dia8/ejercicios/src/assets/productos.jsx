import React, { useState } from 'react';
import './productos.css';

const Productos = ({ productos }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredProductos = selectedCategory
        ? productos.filter(producto => producto.categoría === selectedCategory)
        : productos;

    return (
        <div className="productos-container">
            <h2 className="title">Lista de Productos</h2>
            <div className="categorias">
                <h3 className="categorias-menu">Categorias</h3>
                <ul className="categorias-list">
                    <li
                        className="categorias-item"
                        onClick={() => setSelectedCategory('Ropa')}
                    >
                        Ropa
                    </li>
                    <li
                        className="categorias-item"
                        onClick={() => setSelectedCategory('Electrónica')}
                    >
                        Electrónica
                    </li>
                    <li
                        className="categorias-item"
                        onClick={() => setSelectedCategory(null)}
                    >
                        Todos
                    </li>
                </ul>
            </div>
            <ul className="lista-productos">
                {filteredProductos.map((producto) => (
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