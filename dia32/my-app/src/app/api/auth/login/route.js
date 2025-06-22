import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/mongoose';
import { User } from '@/models/user';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  // Validación básica
  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email y contraseña obligatorios' }), {
      status: 400,
    });
  }

  // Buscar usuario
  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), {
      status: 404,
    });
  }

  // Comparar contraseñas
  const match = await compare(password, user.password);
  if (!match) {
    return new Response(JSON.stringify({ error: 'Contraseña incorrecta' }), {
      status: 401,
    });
  }

  // Generar JWT
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  // Respuesta
  return Response.json({
    mensaje: 'Login exitoso',
    token,
    user: {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin
    }
  });
}
