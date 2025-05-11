import React, { useEffect, useState } from 'react';
import './temporizador.css';

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(false);
  const togglePausa = () => setPausado(prev => !prev);

  useEffect(() => {
    let intervalo;
    if (!pausado) {
      intervalo = setInterval(() => {
        setSegundos(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [pausado]);

  return (
    <div className='contador-container'>
      <h2 className='contador'>Segundos transcurridos: {segundos}</h2>
      <button className='button' onClick={togglePausa}>
        {pausado ? 'Reanudar' : 'Pausar'}
      </button>
    </div>
  );
};

export default Temporizador;
