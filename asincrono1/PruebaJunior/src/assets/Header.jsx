import React from "react";
import './Header.css';

function Header() {
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    const handleCLick = () => {
        toggleDarkMode();
        document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode');
    }


    return (
        <header className="Navigation">
            <h1 className="Navigation__title">mater</h1>
            <div>
                <button className="Navigation__button" onClick={handleCLick}>
                    <span className="Navigation__item-top"></span>
                    <span className="Navigation__item-middle"></span>
                    <span className="Navigation__item-bottom"></span>
                </button>
            </div>
            <nav class="container__sidemenu">
                <ul class="container__sidemenu-list">
                    <li class="container__sidemenu-item">
                        Collection
                        <ul class="container__submenu-list">
                            <li class="container__submenu-item">Furniture</li>
                            <li class="container__submenu-item">Lighting</li>
                            <li class="container__submenu-item">Accessories</li>
                        </ul>
                    </li>
                    <li class="container__sidemenu-item">Design</li>
                    <li class="container__sidemenu-item">Craftmanship</li>
                    <li class="container__sidemenu-item">Ethics</li>
                </ul>
            </nav>
            <div class="container__sidegallery">
                <img src="/sofa_blanco.png" alt="sofa" class="container__sidegallery-image" />
            </div>
        </header>
    );
}

export default Header;