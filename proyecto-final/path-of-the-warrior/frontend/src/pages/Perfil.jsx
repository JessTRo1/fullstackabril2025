import { useAuth } from '../hooks/useAuth';

export default function Perfil() {
  const { user } = useAuth();

  return (
    <div className="perfil">
      <h1>Mi perfil</h1>

      <div className="perfil__info">
        <p><strong>Nombre:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Rol:</strong> usuario normal</p>
        {/* En el futuro: permitir edición del nombre/avatar */}
      </div>
    </div>
  );
}
