import React from "react";
import './header.css';

const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center">
                    <a href="/" 
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none fs-5">
                        Simple Task Board
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;