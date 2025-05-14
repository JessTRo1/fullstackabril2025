import { useState } from "react";
import React from 'react'
import "./carrousel.css";

const images = [
    "https://picsum.photos/id/237/800/400", 
    "https://picsum.photos/id/238/800/400",  
    "https://picsum.photos/id/239/800/400", 
    "https://picsum.photos/id/240/800/400",  
    "https://picsum.photos/id/241/800/400",  
    "https://picsum.photos/id/242/800/400",  
];

const visibleSlides = 3;

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = images.length - visibleSlides;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    }
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }
    return (
        <div className="carousel">
            <button className="prev" onClick={prevSlide} disabled={currentIndex === 0}>
                &#10094;
            </button>
            <div className="carousel-container">
                {images.slice(currentIndex, currentIndex + visibleSlides).map((image, index) => (
                    <div
                        key={index}
                        className="carrousel-slide"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
            <button className="next" onClick={nextSlide} disabled={currentIndex === maxIndex}>
                &#10095;
            </button>
        </div>
    )
}