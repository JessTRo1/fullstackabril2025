import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComentarioForm from '../components/ComentarioForm';
import { useAuth } from '../hooks/useAuth';

export default function RutinaDetalle() {
  const { id } = useParams();
  const [rutina, setRutina] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comentarioEditando, setComentarioEditando] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');
  const { token, user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/api/rutinas/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setRutina(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar rutina:', err);
        setLoading(false);
      });
  }, [id, token]);

  const handleAgregarComentario = (nuevoComentario) => {
    setRutina(prev => ({
      ...prev,
      comentarios: [...prev.comentarios, nuevoComentario],
    }));
  };

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

  const handleEditarComentario = (comentario) => {
    setComentarioEditando(comentario._id);
    setTextoEditado(comentario.texto);
  };

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

  if (loading) return <p className="text-muted">Cargando rutina...</p>;
  if (!rutina) return <p className="text-muted">Rutina no encontrada</p>;

  return (
    <div className="container rutina-detalle">
      <h2 className="rutina-detalle__titulo">{rutina.titulo}</h2>
      <img src={rutina.imagen} alt={rutina.titulo} className="rutina-detalle__imagen" />
      <p className="rutina-detalle__nivel">Nivel: {rutina.nivel}</p>
      <p className="rutina-detalle__descripcion">{rutina.descripcion}</p>

      <h3 className="rutina-detalle__subtitulo">Ejercicios:</h3>
      <ul className="rutina-detalle__lista">
        {rutina.ejercicios.map((ej, index) => (
          <li key={index} className="rutina-detalle__item">{ej}</li>
        ))}
      </ul>

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

      {token && (
        <ComentarioForm
          rutinaId={id}
          token={token}
          onNuevoComentario={handleAgregarComentario}
        />
      )}
    </div>
  );
}
