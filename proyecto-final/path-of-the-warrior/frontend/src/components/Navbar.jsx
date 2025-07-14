import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__logo">Path of the Warrior</span>
        <Link to="/dashboard" className="navbar__link">Dashboard</Link>
        <Link to="/rutinas" className="navbar__link">Rutinas</Link>
        <Link to="/desafios" className="navbar__link">Desafíos</Link>
      </div>

      <div className="navbar__right">
        {user ? (
          <>
            <Link to="/perfil" className="navbar__user">
              <img
                src="/avatar.png"
                alt="avatar"
                className="navbar__avatar"
              />
              <span>Hola, {user.name}</span>
            </Link>
            <button className="btn btn--cancelar" onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn--enlace">Login</Link>
            <Link to="/registro" className="btn btn--enlace">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}
