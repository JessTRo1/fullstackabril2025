'use client';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import './dashboard.scss';

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Bienvenido, {user.username}</h1>
      <button className="dashboard__logout" onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
