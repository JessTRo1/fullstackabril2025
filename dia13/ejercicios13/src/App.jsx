import CustomSlider from "./assets/slider.jsx";
import "./App.css";
import Carousel from "./assets/carrousel.jsx";
import Menu from "./assets/nav.jsx";
import React from 'react'
import SimpleSwiper from "./assets/sliderterceros.jsx";
import CarouselSwiper from "./assets/carrouselterceros.jsx";
import MenuDeslizante from "./assets/menuterceros.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <main>
      <CustomSlider />
      <Carousel />
      <SimpleSwiper />
      <CarouselSwiper />
      </main>
      <footer>
        <MenuDeslizante />
      </footer>
    </div >
  );
}

export default App;