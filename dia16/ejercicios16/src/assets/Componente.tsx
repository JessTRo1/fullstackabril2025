import React, { useState } from 'react';
import './Componente.css';

interface Props {
  mensaje: string;
}

const Componente: React.FC<Props> = ({ mensaje }) => {
  const [contador, setContador] = useState<number>(0);
  const incrementar = (valor: number): void => {
    setContador(contador + valor);
  };
  return (
    <div className='componente'>
      <p className='componente__Mensaje'>{mensaje}</p>
      <p className='componente__Contador'>Contador: {contador}</p>
      <button className='componente__Boton' onClick={() => incrementar(1)}>Incrementar</button>
    </div>
  );
};

export default Componente;
