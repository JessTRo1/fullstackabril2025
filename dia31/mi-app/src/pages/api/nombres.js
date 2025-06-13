import { obtenerNombres, añadirNombre, eliminarNombre } from '../../models/nombres';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ nombres: obtenerNombres() });
  }

  if (req.method === 'POST') {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: 'Falta el nombre' });

    const nuevo = añadirNombre(nombre);
    return res.status(200).json({ recibido: true, nuevo });
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: 'Falta el id' });

    const eliminado = eliminarNombre(id);
    return res.status(200).json({ eliminado });
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  res.status(405).end(`Método ${req.method} no permitido`);
}