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
            <h1>Ascended Queens</h1>
            <p>Tune into these 2 dope queens as they discuss spirituality, love, relationships, being queer, life & of course ascension.</p>
        </div>
    )
}

export default Header;