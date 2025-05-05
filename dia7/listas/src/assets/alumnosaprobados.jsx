import React from "react";
import './alumnosaprobados.css';

const AlumnosAprobados = ({ alumnos}) => {

    const aprobados = alumnos.filter(alumno => alumno.nota >= 5);

    return (
        <div className="alumnos-aprobados">
            <h2 className="title">Alumnos aprobados</h2>
            <ul className="alumnos-lista">
                {aprobados.map((alumno, index) => (
                    <li key={index} className="alumno-item">{alumno.nombre} - {alumno.nota}</li>
                ))}
            </ul>
        </div>
    );
};

export default AlumnosAprobados;