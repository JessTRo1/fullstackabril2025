const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
  name: String,
  surname: String,
  edad: Number,
  birthdate: Date,
  email: String,
  esProfesor: Boolean
});

module.exports = mongoose.model('Alumno', alumnoSchema);
