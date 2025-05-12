import { useState } from "react";
import './boton.css';

function Boton({ onToggle }) {
    const [activo, setActivo] = useState(false);

    const handleClick = () => {
        setActivo(!activo);
        onToggle(!activo); 
    };

    return (
        <button
            className={activo ? "btn activo" : "btn"} 
            onClick={handleClick}
        >
            {activo ? "Activo" : "Inactivo"}
        </button>
    );
}

export default Boton;