import './Formulario.css';
import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Muy buenas, ${nombre}`);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;

