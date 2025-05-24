import React from "react";
import './Header.css';
import { useTheme } from "../ThemeContext";

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="Navigation">
            <h1 className="Navigation__title">mater</h1>
            <div>
                <button
                    className="Navigation__button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                    <span className="Navigation__item-top"></span>
                    <span className="Navigation__item-middle"></span>
                    <span className="Navigation__item-bottom"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
