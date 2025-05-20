import React, { useState } from 'react';
import './Funcion.css';

interface Props {
    mensaje: string;
}

const Funcion: React.FC<Props> = ({ mensaje }) => {
    const [numero1, setNumero1] = useState<number>(0);
    const [numero2, setNumero2] = useState<number>(0);
    const [resultado, setResultado] = useState<number>(0);

    const sumar = () => {
        setResultado(numero1 + numero2);
    };

    return (
        <div className="funcion">
            <p className='funcion__mensaje'>{mensaje}</p>
            <input className='funcion__input'
                type="text"
                value={numero1}
                onChange={e => setNumero1(Number(e.target.value))}
                placeholder="Número 1"
            />
            <input
                className='funcion__input'
                type="text"
                value={numero2}
                onChange={e => setNumero2(Number(e.target.value))}
                placeholder="Número 2"
            />
            <button type="button" className="funcion__boton" onClick={sumar}>Sumar</button>
            <p className='funcion__resultado'>Resultado: {resultado}</p>
        </div>
    );
};

export default Funcion;
