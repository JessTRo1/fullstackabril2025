import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducto, actualizarProducto } from '../services/productService';

// Editar un producto
function EditProduct() {
  const { id } = useParams(); // Extrae el ID de la URL
  const navigate = useNavigate(); // Redirecciona al terminar

  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: ''
  });

  // Carga los datos del producto por ID
  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const res = await getProducto(id);
        setForm(res.data);
      } catch (err) {
        console.error('Error al cargar el producto:', err);
        alert('No se pudo cargar el producto.');
        navigate('/');
      }
    };

    cargarProducto();
  }, [id, navigate]);

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Actualiza backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const actualizado = {
        nombre: form.nombre,
        descripcion: form.descripcion,
        precio: Number(form.precio),
        stock: Number(form.stock),
        categoria: form.categoria
      };

      await actualizarProducto(id, actualizado);
      alert('Producto actualizado correctamente');
      navigate('/');
    } catch (err) {
      console.error('Error al actualizar el producto:', err);
      alert('Error al actualizar el producto');
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h2 className="edit-form__title">Editar Producto</h2>

      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        className="edit-form__input"
      />
      <textarea
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        className="edit-form__textarea"
      />
      <input
        type="number"
        name="precio"
        value={form.precio}
        onChange={handleChange}
        placeholder="Precio"
        className="edit-form__input"
      />
      <input
        type="number"
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="edit-form__input"
      />
      <input
        type="text"
        name="categoria"
        value={form.categoria}
        onChange={handleChange}
        placeholder="Categoría"
        className="edit-form__input"
      />

      <button type="submit" className="edit-form__submit-button">
        Guardar Cambios
      </button>
    </form>
  );
}

export default EditProduct;
