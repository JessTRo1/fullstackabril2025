import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { parseNameFromEmail } from '../utils/authUtils';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // En este punto simplemente guardamos los datos temporalmente
    // Ya se conectará al backend real más adelante
    const newUser = {
    email,
    name: parseNameFromEmail(email) 
  };

    login(newUser); // Guarda el usuario en contexto y localStorage
    navigate('/dashboard'); // Redirige tras iniciar sesión
  };

  return (
    <div className="login">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
