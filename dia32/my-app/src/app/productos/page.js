'use client';

import Link from 'next/link';
import '../../styles/productos.css';
import { useEffect, useState } from 'react';

export default function ProductosPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/items')
      .then(async res => {
        if (!res.ok) throw new Error('Error al obtener datos');
        const data = await res.json();
        setItems(data);
      })
      .catch(err => console.error('Error al obtener items:', err));
  }, []);

  const handleDelete = async (id) => {
    const confirmar = confirm('¿Estás seguro de que quieres eliminar este producto?');
    if (!confirmar) return;

    try {
      const res = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar');

      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Error al eliminar item:', err);
    }
  };

  return (
    <main className="productos">
      <h1 className="productos__titulo">Productos disponibles</h1>
      <ul className="productos__lista">
        {items.map((item) => (
          <li key={item._id} className="productos__item">
            {item.nombre}
            <div className="productos__case">
              <button className="productos__button" onClick={() => handleDelete(item._id)}>Eliminar</button>
              <Link className="productos__button" href={`/productos/editar/${item._id}`}>Editar</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
