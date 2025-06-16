'use client';
import '../../../styles/formulario.css';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NuevoProductoPage() {
  const [nombre, setNombre] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      alert('El nombre no puede estar vacío');
      return;
    }

    const res = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre }),
    });

    if (!res.ok) {
      alert('Error al guardar el producto');
      return;
    }

    router.push('/productos');
  };

  return (
    <main className="formulario">
      <h1 className="formulario__titulo">Nuevo Producto</h1>
      <form onSubmit={handleSubmit} className="formulario__form">
        <input
          type='text'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="formulario__input"
          placeholder='Nombre del producto'
        />
        <button type='submit' className="formulario__boton">Guardar</button>
      </form>
    </main>
  );
}
