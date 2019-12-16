import React from 'react';
import logo from '../assets/eye.png'
import Nav from './Nav'

function Header() {
    return (
        <div className="header">
            <img 
            className="eye-logo"
            alt="logo"
            src={logo}
            width="100"
            height="50"
            />
            <Nav />
        </div>
    )
}

export default Header;