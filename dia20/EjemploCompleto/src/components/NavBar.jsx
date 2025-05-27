import { Link } from "react-router-dom";

function Navbar() {

  return (
        <nav className="Navegador">
            <Link to="/" className="Navegador__link"> Lecturas</Link>
            <Link to="/new-task" className="Navegador__link">  Nueva lectura</Link>
        </nav>
    );
}

export default Navbar;