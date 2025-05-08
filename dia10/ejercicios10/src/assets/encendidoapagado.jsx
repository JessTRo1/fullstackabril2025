import { useState } from 'react'
import './encendidoapagado.css';

function AlternateText() {
  const [isOn, setIsOn] = useState(true);

  const toggleText = () => {
    setIsOn(!isOn);
  };

  return (
    <div className='text-container'>
      {isOn ? (
        <span className='text1'>Encendido</span>
      ) : (
        <span className='text2'>Apagado</span>
      )}
      <button onClick={toggleText} className='button'>
        Alternar texto
      </button>
    </div>
  );
}

export default AlternateText;