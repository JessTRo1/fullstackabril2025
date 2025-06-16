import { connectDB } from '@/lib/mongoose';
import { Item } from '@/models/item';

// GET 
export async function GET() {
  await connectDB();
  const items = await Item.find();
  return Response.json(items);
}

// POST 
export async function POST(req) {
  await connectDB();
  const body = await req.json();

  if (!body.nombre || typeof body.nombre !== 'string') {
    return new Response(JSON.stringify({ error: 'Nombre inválido' }), {
      status: 400
    });
  }

  const nuevoItem = await Item.create({ nombre: body.nombre });
  return Response.json(nuevoItem);
}
