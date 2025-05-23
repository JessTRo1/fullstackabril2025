import React from "react";
import './Header.css';
import { useState, useEffect } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem("darkMode");
        return stored === "true";
    });
    const toggleTheme = () => setDarkMode(prev => !prev);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const handleClick = () => {
        toggleTheme();
        document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode');
    }


    return (
        <div className={darkMode ? "app dark" : "app"}>
            <header className="Navigation">
                <h1 className="Navigation__title">mater</h1>
                <div>
                    <button className="Navigation__button"
                        darkMode={darkMode}
                        onToggle={toggleTheme}
                        onClick ={handleClick}>
                        <span className="Navigation__item-top"></span>
                        <span className="Navigation__item-middle"></span>
                        <span className="Navigation__item-bottom"></span>
                    </button>
                </div>
                <nav className="container__sidemenu">
                    <ul className="container__sidemenu-list">
                        <li className="container__sidemenu-item">
                            Collection
                            <ul className="container__submenu-list">
                                <li className="container__submenu-item">Furniture</li>
                                <li className="container__submenu-item">Lighting</li>
                                <li className="container__submenu-item">Accessories</li>
                            </ul>
                        </li>
                        <li className="container__sidemenu-item">Design</li>
                        <li className="container__sidemenu-item">Craftmanship</li>
                        <li className="container__sidemenu-item">Ethics</li>
                    </ul>
                </nav>
                <div className="container__sidegallery">
                    <img src="/sofa_blanco.png" alt="sofa" className="container__sidegallery-image" />
                </div>
            </header>
        </div >
    );
}

export default Header;