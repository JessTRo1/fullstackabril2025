import React from "react";
import './Product.css';

function Product1() {
    return (
       <><div className="container">
            <div className="container__product">
                <span className="container__product-designer">Michael W.Dreeben</span>
                <h2 className="container__product-title">Shell Dining Chair</h2>
                <p className="container__product-description">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                    Quisquam,
                    quos.
                </p>
            </div>
            <div className="container__gallery-first">
                <img src="../silla_negra.png" alt="silla" className="container__gallery-image" />
            </div>
        </div><button className="container__product-button">Product Details</button></>
 
    )
}

export default Product1;