import { createContext, useContext, useState } from 'react';
import './CounterContext.css'

const CounterContext = createContext();

function useCounter() {
  return useContext(CounterContext);
}

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export default function CounterControls() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
