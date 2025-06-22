'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, isAdmin }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.message || 'Error al registrar');
        return;
      }

      alert('Usuario registrado correctamente');
      router.push('/login');
    } catch (err) {
      console.error('Error al registrar:', err);
    }
  };

  return (
    <main className='formulario'>
      <h1 className='formulario__titulo'>Crear cuenta</h1>
      <form className='formulario__form' onSubmit={handleSubmit}>
        <input 
        className='formulario__input'
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input  
        className='formulario__input'
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <label className='formulario__checkbox'>
          <input
          className='formulario__checkbox'
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          Administrador
        </label><br />
        <button 
        className='formulario__boton'
        type="submit">Registrarse</button>
      </form>
    </main>
  );
}
