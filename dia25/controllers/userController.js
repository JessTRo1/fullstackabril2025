const { request } = require('http');
const User = require('../models/User');

//Crear Usuario
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const saved = await user.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener totos los Usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
    