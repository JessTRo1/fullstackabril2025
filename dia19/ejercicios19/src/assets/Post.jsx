import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setPost(null);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Post no encontrado");
                return res.json();
            })
            .then(data => setPost(data))
            .catch(err => setError(err.message));
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!post) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p><b>ID:</b> {post.id}</p>
        </div>
    )
}

export default Post;
