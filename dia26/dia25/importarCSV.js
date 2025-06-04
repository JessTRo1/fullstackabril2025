const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const Persona = require('./models/Persona');

mongoose.connect('mongodb+srv://jesustorresroman11:fEaG2Kfu2sd2GN0W@cluster0.qzyz26v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Conectado a MongoDB Atlas');

    const resultados = [];

    fs.createReadStream('./csv/persons.csv')
      .pipe(csv())
      .on('data', (data) => resultados.push(data))
      .on('end', async () => {
        try {
          await Persona.insertMany(resultados);
          console.log('Personas insertadas correctamente');
          mongoose.connection.close();
        } catch (err) {
          console.error('Error al insertar personas:', err);
        }
      });
  })
  .catch(err => console.error('Error de conexión:', err));
