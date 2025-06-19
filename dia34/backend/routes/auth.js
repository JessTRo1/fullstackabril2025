const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Datos simulados
const users = [
 { id: 1, email: 'admin@example.com', password: '1234', isAdmin: true },
  { id: 2, email: 'user@example.com', password: 'abcd', isAdmin: false }
];

const SECRET = process.env.JWT_SECRET || 'mideseosecreto';

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return res.status(401).json({ error: 'Credenciales incorrectas' });

  const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
