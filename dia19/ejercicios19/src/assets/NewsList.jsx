import { Link } from "react-router-dom";

const noticias = [
    { id: "1", titulo: "Noticia 1", resumen: "Resumen sobre Noticia 1" },
    { id: "2", titulo: "Noticia 2", resumen: "Resumen sobre Noticia 2" },
    { id: "3", titulo: "Noticia 3", resumen: "Resumen sobre Noticia 3" }
];

function NewsList() {
    return (
        <div>
            <h2>Noticias</h2>
            <ul>
                {noticias.map(noticia => (
                    <li key={noticia.id}>
                        <Link to={`/news/${noticia.id}`}>
                            <b>{noticia.titulo}</b>
                        </Link>
                        <p>{noticia.resumen}</p>

                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NewsList;