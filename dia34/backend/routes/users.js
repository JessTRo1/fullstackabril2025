// routes/users.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

let users = [
  { id: 1, email: 'admin@example.com', password: '1234', isAdmin: true },
  { id: 2, email: 'user@example.com', password: 'abcd', isAdmin: false }
];

// Middleware adicional para comprobar admin
function onlyAdmin(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Acceso solo para admins' });
  next();
}

// GET - listar todos
router.get('/', authMiddleware, onlyAdmin, (req, res) => {
  res.json(users);
});

// POST - crear
router.post('/', authMiddleware, onlyAdmin, (req, res) => {
  const { email, password, isAdmin } = req.body;
  const newUser = {
    id: Date.now(),
    email,
    password,
    isAdmin: !!isAdmin
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - editar
router.put('/:id', authMiddleware, onlyAdmin, (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'No encontrado' });

  Object.assign(user, req.body);
  res.json(user);
});

// DELETE - eliminar
router.delete('/:id', authMiddleware, onlyAdmin, (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.status(204).end();
});

module.exports = router;
