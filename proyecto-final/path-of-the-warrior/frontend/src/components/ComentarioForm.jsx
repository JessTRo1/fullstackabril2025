import { useState } from 'react';

// Componente para añadir un nuevo comentario a una rutina
export default function ComentarioForm({ rutinaId, onNuevoComentario, token }) {
  const [texto, setTexto] = useState('');         // Contenido del comentario
  const [mensaje, setMensaje] = useState('');     // Mensaje de confirmación o error

  // Envía el comentario al backend
  const enviarComentario = async (e) => {
    e.preventDefault();
    if (!texto.trim()) return; // Evita enviar comentarios vacíos

    try {
      const res = await fetch(`http://localhost:5000/api/rutinas/${rutinaId}/comentarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Verificación mediante JWT
        },
        body: JSON.stringify({ texto })     // Envío del texto en formato JSON
      });

      const data = await res.json();

      if (res.ok) {
        onNuevoComentario(data.comentario); // Actualiza los comentarios en el componente padre
        setTexto('');
        setMensaje('Comentario enviado');
      } else {
        setMensaje(data.msg || 'Error al comentar');
      }
    } catch (err) {
      console.error('Error al enviar comentario:', err);
      setMensaje('Error del servidor');
    }
  };

  return (
    <form className="form-container" onSubmit={enviarComentario}>
      <textarea
        className="input"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe tu comentario..."
        required
        rows={3}
      ></textarea>

      <button type="submit" className="btn">Comentar</button>

      {mensaje && <p className="text-muted">{mensaje}</p>}
    </form>
  );
}
