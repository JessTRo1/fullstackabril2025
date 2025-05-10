import { useEffect, useState } from 'react';
import './alerta.css';

const Alerta = ({ children }) => {
  const [bgColorClass, setBgColorClass] = useState('alerta-red');

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColorClass(prev =>
        prev === 'alerta-red' ? 'alerta-yellow' : 'alerta-red'
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`alerta ${bgColorClass}`}>
      {children}
    </div>
  );
};

export default Alerta;
