import express from 'express';
import fs from 'fs';
import { writeFile, unlink } from 'fs/promises';

const app = express();
const PORT = 3000;

// Middleware para leer JSON en el body

app.use(express.json());

// Endpoint base 
app.get('/', (req, res) => {
    res.send('Servidor Express en funcionamiento');     
});

// Endpoint 1: GET que muestre el contenido de un archivo

app.get('/leer', (req, res) => {
  fs.readFile('mensaje.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error al leer el archivo.');
    }
    res.send(`Contenido del archivo:\n${data}`);
  });
});

// Endpoint 2: POST que cree un archivo con contenido recibido
app.post('/crear', async (req, res) => {
  const { nombre, contenido } = req.body;

  if (!nombre || !contenido) {
    return res.status(400).send('Faltan campos: nombre o contenido');
  }

  try {
    await writeFile(nombre, contenido);
    res.send(`Archivo "${nombre}" creado con éxito.`);
  } catch (err) {
    res.status(500).send('Error al crear el archivo.');
  }
});

// Endpoint 3: DELETE que elimine un archivo

app.delete('/borrar/:nombre', async (req, res) => {
  const nombreArchivo = req.params.nombre;

  try {
    await unlink(nombreArchivo);
    res.send(`Archivo "${nombreArchivo}" eliminado con éxito.`);
  } catch (err) {
    res.status(500).send('Error al eliminar el archivo.');
  }
});

// Escuchar en puerto

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}/`);
});