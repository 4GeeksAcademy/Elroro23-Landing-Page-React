import React from "react";
const Footer = () => {
    return (
        <div className="container-fluid min-height-300 bg-secondary" style={{ marginBottom: "-20px", color: "white" }}>
            <div className="row flex-column text-left ms-5">
                <div className="col">
                    <a style={{ color: "white" }} href="#">About us</a>
                </div>
                <div className="col">
                    <a style={{ color: "white" }} href="#">Blog</a>
                </div>
                <div className="col">
                    <a style={{ color: "white" }} href="#">contact us</a>
                </div>
                <div className="col">
                    <p className="mb-1">Copyright &copy; your Website 2024</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;