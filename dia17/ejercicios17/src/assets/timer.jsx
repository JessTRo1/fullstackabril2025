import { useRef, useState } from "react";
import './timer.css';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <div className="timerContainer">
            <p className="timerText">Tiempo: {seconds} segundos</p>
            <button className="timerButton" onClick={startTimer}>Iniciar</button>
            <button className="timerButton" onClick={stopTimer}>Detener</button>
        </div>
    );
}

export default Timer;