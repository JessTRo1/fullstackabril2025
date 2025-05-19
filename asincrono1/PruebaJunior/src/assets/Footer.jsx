import React from 'react';
import './Footer.css';


function ProductIndex({ activeIndex, setActiveIndex }) {
    return (
         <footer className="product__index">
            <div
                className={`product__index-item-1${activeIndex === 0 ? ' index-item-active' : ''}`}
                onClick={() => setActiveIndex(0)}
            >
                <span className="product__index-number">01</span>
                <em className="product__index-title">Shell Dining Chair</em>
            </div>
            <div
                className={`product__index-item-2${activeIndex === 1 ? ' index-item-active' : ''}`}
                onClick={() => setActiveIndex(1)}
            >
                <span className="product__index-number">02</span>
                <em className="product__index-title">Dunes Anthracite Black</em>
            </div>
        </footer>
    );
}

export default ProductIndex;

