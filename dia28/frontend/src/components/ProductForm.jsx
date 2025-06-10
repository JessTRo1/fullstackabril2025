import { useState } from 'react';
import { crearProducto } from '../services/productService';

// Agregar un producto nuevo
function ProductForm({ onProductoCreado }) {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: ''
  });

  // Maneja el cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Enviar el formulario 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productoNuevo = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        precio: Number(form.precio),
        stock: Number(form.stock),
        categoria: form.categoria
      };

      await crearProducto(productoNuevo);
      alert('Producto creado');

      // Limpiar el formulario
      setForm({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        categoria: ''
      });

      // Notificar producto creado
      if (onProductoCreado) onProductoCreado();
    } catch (err) {
      console.error('Error al crear el producto', err);
      alert('Error al crear el producto');
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2 className="product-form__title">Nuevo Producto</h2>

      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        className="product-form__input"
      />
      <textarea
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        className="product-form__textarea"
      />
      <input
        type="number"
        name="precio"
        value={form.precio}
        onChange={handleChange}
        placeholder="Precio"
        className="product-form__input"
      />
      <input
        type="number"
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="product-form__input"
      />
      <input
        type="text"
        name="categoria"
        value={form.categoria}
        onChange={handleChange}
        placeholder="Categoría"
        className="product-form__input"
      />

      <button type="submit" className="product-form__submit-button">
        Crear Producto
      </button>
    </form>
  );
}

export default ProductForm;
