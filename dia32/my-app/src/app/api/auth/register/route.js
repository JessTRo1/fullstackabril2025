import { hash } from 'bcryptjs';
import { connectDB } from '@/lib/mongoose';
import { User } from '@/models/user';

export async function POST(req) {
  await connectDB();
  const { email, password, isAdmin } = await req.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email y contraseña obligatorios' }), {
      status: 400,
    });
  }

  // Verificar si ya existe un usuario con ese email
  const usuarioExistente = await User.findOne({ email });
  if (usuarioExistente) {
    return new Response(JSON.stringify({ error: 'El usuario ya existe' }), {
      status: 400,
    });
  }

  // Hashear la contraseña
  const hashedPassword = await hash(password, 10);

  // Crear usuario
  const nuevoUsuario = await User.create({
    email,
    password: hashedPassword,
    isAdmin: isAdmin || false, 
  });

  return Response.json({
    mensaje: 'Usuario registrado correctamente',
    user: {
      id: nuevoUsuario._id,
      email: nuevoUsuario.email,
      isAdmin: nuevoUsuario.isAdmin,
    },
  });
}
