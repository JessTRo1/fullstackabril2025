'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import '@/styles/formulario.css'; 

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || 'Error al iniciar sesión');
      return;
    }

    localStorage.setItem('token', data.token);
    const payload = JSON.parse(atob(data.token.split('.')[1]));
    setUser(payload);

    router.push('/');
  };

  return (
    <main className='formulario'>
      <h1 className='formulario__titulo'>Iniciar sesión</h1>
      <form className='formulario__form' onSubmit={handleSubmit}>
        <input className='formulario__input' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input className='formulario__input' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
        <button className='formulario__boton' type="submit">Entrar</button>
      </form>
    </main>
  );
}
