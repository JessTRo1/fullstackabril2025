import { useAuth } from '../hooks/useAuth';
import AvatarSelector from '../components/AvatarSelector';

export default function Perfil() {
  const { user, token, login } = useAuth(); 

  // Maneja el cambio de avatar del usuario autenticado
  const handleAvatarChange = async (avatarUrl) => {
    try {
      const res = await fetch('http://localhost:5000/api/user/avatar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ avatar: avatarUrl }),
      });

      const data = await res.json();

      if (data.user) {
        // Actualiza el usuario en el contexto con el nuevo avatar
        login(data.user, token); 
        console.log('Avatar actualizado:', data.user);
      }

    } catch (err) {
      console.error('Error actualizando avatar:', err);
    }
  };

  return (
    <div className="perfil">
      <h1>Mi perfil</h1>
      {/* Información básica del usuario */}
      <div className="perfil__info">
        <p><strong>Nombre:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      {/* Selector de avatar */}
      <h2>Selecciona tu avatar</h2>
      <AvatarSelector
        selectedAvatar={user?.avatar}
        onChange={handleAvatarChange}
      />
    </div>
  );
}
