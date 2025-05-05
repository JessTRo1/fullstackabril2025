import React from 'react';
import './articulosdestacados.css';
import ArticuloCard from './articulocard.jsx';

const ArticulosDestacados = ({ articulos }) => {
  const destacados = articulos.filter(articulo => articulo.destacado);

  return (
    <div className="featured-articles">
      <h1 className="title">Artículos Destacados</h1>
      <div className="article-cards">
        {destacados.map((articulo, index) => (
          <ArticuloCard
            key={index}
            titulo={articulo.nombre}
            contenido={`Este es un artículo sobre ${articulo.nombre}.`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticulosDestacados;
