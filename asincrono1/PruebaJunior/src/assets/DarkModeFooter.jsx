import React from "react";
import './DarkModeFooter.css';

function DarkModeFooter() {
    const navSections = [
        ["Home", "Shop"],
        ["About", "News"],
        ["Contact", "Care"],
        ["Dealers", "Press"],
    ];

    return (
        <footer className="product__index">
            {navSections.map((section, idx) => (
                <div
                  className={
                    idx === 0
                      ? "product__index-first"
                      : "product__index-second"
                  }
                  key={idx}
                >
                    {section.map((item) => (
                        <span
                          className="product__index-nav-item"
                          key={item}
                        >
                          {item}
                        </span>
                    ))}
                </div>
            ))}
        </footer>
    );
}

export default DarkModeFooter;
