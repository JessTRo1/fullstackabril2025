import React from 'react'
import './button.css'

const BotonPersonalizado = ({ children }) => {
    return (
        <div className='button-thumb'>
            {children}
        </div>
    );
};

export default BotonPersonalizado