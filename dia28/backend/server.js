const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productoRoutes = require('./routes/productoRoutes'); // (Lo crearemos después)

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/productos', productoRoutes);

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' Conectado a MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error(' Error al conectar a MongoDB:', err);
  });
