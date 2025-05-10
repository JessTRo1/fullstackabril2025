import { useState, useEffect } from 'react';
import './contador.css';

function Contador2() {
  const [contador, setContador] = useState(0);

 
  useEffect(() => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    setContador(prev => prev + numeroAleatorio);
  }, []);

  const aumentar = () => {
    const numero = Math.floor(Math.random() * 10) + 1;
    setContador(prev => prev + numero);
  };

  return (
    <div className="contador">
      <h1 className="contador__title">Contador Aleatorio useEffect</h1>
      <p className="contador__value">Valor actual: {contador}</p>
      <button className="contador__button" onClick={aumentar}>
        Aumentar con número aleatorio
      </button>
    </div>
  );
}

export default Contador2;
