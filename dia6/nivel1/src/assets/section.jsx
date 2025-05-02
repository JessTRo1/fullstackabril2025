import React from "react";

const Section = ({ title, paragraph }) => {
    return (
        <section className="section">
            <h2 className="main-title">{title}</h2>
            <p className="paragraph">{paragraph}</p> 
        </section>
    );
};

export default Section;