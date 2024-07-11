import React from "react";

const Cards = ({ title, description, src, alt }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4 d-flex flex-column mb-5 text-center">
            <div className="card h-100 flex-grow-1 d-flex flex-column" style={{ border: "1px,solid,black" }}>
                <img src={src} className="card-img-top" alt={alt} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary mt-auto" style={{ width: "70%", marginLeft: "15%" }}>Click for more!</a>
                </div>
            </div>
        </div>


    );
};
export default Cards;