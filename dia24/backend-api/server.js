const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let items = [];

//  GET - Lista todos los elementos
app.get('/items', (req, res) => {
  res.json(items);
});

//  POST - Crear nuevo elemento
app.post('/items', (req, res) => {
  const { nombre } = req.body;
  const nuevo = { id: uuidv4(), nombre };
  items.push(nuevo);
  res.status(201).json(nuevo);
});

//  PUT - Editar un elemento por ID
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ error: 'No encontrado' });

  item.nombre = nombre;
  res.json(item);
});

//  DELETE - Eliminar por ID
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id === id);

  if (index === -1) return res.status(404).json({ error: 'No encontrado' });

  items.splice(index, 1);
  res.status(204).send(); // No content
});

//  Iniciar el servidor
app.listen(PORT, () => {
  console.log(`API funcionando en http://localhost:${PORT}`);
});
