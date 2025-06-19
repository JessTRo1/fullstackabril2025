const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const authMiddleware = require('./middleware/authMiddleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/users', userRoutes);

// Ruta protegida general (solo autenticados)
app.get('/api/protegido', authMiddleware, (req, res) => {
  res.json({ mensaje: `Hola ${req.user.email}, estás autenticado.` });
});

// Ruta de admin específica (solo admins)
app.get('/api/admin', authMiddleware, (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Solo administradores pueden acceder aquí.' });
  }
  res.json({ mensaje: 'Bienvenido al panel de administración' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
