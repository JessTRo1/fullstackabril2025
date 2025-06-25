'use client';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './posts.scss';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  const handleEdit = (postId) => {
    router.push(`/posts/edit/${postId}`);
  };

  const handleDelete = async (postId) => {
    const confirmed = confirm('¿Estás seguro de eliminar esta publicación?');
    if (!confirmed) return;

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setPosts((prev) => prev.filter((post) => post._id !== postId));
      } else {
        console.error('Error al eliminar la publicación');
      }
    } catch (err) {
      console.error('Error en la petición de eliminar:', err);
    }
  };

  return (
    <section className="posts">
      <h1 className="posts__title">Publicaciones</h1>
      <div className="posts__grid">
        {Array.isArray(posts) && posts.map((post) => {
          const isAuthor = user?.id === post.authorId?._id;
          const isAdmin = user?.isAdmin;

          return (
            <article key={post._id} className="posts__card">
              <img src={post.imageBase64} alt={post.title} className="posts__image" />
              <h2 className="posts__card-title">{post.title}</h2>
              <p className="posts__card-content">{post.content}</p>
              <p className="posts__card-date">Creado: {new Date(post.createdAt).toLocaleDateString()}</p>
              <p className="posts__card-author">Autor: {post.authorId?.username || 'Anónimo'}</p>

              {isAuthenticated && (
                <div className="posts__actions">
                  {(isAuthor || isAdmin) && (
                    <button className="posts__button" onClick={() => handleEdit(post._id)}>Editar</button>
                  )}
                  {isAdmin && (
                    <button className="posts__button posts__button--danger" onClick={() => handleDelete(post._id)}>Eliminar</button>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
      {isAuthenticated && (
        <button
          className="posts__fab"
          onClick={() => router.push('/posts/new-post')}
        >
          +
        </button>
      )}

    </section>


  );
}
