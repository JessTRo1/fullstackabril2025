import { createContext } from 'react';

// Contexto global de autenticación, que permite compartir información del usuario
// y token entre todos los componentes de la app.
export const AuthContext = createContext();
