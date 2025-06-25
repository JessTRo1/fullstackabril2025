'use client';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/newPost.scss';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('La respuesta no es un array:', data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar esta publicación?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setPosts((prev) => prev.filter((post) => post._id !== id));
      } else {
        const error = await res.json();
        alert(error.error || 'Error al eliminar');
      }
    } catch (err) {
      console.error('Error al eliminar post:', err);
    }
  };

  return (
    <section className="posts">
      <h1 className="posts__title">Publicaciones</h1>
      <div className="posts__grid">
        {posts.map((post) => {
          const isOwner = user && post.authorId?._id === user.id;
          const isAdmin = user?.isAdmin;

          return (
            <article key={post._id} className="posts__card">
              <img
                src={post.imageBase64}
                alt={post.title}
                className="posts__image"
              />
              <h2 className="posts__card-title">{post.title}</h2>
              <p className="posts__card-content">{post.content}</p>
              <p className="posts__card-date">
                Creado: {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="posts__card-author">
                Autor: {post.authorId?.username || 'Anónimo'}
              </p>

              {(isOwner || isAdmin) && (
                <div className="posts__actions">
                  <button
                    className="posts__button edit"
                    onClick={() => router.push(`/posts/edit/${post._id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="posts__button delete"
                    onClick={() => handleDelete(post._id)}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {isAuthenticated && (
        <button
          className="posts__fab"
          onClick={() => router.push('/new-post')}
        >
          +
        </button>
      )}
    </section>
  );
}
