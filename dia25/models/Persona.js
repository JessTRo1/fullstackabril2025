const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  ciudad: String
});

module.exports = mongoose.model('Persona', personaSchema);