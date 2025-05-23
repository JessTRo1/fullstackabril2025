import { useAuth } from './AuthContext';

function AuthButton() {
  const { isLoggedIn, toggleLogin } = useAuth();

  return (
    <button onClick={toggleLogin}>
      {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
    </button>
  );
}

export default AuthButton;

