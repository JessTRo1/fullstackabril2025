import React from 'react';
import './tarjeta.css'

const Tarjeta = ({ children }) => {
  return (
    <section className="section">
      {children}
    </section>
  );
};

export default Tarjeta;
