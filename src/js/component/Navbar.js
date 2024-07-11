import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container">
                <a className="navbar-brand" href="#" style={{ color: "white" }}>Start Boostrap</a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex ">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>Home</a>
                            <a className="nav-link" href="#" style={{ color: "white" }}>About</a>
                            <a className="nav-link" href="#" style={{ color: "white" }}>Services</a>
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" style={{ color: "white" }}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;