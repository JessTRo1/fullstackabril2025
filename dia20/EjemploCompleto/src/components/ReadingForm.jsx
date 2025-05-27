import { useRef } from "react";
import { useReading } from "../context/ReadingContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function ReadingForm() {
  const { addLectura } = useReading();
  const refTitulo = useRef();
  const refAutor = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaLectura = {
      id: uuidv4(),
      titulo: refTitulo.current.value,
      autor: refAutor.current.value,
      completada: false,
    };

    addLectura(nuevaLectura);
    navigate("/");                  // redirige a home
  };

  return (
    <form onSubmit={handleSubmit} className="FormularioLectura">
      <label>
        Título:
        <input
          type="text"
          placeholder="Título"
          ref={refTitulo}
          required
          className="input"
        />
      </label>
      <label>
        Autor:
        <input
          type="text"
          placeholder="Autor"
          ref={refAutor}
          required
          className="input"
        />
      </label>
      <button type="submit" className="btn">Agregar lectura</button>
    </form>
  );
}

export default ReadingForm;
