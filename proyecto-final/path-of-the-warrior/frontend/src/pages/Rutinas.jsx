// Vista general con todas las rutinas disponibles y botón para crear nuevas (si el usuario es admin)

import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import RutinaCard from '../components/RutinaCard';
import { Link } from 'react-router-dom';

export default function Rutinas() {
  const [rutinas, setRutinas] = useState([]);
  const { token, user } = useAuth();

  // Cargar todas las rutinas desde la API
  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/rutinas', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        setRutinas(data);
      } catch (err) {
        console.error('Error al obtener rutinas:', err);
      }
    };

    fetchRutinas();
  }, [token]);

  const isAdmin = user?.isAdmin;

  return (
    <div className="rutinas">
      <h2>Rutinas disponibles</h2>

      {/* Botón visible solo si el usuario es admin */}
      {isAdmin && (
        <div className="text-center m-2">
          <Link to="/rutinas/crear" className="btn">
            Crear nueva rutina
          </Link>
        </div>
      )}

      {/* Grid con tarjetas de rutina */}
      <div className="rutinas__grid">
        {rutinas.map(rutina => (
          <RutinaCard key={rutina._id} rutina={rutina} />
        ))}
      </div>
    </div>
  );
}
