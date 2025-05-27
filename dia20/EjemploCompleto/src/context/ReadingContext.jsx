import { createContext, useContext, useState, useEffect } from "react";

// Contexto
const ReadingContext = createContext();

// Hook para usar el contexto
export const useReading = () => useContext(ReadingContext);

// Provider del contexto
export const ReadingProvider = ({ children }) => {
  const [lecturas, setLecturas] = useState(() => {
    const stored = localStorage.getItem("lecturas");
    return stored ? JSON.parse(stored) : [];
  });

useEffect(() => { 
    localStorage.setItem("lecturas", JSON.stringify(lecturas));
}, [lecturas]);

const addLectura = (nuevaLectura) => {
    setLecturas(prev => [...prev, nuevaLectura]);
  };

const deleteLectura = (id) => {
    setLecturas(prev => prev.filter(l => l.id !== id));
  };

const toggleLectura = (id) => {
    setLecturas(prev =>
      prev.map(l =>
        l.id === id ? { ...l, completada: !l.completada } : l
      )
    );
  };

 return (
    <ReadingContext.Provider value={{ lecturas, addLectura, deleteLectura, toggleLectura }}>
      {children}
    </ReadingContext.Provider>
  );
};