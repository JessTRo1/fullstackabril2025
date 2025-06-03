const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Crar Usuario
router.post('/', userController.createUser);

// Obtener todos los Usuarios
router.get('/', userController.getUsers);

module.exports = router;
