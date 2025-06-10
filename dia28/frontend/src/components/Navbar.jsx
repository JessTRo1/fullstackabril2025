import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar__logo">HOME</h1>
      <nav className="navbar__menu">
        <NavLink to="/" className="navbar__link">Inicio</NavLink>
        <NavLink to="/productos" className="navbar__link">Catálogo</NavLink>
        <NavLink to="/nuevo" className="navbar__link">Nuevo</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
