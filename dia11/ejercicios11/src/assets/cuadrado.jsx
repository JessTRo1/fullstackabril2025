import React, { useState } from "react";
import './cuadrado.css';

function Cuadrado () {
    const [color1, setColor1] = useState(false);
    const [color2, setColor2] = useState(false);
    
    return (
        <div 
        className={`cuadrado ${color1 ? "color1" : ""} ${color2 ? "color2" : ""}`}
        onClick={() => {
            setColor1(!color1);
        }}
        onDoubleClick={() => {
            setColor2(!color2);
        }}
    >
        </div>
    );
}

export default Cuadrado;
