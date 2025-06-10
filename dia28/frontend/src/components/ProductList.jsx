import { useEffect, useState } from 'react';
import { getProductos, eliminarProducto } from '../services/productService';
import { Link } from 'react-router-dom';
import '../styles/product.css';

// Muestra la lista de productos
function ProductList() {
  const [productos, setProductos] = useState([]);

  // Cargar los productos
  useEffect(() => {
    cargarProductos();
  }, []);

  // Obtener los productos desde la API
  const cargarProductos = async () => {
    try {
      const res = await getProductos();
      setProductos(res.data);
    } catch (err) {
      console.error('Error al cargar productos', err);
    }
  };

  // Eliminar un producto por ID y recarga la lista
  const handleEliminar = async (id) => {
    if (!confirm('¿Seguro que quieres eliminar este producto?')) return;
    await eliminarProducto(id);
    cargarProductos();  // Carga los productos
  };

  return (
    <div className="product-list">
      <h2 className="product-list__title">Catálogo de Productos</h2>

      <div className="product-list__grid">
        {productos.map((producto) => (
          <div key={producto._id} className="product-card">
            <h3 className="product-card__title">{producto.nombre}</h3>

            <p className="product-card__text">
              <strong>Descripción:</strong> {producto.descripcion || '—'}
            </p>
            <p className="product-card__text">
              <strong>Categoría:</strong> {producto.categoria || '—'}
            </p>
            <p className="product-card__text">
              <strong>Precio:</strong> {producto.precio}€
            </p>
            <p className="product-card__text">
              <strong>Stock:</strong> {producto.stock}
            </p>

            <button
              className="product-card__delete-button"
              onClick={() => handleEliminar(producto._id)}
            >
              Eliminar
            </button>

            <Link
              to={`/editar/${producto._id}`}
              className="product-card__edit-link"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
