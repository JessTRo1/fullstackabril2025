const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
require('dotenv').config();

router.post('/register', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado' });
  } catch (error) {
    res.status(400).json({ error: 'Error en el registro' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email });

  if (!usuario) return res.status(400).json({ error: 'Credenciales inválidas' });

  const esValido = await bcrypt.compare(password, usuario.password);
  if (!esValido) return res.status(400).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign({ id: usuario._id, nombre: usuario.nombre }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

module.exports = router;
