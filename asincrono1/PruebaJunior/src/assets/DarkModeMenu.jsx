import React, { useState } from "react";
import './DarkModeMenu.css';

function DarkModeMenu() {

    const [activeIndex, setActiveIndex] = useState(-1);

    const submenu = ["Furniture", "Lighting", "Accessories"];

    return (
        <div className="container__darkmode">
            <nav className="container__sidemenu">
                <ul className="container__sidemenu-list">
                    <li className="container__sidemenu-item">
                        Collection
                        <ul className="container__submenu-list">
                            {submenu.map((item, idx) => (
                                <li
                                    key={item}
                                    className={
                                        "container__submenu-item" +
                                        (activeIndex === idx ? " active" : "")
                                    }
                                    onMouseEnter={() => setActiveIndex(idx)}
                                    onMouseLeave={() => setActiveIndex(-1)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="container__sidemenu-item">Design</li>
                    <li className="container__sidemenu-item">Craftmanship</li>
                    <li className="container__sidemenu-item">Ethics</li>
                </ul>
            </nav>
            <div className="container__sidegallery">
                <img
                    src="../sofa_blanco.png"
                    alt="sofa"
                    className={
                        "container__sidegallery-image" +
                        (activeIndex === 0 ? " active" : "")
                    }
                />
            </div>
        </div>
    );
}

export default DarkModeMenu;
