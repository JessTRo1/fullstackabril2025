import React from "react";
import './Header.css';

function Header() {
    return (
        <header className="Navigation">
        <h1 className="Navigation__title">mater</h1>
        <div>
            <button className="Navigation__button">
                <span className="Navigation__item-top"></span>
                <span className="Navigation__item-middle"></span>
                <span className="Navigation__item-bottom"></span>
            </button>
        </div>
        </header>
    );
}

export default Header;