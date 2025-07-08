import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();             // Limpia el contexto y el localStorage
    navigate('/login');   // Redirige al login
  };

  return (
    <div className="dashboard">
      <h1>Bienvenido, {user?.name}</h1>

      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
