import { createContext, useContext, useState } from 'react';

const CartContext = createContext();


export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const addItem = (product) => {
        setItems((prev) => [...prev, product]);
    };

    const removeItem = (id) => {
        setItems((prev) => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}