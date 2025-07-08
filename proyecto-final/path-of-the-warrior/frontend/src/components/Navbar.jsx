import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Navbar.scss';


export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Oculta el navbar si estamos en /login
  if (location.pathname === '/login') return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__logo">⚔️ Path of the Warrior</span>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/rutinas">Rutinas</Link>
        <Link to="/desafios">Desafíos</Link>
      </div>
      <div className="navbar__right">
        <Link to="/perfil" className="navbar__user">
  <img
    src="/avatar.png" // imagen provisional
    alt="avatar"
    className="navbar__avatar"
  />
  <span>Hola, {user?.name}</span>
</Link>

        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
}
