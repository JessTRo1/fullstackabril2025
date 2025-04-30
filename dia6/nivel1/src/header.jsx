import React from 'react';
import './App.css';

const Header = ({ name, menu }) => { 
  return (
    <header>
      <h1>{name}</h1>
      {/* You might want to use the menu prop here later */}
      {menu && (
        <nav>
          {menu.map((item, index) => (
            <a key={index} href="#">{item}</a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;