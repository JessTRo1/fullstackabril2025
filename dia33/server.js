const express = require('express');
const config = require('config');

const app = express();
const PORT = config.get('port');

app.get('/', (req, res) => {
  res.send(`Entorno: ${process.env.NODE_ENV || 'development'}`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
