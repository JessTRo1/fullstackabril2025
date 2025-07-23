import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';                                // Componente principal con las rutas y páginas
import { AuthProvider } from './context/AuthProvider';  // Contexto global para manejar la autenticación en toda la app
import './styles/global.scss';                          // Estilos globales en SCSS 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
);
