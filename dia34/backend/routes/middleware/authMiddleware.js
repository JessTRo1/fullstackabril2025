const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'mideseosecreto';

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = aouthHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    try {
        const user = jwt.verify(token, SECRET);
        req.user = user; // Guardar el usuario en la solicitud
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido' });
    }
}

module.exports = authMiddleware;
