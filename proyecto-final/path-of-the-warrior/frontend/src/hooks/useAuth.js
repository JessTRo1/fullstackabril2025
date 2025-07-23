import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Custom hook que encapsula el acceso al contexto de autenticación.
// Permite a los componentes acceder a `user`, `token`, `login`, `logout`, etc.
export const useAuth = () => {
  return useContext(AuthContext);
};
