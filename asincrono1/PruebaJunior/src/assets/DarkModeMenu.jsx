
import React from "react";
import './DarkModeMenu.css'; 

function DarkModeMenu() {

    return (
        <div className="container__darkmode">
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
                <img src="../sofa_blanco.png" alt="sofa" className="container__sidegallery-image"></img>
            </div>
        </div>
    );
}

export default DarkModeMenu;