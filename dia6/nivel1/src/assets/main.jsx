import React from 'react';
import './main.css';
import Calculator from '../../../../dia5/mi-calculadora/src/calculator.jsx';
import '../../../../dia5/mi-calculadora/src/index.css';
import Section from './section.jsx';
import Button from './button.jsx';

const Main = ({ title }) => {

  const handleClick = () => {
    alert('Has clicado el botón. Que listo eres');
  }

  return (
    <main className="main-container">
      <h2 className="main-title">{title}</h2>
      <Calculator />
      <Section 
        title="Sección 1" 
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." 
      />
      <Button 
        text="Click aquí!" 
        onClick={handleClick}
      />
    </main>
  );
};

export default Main;