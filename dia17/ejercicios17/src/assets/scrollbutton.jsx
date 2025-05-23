import { useRef } from "react";
import './scrollbutton.css';

function ScrollEnd() {
    const divRef = useRef(null);

    const goDown = () => {
        divRef.current.scrollTop = divRef.current.scrollHeight;
    };

    return (
        <div className="scrollContainer" ref={divRef}>
            <div className="scrollContent">
                <p className="scrollText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="scrollText">Más contenido para hacer scroll...</p>
                <p className="scrollText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis repellat nihil eos accusantium, consectetur voluptates est ratione ipsam voluptas. Neque aut distinctio labore aliquid, similique eligendi maiores autem et.</p>
                <p className="scrollText">Sigue agregando contenido hasta que el contenedor sea claramente scrollable.</p>
            </div>
            <button className="scrollButton" onClick={goDown}>Scroll Down</button>
        </div>
    );
}

export default ScrollEnd;