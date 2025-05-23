import { useAuth } from './AuthContext';

function AuthStatus() {
  const { isLoggedIn } = useAuth();

  return (
    <p>
      Estado: {isLoggedIn ? 'Conectado ✅' : 'Desconectado ❌'}
    </p>
  );
}

export default AuthStatus;
