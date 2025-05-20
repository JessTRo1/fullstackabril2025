import React from 'react';

function Saludo ({ nombre }: Props): React.JSX.Element {
  return <h1>Hola, {nombre}</h1>
}

interface Props {
  nombre: string;       
}

export default Saludo;