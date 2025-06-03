import { useState, useEffect } from 'react';

function ItemForm({ setItems, itemEditando, setItemEditando }) {
  const [nombre, setNombre] = useState('');

  // Cargar datos al iniciar edición
  useEffect(() => {
    if (itemEditando) {
      setNombre(itemEditando.nombre);
    }
  }, [itemEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) return;

    if (itemEditando) {

      // EDITAR ELEMENTO
      fetch(`http://localhost:3001/items/${itemEditando.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre }),
      })
        .then(res => res.json())
        .then(actualizado => {
          setItems(prev =>
            prev.map(item => (item.id === actualizado.id ? actualizado : item))
          );
          setNombre('');
          setItemEditando(null);
        });
    } else {

      // CREAR NUEVO ELEMENTO
      fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre }),
      })
        .then(res => res.json())
        .then(nuevo => {
          setItems(prev => [...prev, nuevo]);
          setNombre('');
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre del elemento"
      />
      <button type="submit">
        {itemEditando ? 'Actualizar' : 'Agregar'}
      </button>
      {itemEditando && (
        <button type="button" onClick={() => {
          setItemEditando(null);
          setNombre('');
        }}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default ItemForm;
