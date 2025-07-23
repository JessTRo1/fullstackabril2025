// Formulario para crear una nueva rutina de entrenamiento
// Incluye título, descripción, nivel, imagen y ejercicios

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// Estados para los datos del formulario
export default function CrearRutina() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nivel, setNivel] = useState('principiante');
  const [imagen, setImagen] = useState('');
  const [ejercicios, setEjercicios] = useState(['']);
  const { token } = useAuth();
  const navigate = useNavigate();

  // Enviar la rutina al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación: al menos un ejercicio
    if (!ejercicios.some(ej => ej.trim() !== '')) {
      return alert('Añade al menos un ejercicio válido');
    }
    // Envío de datos al servidor
    try {
      const res = await fetch('http://localhost:5000/api/rutinas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ titulo, descripcion, nivel, imagen, ejercicios })
      });

      if (!res.ok) throw new Error('Error al crear rutina');

      navigate('/rutinas');
    } catch (err) {
      alert(err.message);
    }
  };
  // Actualizar ejercicios en tiempo real
  const actualizarEjercicio = (index, value) => {
    const nuevos = [...ejercicios];
    nuevos[index] = value;
    setEjercicios(nuevos);
  };
  // Añadir un nuevo campo de ejercicio
  const añadirEjercicio = () => {
    setEjercicios([...ejercicios, '']);
  };
  // Eliminar un ejercicio
  const eliminarEjercicio = (index) => {
    const nuevos = ejercicios.filter((_, i) => i !== index);
    setEjercicios(nuevos);
  };
  // Convertir imagen a base64 y guardarla en estado
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagen(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <h2>Crear nueva rutina</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          required
        />
        <textarea
          className="input"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          required
        />
        <select
          className="input"
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
        >
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="input"
        />

        {imagen && (
          <div className="text-center">
            <img
              src={imagen}
              alt="Previsualización"
              style={{ maxWidth: '200px', marginTop: '1rem', borderRadius: '0.5rem' }}
            />
          </div>
        )}

        <h4>Ejercicios:</h4>
        {ejercicios.map((ej, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input
              className="input"
              value={ej}
              onChange={(e) => actualizarEjercicio(idx, e.target.value)}
              placeholder={`Ejercicio ${idx + 1}`}
              required
            />
            {ejercicios.length > 1 && (
              <button
                type="button"
                onClick={() => eliminarEjercicio(idx)}
                className="btn btn--cancelar"
              >
                X
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={añadirEjercicio} className="btn btn--enlace">
          + Añadir ejercicio
        </button>

        <button type="submit" className="btn">Guardar rutina</button>
      </form>
    </div>
  );
}
