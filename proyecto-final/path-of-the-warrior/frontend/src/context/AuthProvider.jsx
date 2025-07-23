import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

// Proveedor del contexto de autenticación
// Maneja el estado global del usuario y el token, y lo expone al resto de la app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Al cargar la app, intenta recuperar el usuario y token desde localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  // Función de login: guarda usuario y token en estado y localStorage
  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', jwtToken);
  };

  // Función de logout: borra usuario y token del estado y del almacenamiento local
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Provee a los hijos el contexto con el usuario, token y funciones para login/logout
  return (
    <AuthContext.Provider value={{ user, token, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
