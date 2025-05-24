import React from "react";
import './DarkModeFooter.css';

function DarkModeFooter() {
    
    return (
        <footer className="product__index">
            <div className="product__index-first">
                <span className="product__index-nav-item">Home</span>
                <span className="product__index-nav-item">Shop</span>
            </div>
            <div className="product__index-second">
                <span className="product__index-nav-item">About</span>
                <span className="product__index-nav-item">News</span>
            </div>
            <div className="product__index-second">
                <span className="product__index-nav-item">Contact</span>
                <span className="product__index-nav-item">Care</span>
            </div>
            <div className="product__index-second">
                <span className="product__index-nav-item">Dealers</span>
                <span className="product__index-nav-item">Press</span>
            </div>
        </footer>
    );
}

export default DarkModeFooter;