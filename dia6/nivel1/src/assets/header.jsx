import React from 'react';
import '../App.css';
import './header.css';

const Header = ({ name, menu }) => {
  return (
    <header>
      <h1>{name}</h1>
      {menu && (
        <nav>
          {menu.map((item, index) => (
            <a
              key={index}
              href=""
              className="menu-item"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;