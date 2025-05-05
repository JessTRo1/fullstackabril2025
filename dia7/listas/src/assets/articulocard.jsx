import React from 'react';
import './articulocard.css';

const ArticuloCard = ({ titulo, contenido }) => {
  return (
    <div className="articulo-card">
      <h2 className="title">{titulo}</h2>
      <p className="content">{contenido}</p>
    </div>
  );
};

export default ArticuloCard;