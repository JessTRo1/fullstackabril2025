import { Link } from 'react-router-dom';

// Componente que muestra una tarjeta visual para cada rutina.
// Incluye imagen, título y nivel. Al hacer clic, redirige a la vista detallada.
export default function RutinaCard({ rutina }) {
  return (
    <Link to={`/rutinas/${rutina._id}`} className="rutina-card">
      {/* Imagen de la rutina */}
      <img 
        src={rutina.imagen} 
        alt={rutina.titulo} 
        className="rutina-card__imagen" 
      />

      {/* Contenido textual: título y nivel */}
      <div className="rutina-card__contenido">
        <h3 className="rutina-card__titulo">{rutina.titulo}</h3>
        <p className="rutina-card__nivel">{rutina.nivel}</p>
      </div>
    </Link>
  );
}
