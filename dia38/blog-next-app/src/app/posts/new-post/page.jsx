'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/newPost.scss'; // Importa tu archivo de estilos

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const token = localStorage.getItem('token');

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, content, imageBase64: image })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error al crear la publicación');
        return;
      }

      router.push('/posts');
    } catch (err) {
      console.error(err);
      setError('Error del servidor');
    }
  };

  return (
    <section className="new-post">
      <h1 className="new-post__title">Nueva Publicación</h1>
      <form onSubmit={handleSubmit} className="new-post__form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="new-post__input"
          required
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="new-post__textarea"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="new-post__file"
          required
        />
        {error && <p className="new-post__error">{error}</p>}
        <button type="submit" className="new-post__button">Publicar</button>
      </form>
    </section>
  );
}
