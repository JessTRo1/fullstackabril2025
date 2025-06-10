import axios from 'axios';

const API_URL = 'http://localhost:3001/productos';

// Llamadas HTTP

export const getProductos = () => axios.get(API_URL);
export const getProducto = (id) => axios.get(`${API_URL}/${id}`);
export const crearProducto = (producto) => axios.post(API_URL, producto);
export const actualizarProducto = (id, producto) => axios.put(`${API_URL}/${id}`, producto);
export const eliminarProducto = (id) => axios.delete(`${API_URL}/${id}`);
