'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import '../styles/navbar.css';

export default function Navbar() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="navbar">
      <ul className="navbar__lista">
        <li><Link className="navbar__enlace" href="/"><span>Inicio</span></Link></li>
        <li><Link className="navbar__enlace" href="/productos"><span>Productos</span></Link></li>

        {!user && (
          <>
            <li><Link className="navbar__enlace" href="/login"><span>Login</span></Link></li>
            <li><Link className="navbar__enlace" href="/register"><span>Registrarse</span></Link></li>
          </>
        )}

        {user?.isAdmin && (
          <li><Link className="navbar__enlace" href="/productos/nuevo"><span>Nuevo producto</span></Link></li>
        )}

        {user && (
          <li>
            <button className="navbar__enlace" onClick={handleLogout}>
              <span>Cerrar sesión</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
