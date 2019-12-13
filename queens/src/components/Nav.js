import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-container">
            <div className="top-nav">
                <BrowserRouter>
                <Link to="/" className="nav-item">
                    Home
                </Link>
                <a className="nav-item" href="#">
                    About
                </a>
                <Link to="/podcast" className="nav-item">
                    Podcast
                </Link>
                <Link to="/contact" className="nav-item">
                    Contact
                </Link>
                </BrowserRouter>
            </div>
        </div>
    )

}

export default Nav;