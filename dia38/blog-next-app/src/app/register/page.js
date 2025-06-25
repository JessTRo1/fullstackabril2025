'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './register.scss';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]     = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed.');
        return;
      }

      router.push('/login');

    } catch (err) {
      setError('Server error. Try again later.');
    }
  };

  return (
    <div className="register">
      <div className="register__box">
        <h1 className="register__title">Crear cuenta</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            className="register__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="register__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="register__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="register__error">{error}</p>}
          <button type="submit" className="register__button">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
