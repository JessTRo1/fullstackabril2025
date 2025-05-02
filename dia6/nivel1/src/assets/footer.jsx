import React from "react";
import './footer.css';

const Footer = ({message}) => {
    return (
        <footer className="footer">
            <p>{message}</p>
        </footer>
    );
};

export default Footer;
