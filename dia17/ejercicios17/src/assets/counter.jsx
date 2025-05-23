import { useState, useRef, useEffect } from "react";
import './counter.css';

function ContadorRenders() {
    const [count, setCount] = useState(0);
    const renders = useRef(0);
    const prevCount = useRef(0);

    useEffect(() => {
        renders.current++;
        prevCount.current = count;
    }, [count]);

    return (
        <div className="counterContainer">
            <p className="counterText">Contador actual: {count}</p>
            <p className="counterText">Contador anterior: {prevCount.current}</p>
            <p className="counterText">Renders: {renders.current}</p>
            <button className="counterButton" onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}
export default ContadorRenders;