import { useParams, Link } from "react-router-dom";
import { useReading } from "../context/ReadingContext";

function ReadingPage() {
  const { id } = useParams();                                                  // ID de la URL
  const { lecturas } = useReading();                                           // Todas las lecturas
  const lectura = lecturas.find(l => l.id === id);                             // Busca la lectura

  if (!lectura) {                                                              // Mensaje si el ID no existe                  
    return (
      <div className="ReadingPage">                                           
        <h2>No se encontró la lectura</h2>                                      
        <Link to="/" className="ReadingPage__link">Volver a la lista</Link>
      </div>
    )
  }

  return (                        
    <div className="ReadingPage">
      <h1 className="ReadingPage__title">{lectura.titulo}</h1>
      <p className="ReadingPage__author">Autor: {lectura.autor}</p>
      <p className="ReadingPage__status">
        Estado: {lectura.completada ? " Completada" : " Pendiente"}
      </p>
      <Link to="/" className="ReadingPage__link">Volver a la lista</Link>       
    </div>
  );

}

export default ReadingPage;