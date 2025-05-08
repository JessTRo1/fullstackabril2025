import React from "react";
import './empleados.css'

const empleados = ({ empleados }) => {
  const apellidos = empleados.sort((a, b) =>
    a.apellido.localeCompare(b.apellido)
  );
  const salarios = [...empleados].sort((a, b) => b.salario - a.salario);
  return (
    <div className="empleados-container">
      <h2 className="title">Listas de empleados</h2>
      <div className="empleados-apellido">
        <h2 className="title">Por apellido</h2>
        <ul className="empleados-lista">
          {apellidos.map((empleado) => (
            <li className="empleados-item" key={empleado.id}>
              {empleado.nombre} {empleado.apellido}
            </li>
          ))}
        </ul>
      </div>
      <div className="empleados-salario">
        <h2 className="title">Por salario</h2>
        <ul className="empleados-lista">
          {salarios.map((empleado) => (
            <li className="empleados-item" key={empleado.id}>
              {empleado.nombre} {empleado.apellido} {empleado.salario}€
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default empleados;