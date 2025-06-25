// Obtener un post por ID (GET)
export async function GET(req, { params }) {
  try {
    await connectDB();
    const post = await Post.findById(params.id);
    if (!post) {
      return NextResponse.json({ error: 'Publicación no encontrada' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ error: 'Error al obtener la publicación' }, { status: 500 });
  }
}

// Editar un post (PUT)
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const token = req.headers.get('authorization')?.split(' ')[1];
    const user = verifyToken(token);

    const { title, content, imageBase64 } = await req.json();

    const post = await Post.findById(params.id);

    if (!post) {
      return NextResponse.json({ error: 'Publicación no encontrada' }, { status: 404 });
    }

    if (post.authorId.toString() !== user.id && !user.isAdmin) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }


    post.title = title;
    post.content = content;
    if (imageBase64) post.imageBase64 = imageBase64;

    await post.save();
    return NextResponse.json(post);
  } catch (err) {
    console.error('Error al actualizar el post:', err);
    return NextResponse.json({ error: 'Error al actualizar la publicación' }, { status: 500 });
  }
}

// Eliminar un post (DELETE)
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const token = req.headers.get('authorization')?.split(' ')[1];
    const user = verifyToken(token);

    const post = await Post.findById(params.id);

    if (!post) {
      return NextResponse.json({ error: 'Publicación no encontrada' }, { status: 404 });
    }

    if (post.authorId.toString() !== user.id && !user.isAdmin) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }


    await Post.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Publicación eliminada' });
  } catch (err) {
    return NextResponse.json({ error: 'Error al eliminar la publicación' }, { status: 500 });
  }
} import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import { verifyToken } from '@/lib/verifyToken';