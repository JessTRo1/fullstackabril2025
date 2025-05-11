import { useState, useEffect } from 'react';
import './listaarte.css';

const ListaArte = ({ listaObras }) => {
 
  const [arte, setArte] = useState(listaObras);


  useEffect(() => {
    setArte(listaObras);
  }, [listaObras]);

  const handleDelete = (id) => {
    setArte(prevArte => prevArte.filter(item => item.id !== id));
  };

  return (
    <div className='lista-arte'>
      {arte.map(obra => (
        <div key={obra.id} className='arte-item'>
          <h3 className='title'>{obra.nombre}</h3>
          <img className='image' src={obra.imagen} alt={obra.nombre} />
          <p className='title'>Autor: {obra.autor}</p>
          <button className='button' onClick={() => handleDelete(obra.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaArte;