import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Rutinas from './pages/Rutinas';
import Desafios from './pages/Desafios';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import RutinaDetalle from './pages/RutinaDetalle';
import Registro from './pages/Registro';
import CrearRutina from './pages/CrearRutina'; // Asegúrate de tener este archivo

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas protegidas */}
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
          path="/desafios"
          element={
            <PrivateRoute>
              <Desafios />
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
      </Routes>
    </Router>
  );
}

export default App;
