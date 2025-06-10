import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import NuevoProducto from './pages/NuevoProducto';
import EditPage from './pages/EditPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Catalogo />} />
          <Route path="nuevo" element={<NuevoProducto />} />
          <Route path="editar/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
