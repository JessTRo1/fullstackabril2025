import { useState } from "react";
import './listacompra.css';
import Boton from './boton.jsx';

function ListaCompra({ lista }) {
    const [itemsComprados, setItemsComprados] = useState({});
    const [isHovered, setIsHovered] = useState(false);

    const toggleItemComprado = (id) => {
        setItemsComprados((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div 
            className={`list-container ${isHovered ? 'size' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <h2 className='title'>Lista de la compra</h2>
            <ul className='list'>
                {lista.map((item) => (
                    <li 
                        key={item.id}
                        className={itemsComprados[item.id] ? "comprado" : "list-item"}
                        onClick={() => toggleItemComprado(item.id)}
                    >
                        {item.nombre} : {item.cantidad} {itemsComprados[item.id] && "✔"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompra;