import "./slider.css";
import { useState, useEffect } from "react";
import React from 'react'

const images = [
    "https://picsum.photos/id/202/800/400", 
    "https://picsum.photos/id/203/800/400",  
    "https://picsum.photos/id/204/800/400", 
    "https://picsum.photos/id/205/800/400",  
];

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Funcion para avanczar al siguiente slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    // Funcion para retroceder al slide anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="slider">
            <div className="slides">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="indicators">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default CustomSlider;