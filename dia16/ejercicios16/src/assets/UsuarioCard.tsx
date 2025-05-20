import React from 'react';
import './UsuarioCard.css';

interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

interface UsuarioCardProps {
  usuario: Usuario;
}

const UsuarioCard: React.FC<UsuarioCardProps> = ({ usuario }) => {
  const cardClass = usuario.activo ? 'usuario-card activo' : 'usuario-card inactivo';

  return (
    <div className={cardClass}>
      <h3>{usuario.nombre}</h3>
      <p>Edad: {usuario.edad}</p>
      <p>Estado: {usuario.activo ? 'Activo' : 'Inactivo'}</p>
    </div>
  );
};

export default UsuarioCard;