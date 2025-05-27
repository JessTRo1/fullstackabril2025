import { useState, useEffect } from "react";
import { useReading } from "../context/ReadingContext";
import { Link } from "react-router-dom";

function Home() {
  const { lecturas, toggleLectura, deleteLectura } = useReading();      // Importa el contexto de lecturas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(false);  //  Mostrar completadas
  const [ lecturasFiltradas, setLecturasFiltradas] = useState([]);      // Estado para las lecturas filtradas

  

  useEffect(() => {                                                     // Actualiza la lista filtrada
     if (mostrarCompletadas) {
      setLecturasFiltradas(lecturas.filter(l => l.completada));          
    } else {
      setLecturasFiltradas(lecturas);                                   
    }
  }, [lecturas, mostrarCompletadas]);                                    

  return (
    <div className="Home">
      <h1 className="Home__title">Lista de Lecturas</h1>

        <button                                                         // Botón para alternar entre mostrar todo o solo lecturas completadas
        onClick={() => setMostrarCompletadas(prev => !prev)}
        >
          {mostrarCompletadas ? "Mostrar todas" : "Mostrar solo completadas"}  
        </button>

        {lecturasFiltradas.length === 0 && (
          <p>No hay lecturas que mostrar</p>                            // Mensaje si la lista está vacía
        )}

        <ul className="Home__list">
          {lecturasFiltradas.map((lectura) => (                         // Mapea las lecturas filtradas y las muestra       
          <li key={lectura.id} className="Home__item">                    
             <h2 className="Home__item-title">{lectura.titulo}</h2>
             <p className="Home__item-author">Autor: {lectura.autor}</p>
             
             <div className="Home__item-actions">
              <button onClick={() => toggleLectura(lectura.id)}
                className="Home__item-btn"
                >
                  {lectura.completada ? " Completada" : " Pendiente"}
              </button>

              <Link to={`/task/${lectura.id}`}
              className="Home__item-link">
                Ver detalles
              </Link>

              <button onClick={() => deleteLectura(lectura.id)}
                className="Home__item-btn"
                >
                  Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;