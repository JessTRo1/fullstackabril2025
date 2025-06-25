import jwt from 'jsonwebtoken';

export function verifyToken(token) {
  if (!token) throw new Error('Token no proporcionado');
  return jwt.verify(token, process.env.JWT_SECRET);
}
