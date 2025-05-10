import React, { useEffect, useState } from 'react';
import './temporizador.css';

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className='contador-container'>
      <h2 className='contador'>Segundos transcurridos: {segundos}</h2>
    </div>
  );
};

export default Temporizador;
