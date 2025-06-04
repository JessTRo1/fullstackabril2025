const express = require('express');
const conectarDB = require('./config/db');

const app = express();

// Conectar a la base de datos
conectarDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando y conectado a MongoDB Altas');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});