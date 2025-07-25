const mongoose = require('mongoose');

// Definición del esquema para los usuarios
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '/avatars/avatar1.png' },
  isAdmin: { type: Boolean, default: false },
  rutinasHechas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rutina' }]

});

module.exports = mongoose.model('User', userSchema);
