'use client';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import './Navbar.scss';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">Blog</Link>
      </div>
      <ul className="navbar__links">
        {isAuthenticated ? (
          <>
            <li className="navbar__item">
              <Link href="/dashboard">Panel</Link>
            </li>
            <li className="navbar__item">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="navbar__item navbar__user">
              <span style={{ color: 'yellow' }}>{user?.username}</span>
            </li>
            <li className="navbar__item">
              <button onClick={logout} className="navbar__logout">Salir</button>
            </li>
          </>
        ) : (
          <>
          <li className="navbar__item">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="navbar__item">
              <Link href="/login">Login</Link>
            </li>
            <li className="navbar__item">
              <Link href="/register">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
