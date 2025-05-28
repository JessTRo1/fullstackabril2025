import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const { darkMode, toggleTema } = useTheme();

    return (
        <nav className="Navegador">
            <Link to="/" className="Navegador__link"> Lecturas</Link>
            <Link to="/new-task" className="Navegador__link">  Nueva lectura</Link>
            <button onClick={toggleTema} className="Navegador__tema-btn">
                {darkMode ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </button>
        </nav>
    );
}

export default Navbar;