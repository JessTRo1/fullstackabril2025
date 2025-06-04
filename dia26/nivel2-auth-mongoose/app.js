const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authmiddleware');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error de conexión:', err));

app.use('/api', authRoutes);

app.get('/dashboard', authMiddleware, (req, res) => {
  res.send(`Bienvenido, ${req.usuario.nombre}`);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
