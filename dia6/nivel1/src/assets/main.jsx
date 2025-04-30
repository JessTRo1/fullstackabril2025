import React from 'react';
import './main.css';

const Main = ({ title }) => {
  return (
    <main className="main-container">
      <h2 className="main-title">{title}</h2>
    </main>
  );
};

export default Main;