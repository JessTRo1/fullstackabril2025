import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Post from '@/models/Post';
import User from '@/models/User'; 
import { verifyToken } from '@/lib/verifyToken';

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find()
      .populate('authorId', 'username') 
      .sort({ createdAt: -1 })
    return NextResponse.json(posts);
  } catch (error) {
     console.error('Error en GET /api/posts:', error);
    return NextResponse.json({ error: 'Error al obtener publicaciones' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const { title, content, imageBase64 } = await req.json();
    const token = req.headers.get('authorization')?.split(' ')[1];
    const user = verifyToken(token);

    if (!title || !content || !imageBase64) {
      return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
    }

    const newPost = new Post({
      title,
      content,
      imageBase64,
      authorId: user.id,
    });

    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    console.error('Error al crear post:', err);
    return NextResponse.json({ error: 'No se pudo crear la publicación' }, { status: 500 });
  }
}
