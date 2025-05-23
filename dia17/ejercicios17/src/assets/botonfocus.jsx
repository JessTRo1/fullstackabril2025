import { useRef } from "react";
import './botonfocus.css';

function InputAutoFocus() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.value = "Texto añadido con useRef";
    }

    return (
        <div className="buttonContainer">
            <input className="inputField" ref={inputRef} type="text" placeholder="Pulsa el botón" />
            <button className="focusButton" onClick={handleFocus}>Enfocar Input</button>
        </div>
    );
}

export default InputAutoFocus;