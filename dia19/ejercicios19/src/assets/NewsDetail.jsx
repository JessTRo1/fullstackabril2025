import { useParams } from "react-router-dom";

const noticias = [
  { id: "1", titulo: "Noticia 1", contenido: "Noticia 1 detallada" },
  { id: "2", titulo: "Noticia 2", contenido: "Noticia 2 detallada" },
  { id: "3", titulo: "Noticia 3", contenido: "Noticia 3 detallada" }
];

function NewsDetail() {
  const { id } = useParams();
  const noticia = noticias.find(n => n.id === id);

  if (!noticia) {
    return (
      <div style={{ color: "red" }}>
        <h2>Error</h2>
        <p>Noticia no encontrada.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <p>{noticia.contenido}</p>
    </div>
  );
}
export default NewsDetail;