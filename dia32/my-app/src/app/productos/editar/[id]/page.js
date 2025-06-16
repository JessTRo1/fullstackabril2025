'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditarProductoPage({ params }) {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`/api/items/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setNombre(data.nombre);
        setCargando(false);
      })
      .catch(err => {
        console.error('Error al cargar producto:', err);
        setCargando(false);
      });
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/items/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre }),
      });

      if (!res.ok) throw new Error('Error al actualizar');

      router.push('/productos');
    } catch (err) {
      console.error('Error al actualizar:', err);
    }
  };

  if (cargando) return <p>Cargando...</p>;

  return (
    <main className="editar">
      <h1 className="editar__titulo">Editar producto</h1>
      <form className="editar__form" onSubmit={handleSubmit}>
        <input
          className="editar__input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button className="editar__button" type="submit">Guardar cambios</button>
      </form>
    </main>
  );
}
