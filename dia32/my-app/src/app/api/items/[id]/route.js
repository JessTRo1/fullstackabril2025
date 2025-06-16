import { connectDB } from '@/lib/mongoose';
import { Item } from '@/models/item';

export async function GET(req, context) {
  await connectDB();
  const { id } = await context.params;

  const item = await Item.findById(id);
  if (!item) {
    return new Response(JSON.stringify({ error: 'Item no encontrado' }), {
      status: 404,
    });
  }
  return Response.json(item);
}

export async function PUT(req, context) {
  await connectDB();
  const { id } = await context.params;
  const body = await req.json();

  if (!body.nombre || typeof body.nombre !== 'string') {
    return new Response(JSON.stringify({ error: 'Nombre inválido' }), {
      status: 400
    });
  }

  const itemActualizado = await Item.findByIdAndUpdate(
    id,
    { nombre: body.nombre },
    { new: true }
  );

  if (!itemActualizado) {
    return new Response(JSON.stringify({ error: 'Item no encontrado' }), {
      status: 404,
    });
  }

  return Response.json(itemActualizado);
}

export async function DELETE(req, context) {
  await connectDB();
  const { id } = await context.params;

  try {
    const itemEliminado = await Item.findByIdAndDelete(id);

    if (!itemEliminado) {
      return new Response(JSON.stringify({ error: 'Item no encontrado' }), {
        status: 404,
      });
    }

    return Response.json(itemEliminado);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error al eliminar' }), {
      status: 500,
    });
  }
}
