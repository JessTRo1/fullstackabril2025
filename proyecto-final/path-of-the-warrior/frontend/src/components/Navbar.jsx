import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth(); // Accede al usuario y a la función de logout desde el contexto
  const navigate = useNavigate();     // Hook de React Router para redireccionar tras logout

  const handleLogout = () => {
    logout();              // Elimina token y datos del usuario
    navigate('/login');    // Redirige al login después de cerrar sesión
  };

  return (
    <nav className="navbar">
      {/* Enlaces visibles para todos los usuarios */}
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">Path of the Warrior</Link>
        <Link to="/dashboard" className="navbar__link">Dashboard</Link>
        <Link to="/rutinas" className="navbar__link">Rutinas</Link>
      </div>

      <div className="navbar__right">
        {user ? (
          // Si el usuario está autenticado, muestra su avatar, nombre y botón de logout
          <>
            <Link to="/perfil" className="navbar__user">
              <img
                src={user?.avatar || '/avatars/avatar1.png'} // Avatar personalizado o por defecto
                alt="avatar"
                className="navbar__avatar"
              />
              <span>Hola, {user.name}</span>
            </Link>
            <button className="btn btn--cancelar" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          // Si no está autenticado muestra los botones de login y registro
          <>
            <Link to="/login" className="btn btn--enlace">Login</Link>
            <Link to="/registro" className="btn btn--enlace">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}
