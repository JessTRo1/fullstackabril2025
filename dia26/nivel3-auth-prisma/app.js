const express = require('express');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);

app.get('/dashboard', authMiddleware, (req, res) => {
  res.send(`Bienvenido, ${req.usuario.nombre}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
