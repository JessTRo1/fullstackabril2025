import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas principales importadas
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Rutinas from './pages/Rutinas';
import Perfil from './pages/Perfil';
import RutinaDetalle from './pages/RutinaDetalle';
import Registro from './pages/Registro';
import CrearRutina from './pages/CrearRutina';
import EditarRutina from './pages/EditarRutina';

// Componentes de interfaz compartida
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'; // Componente para proteger rutas privadas

function App() {
  return (
    // Toda la app en el componente Router para habilitar navegación por rutas
    <Router>
      <div className="layout">
        {/* Navbar fijo */}
        <Navbar />

        {/* Contenido principal */}
        <main className="layout__main">
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* Rutas privadas protegidas: solo accesibles si hay sesión activa */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/rutinas"
              element={
                <PrivateRoute>
                  <Rutinas />
                </PrivateRoute>
              }
            />
            <Route
              path="/rutinas/crear"
              element={
                <PrivateRoute>
                  <CrearRutina />
                </PrivateRoute>
              }
            />
            <Route
              path="/rutinas/:id"
              element={
                <PrivateRoute>
                  <RutinaDetalle />
                </PrivateRoute>
              }
            />
            <Route
              path="/perfil"
              element={
                <PrivateRoute>
                  <Perfil />
                </PrivateRoute>
              }
            />
            <Route
              path="/rutinas/:id/editar"
              element={
                <PrivateRoute>
                  <EditarRutina />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer fijo */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
