const express = require('express');
const app = express();
const PORT = 3000;

// 1. Middlewares globales (logging, contador, tiempo, bloqueo IP)

// Middleware que imprime la fecha y la URL
app.use((req, res, next) => {
    const fecha = new Date().toISOString();
    console.log(`[${fecha}] Solicitud a ${req.url}`);
    next();
});

// Variable global para contar las solicitudes
let contadorSolicitudes = 0;
app.use((req, res, next) => {
  contadorSolicitudes++;
  console.log(`Request count: ${contadorSolicitudes}`);
  next();
});

// Middleware para medir el tiempo de procesamiento
app.use((req, res, next) => {
  const inicio = Date.now();
  res.on('finish', () => {
    const fin = Date.now();
    const duracion = fin - inicio;
    console.log(`Response time for ${req.url}: ${duracion} ms`);
  });
  next();
});

// Middleware para bloquear IP específica
const ipBloqueada = '::1'; // Cambiar por IP
app.use((req, res, next) => {
  const ipCliente = req.ip || req.connection.remoteAddress;
  if (ipCliente === ipBloqueada) {
    console.log(`Blocked request from IP: ${ipCliente}`);
    return res.status(403).send('Access forbidden: Your IP is blocked');
  }
  next();
});

// 2. Middlewares específicos de ruta (como autenticación)
function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Access forbidden: No token provided');
  }
  next();
}

// 3. Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/privado', authMiddleware, (req, res) => {
  res.send('Access granted');
});

app.get('/publico', (req, res) => {
  res.send('Public route, no authentication needed');
});

// 4. Middleware de manejo de errores (siempre el último antes de listen)
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: true,
    mensaje: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
