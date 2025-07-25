// Vista detallada de una rutina individual, incluyendo comentarios y acciones según rol

import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ComentarioForm from '../components/ComentarioForm';
import { useAuth } from '../hooks/useAuth';

export default function RutinaDetalle() {
  const { id } = useParams(); // ID de la rutina desde la URL
  const [rutina, setRutina] = useState(null); // Datos de la rutina
  const [loading, setLoading] = useState(true); // Control de carga
  const [comentarioEditando, setComentarioEditando] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');
  const [rutinaHecha, setRutinaHecha] = useState(false); // Si el usuario marcó esta rutina como hecha

  const { token, user } = useAuth();
  const navigate = useNavigate();

  // Carga de datos inicial: rutina + rutinas hechas del usuario
  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const [rutinaRes, hechasRes] = await Promise.all([
          fetch(`http://localhost:5000/api/rutinas/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          }),
          fetch(`http://localhost:5000/api/user/rutinas-hechas`, {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        const rutinaData = await rutinaRes.json();
        const hechasData = await hechasRes.json();

        setRutina(rutinaData);
        setRutinaHecha(hechasData.some(r => r._id === id));
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar datos:', err);
        setLoading(false);
      }
    };

    fetchDatos();
  }, [id, token]);

  // Añadir nuevo comentario al estado local
  const handleAgregarComentario = (nuevoComentario) => {
    setRutina(prev => ({
      ...prev,
      comentarios: [...prev.comentarios, nuevoComentario],
    }));
  };

  // Eliminar comentario (si el usuario es dueño o admin)
  const handleEliminarComentario = async (comentarioId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/rutinas/${id}/comentarios/${comentarioId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setRutina(prev => ({
          ...prev,
          comentarios: prev.comentarios.filter(c => c._id !== comentarioId),
        }));
      }
    } catch (err) {
      console.error('Error al eliminar comentario:', err);
    }
  };

  // Comenzar edición de comentario
  const handleEditarComentario = (comentario) => {
    setComentarioEditando(comentario._id);
    setTextoEditado(comentario.texto);
  };

  // Guardar comentario editado
  const guardarComentarioEditado = async (comentarioId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/rutinas/${id}/comentarios/${comentarioId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ texto: textoEditado }),
      });

      if (res.ok) {
        const { comentario: actualizado } = await res.json();
        setRutina(prev => ({
          ...prev,
          comentarios: prev.comentarios.map(c =>
            c._id === comentarioId ? actualizado : c
          ),
        }));
        setComentarioEditando(null);
        setTextoEditado('');
      }
    } catch (err) {
      console.error('Error al guardar edición:', err);
    }
  };

  // Eliminar rutina completa (solo admin)
  const handleEliminarRutina = async () => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta rutina?');
    if (!confirmacion) return;

    try {
      const res = await fetch(`http://localhost:5000/api/rutinas/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error('Error al eliminar rutina');
      alert('Rutina eliminada con éxito');
      navigate('/rutinas');
    } catch (err) {
      alert(err.message);
    }
  };

  // Alternar "rutina hecha" por parte del usuario
  const toggleRutinaHecha = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/rutinas-hechas/${id}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });

      await res.json();
      setRutinaHecha(!rutinaHecha);
    } catch (err) {
      console.error('Error al marcar rutina:', err);
    }
  };

  if (loading) return <p className="text-muted">Cargando rutina...</p>;
  if (!rutina) return <p className="text-muted">Rutina no encontrada</p>;

  return (
    <div className="container rutina-detalle">
      <h2 className="rutina-detalle__titulo">{rutina.titulo}</h2>
      <img src={rutina.imagen} alt={rutina.titulo} className="rutina-detalle__imagen" />
      <p className="rutina-detalle__nivel">Nivel: {rutina.nivel}</p>
      <p className="rutina-detalle__descripcion">{rutina.descripcion}</p>

      {/* Checkbox para marcar rutina como hecha */}
      {token && (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={rutinaHecha}
              onChange={toggleRutinaHecha}
            />{' '}
            Marcar como hecha
          </label>
        </div>
      )}

      {/* Lista de ejercicios */}
      <h3 className="rutina-detalle__subtitulo">Ejercicios:</h3>
      <ul className="rutina-detalle__lista">
        {rutina.ejercicios.map((ej, index) => (
          <li key={index} className="rutina-detalle__item">{ej}</li>
        ))}
      </ul>

      {/* Sección de comentarios */}
      <h3 className="rutina-detalle__subtitulo">Comentarios:</h3>
      <ul className="rutina-detalle__comentarios">
        {rutina.comentarios.length === 0 ? (
          <li className="text-muted">No hay comentarios todavía.</li>
        ) : (
          rutina.comentarios.map((comentario) => (
            <li key={comentario._id} className="form-container">
              <strong className="rutina-detalle__autor">{comentario.nombreUsuario || 'Anónimo'}:</strong>{' '}
              {comentarioEditando === comentario._id ? (
                <>
                  <input
                    className="input"
                    type="text"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                  />
                  <button className="btn" onClick={() => guardarComentarioEditado(comentario._id)}>Guardar</button>
                  <button className="btn btn--cancelar" onClick={() => setComentarioEditando(null)}>Cancelar</button>
                </>
              ) : (
                <>
                  <span>{comentario.texto}</span>
                  {(user?.isAdmin || user?.userId === comentario.userId) && (
                    <span className="rutina-detalle__acciones">
                      <button className="btn" onClick={() => handleEditarComentario(comentario)}>Editar</button>
                      <button className="btn btn--eliminar" onClick={() => handleEliminarComentario(comentario._id)}>Eliminar</button>
                    </span>
                  )}
                </>
              )}
            </li>
          ))
        )}
      </ul>

      {/* Formulario de nuevo comentario */}
      {token && (
        <ComentarioForm
          rutinaId={id}
          token={token}
          onNuevoComentario={handleAgregarComentario}
        />
      )}

      {/* Acciones para el administrador */}
      {user?.isAdmin && (
        <div className="text-center m-2">
          <Link to={`/rutinas/${id}/editar`} className="btn">Editar rutina</Link>
          <button className="btn btn--eliminar" onClick={handleEliminarRutina}>Eliminar rutina</button>
        </div>
      )}
    </div>
  );
}
