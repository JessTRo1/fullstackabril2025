import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');

  const handleLogout = () => {
    logout();             // Limpia el contexto y el localStorage
    navigate('/login');   // Redirige al login
  };

  // Cargar datos protegidos al montar

  useEffect(() => {
    if (!token) return;

    const fetchProtectedData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/protected/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.msg || 'Acceso no autorizado');

        setProfileData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProtectedData();
  }, [token]);

  return (
    <div className="dashboard">
      <h1>Bienvenido, {user?.name}</h1>

      <button onClick={handleLogout}>Cerrar sesión</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {profileData ? (
        <div>
          <h3>Datos protegidos del backend:</h3>
          <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </div>
      ) : (
        <p>Cargando datos protegidos...</p>
      )}
    </div>
  );
}
