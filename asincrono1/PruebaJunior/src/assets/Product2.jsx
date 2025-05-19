import React from "react";
import './Product.css';

function Product2() {
    return (
       <><div className="container">
            <div className="container__product">
                <span className="container__product-designer">Jeaper K.Thomas</span>
                <h2 className="container__product-title">Dunes Anthracite Black</h2>
                <p className="container__product-description">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                    Quisquam,
                    quos.
                </p>
            </div>
            <div className="container__gallery-first">
                <img src="../mesa_negra.png" alt="silla" className="container__gallery-image" />
            </div>
        </div><button className="container__product-button">Product Details</button></>
 
    )
}

export default Product2;