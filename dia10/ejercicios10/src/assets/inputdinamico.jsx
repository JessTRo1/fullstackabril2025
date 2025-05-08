import { useState } from 'react';
import './inputdinamico.css'

function InputDinamico() {

    const [texto, setTexto] = useState('');

    const manejarCambio = (evento) => {
        setTexto(evento.target.value);
    };
    return (
        <div className='input-container' >

            <input className='input'
                type="text"
                value={texto}
                onChange={manejarCambio}
                placeholder="Escribe algo..."
               
            />

            <p className='title'>
                 {texto}
            </p>
        </div>
    );
}

export default InputDinamico;