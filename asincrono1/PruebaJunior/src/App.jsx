import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./assets/Header";
import Product1 from "./assets/Product1";
import Product2 from "./assets/Product2";
import ProductIndex from "./assets/Footer";

function App() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const products = [Product1, Product2];
  const isScrolling = useRef(false);

  useEffect(() => {
    const onWheel = (event) => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 100);
      if (event.deltaY > 0) {
        setCurrentProduct(1); 
      } else if (event.deltaY < 0) {
        setCurrentProduct(0); 
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div className="Products">
        {React.createElement(products[currentProduct], { key: currentProduct })}
      </div>
      <ProductIndex
        activeIndex={currentProduct}
        setActiveIndex={setCurrentProduct}
      />
    </>
  );
}

export default App;