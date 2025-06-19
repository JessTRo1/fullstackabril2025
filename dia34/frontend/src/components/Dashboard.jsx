import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setIsAdmin(decoded.isAdmin); // Aquí guardas si es admin

      fetch('http://localhost:3000/api/protegido', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => {
          if (!res.ok) throw new Error('No autorizado');
          return res.json();
        })
        .then(data => setMensaje(data.mensaje))
        .catch(err => {
          console.error(err);
          navigate('/login');
        });
    } catch (err) {
      console.error('Error al decodificar el token:', err);
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Zona Protegida</h1>
      <p>{mensaje}</p>

      {isAdmin && (
        <div>
          <button>Crear usuario</button>
          <button>Editar usuario</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
