import { useRouter } from 'next/router';

export default function PerfilUsuario() {
  const { username } = useRouter().query;

  return (
    <div>
      <h1>Perfil del usuario: {username}</h1>
    </div>
  );
}
