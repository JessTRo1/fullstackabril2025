import { useEffect, useState } from 'react';

export default function Home() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nombres, setNombres] = useState([]);

  // Obtener nombres al cargar
  useEffect(() => {
    fetchNombres();
  }, []);

  const fetchNombres = async () => {
    const res = await fetch('/api/nombres');
    const data = await res.json();
    setNombres(data.nombres);
  };

  // Añadir nombre
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/nombres', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre }),
    });

    if (res.ok) {
      const data = await res.json();
      setMensaje('Nombre añadido');
      setNombre('');
      fetchNombres();
    } else {
      setMensaje('Error al añadir nombre');
    }
  };

  // Eliminar nombre
  const eliminarNombre = async (id) => {
    const res = await fetch('/api/nombres', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setMensaje('Nombre eliminado');
      fetchNombres();
    }
  };

  return (
    <main>
      <h1>Lista de Nombres</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Introduce un nombre"
        />
        <button type="submit">Añadir</button>
      </form>

      <p>{mensaje}</p>

      <ul>
        {nombres.map((n) => (
          <li key={n.id}>
            {n.nombre} <button onClick={() => eliminarNombre(n.id)}>❌ Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
