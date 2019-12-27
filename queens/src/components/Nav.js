import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-container">
            <div className="top-nav">
                <Link to="/" className="nav-item">
                    Home
                </Link>
                <Link to="/about" className="nav-item">
                    About
                </Link>
                <Link to="/podcasts" className="nav-item">
                    Podcasts
                </Link>
                <Link to="/realty" className="nav-item">
                    Realty
                </Link>
                <Link to="/contact" className="nav-item">
                    Contact
                </Link>
                
        
            </div>
        </div>
    )

}

export default Nav;