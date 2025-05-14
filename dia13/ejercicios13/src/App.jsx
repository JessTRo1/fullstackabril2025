import CustomSlider from "./assets/slider.jsx";
import "./App.css";
import Carousel from "./assets/carrousel.jsx";
import Menu from "./assets/nav.jsx";
import React from 'react'
import MySlider from "./assets/sliderterceros.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <CustomSlider />
      <Carousel />
      <MySlider />

    </div>
  );
}

export default App;