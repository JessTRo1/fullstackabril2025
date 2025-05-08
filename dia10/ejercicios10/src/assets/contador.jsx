import { useState } from 'react';
import './contador.css'

function Contador() {
  const [contador, setContador] = useState(0);

  const aumentarAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    setContador(contador + numeroAleatorio);
  };

  return (
    <div className="contador">
        <h1 className='contador__title'>Contador Aleatorio</h1>
      <p className='contador__value'>Valor actual: {contador}</p>
      <button className='contador__button' onClick={aumentarAleatorio}>
        Aumentar con número aleatorio
      </button>
    </div>
  );
}

export default Contador;