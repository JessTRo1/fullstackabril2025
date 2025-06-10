const Producto = require('../models/Producto');

// Obtener todos los productos
exports.obtenerTodos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Obtener un solo producto
exports.obtenerUno = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Crear un nuevo producto
exports.crear = async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear el producto' });
  }
};

// Actualizar un producto
exports.actualizar = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto
exports.eliminar = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
