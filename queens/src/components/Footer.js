import React from 'react'
import Nav from '../components/Nav'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
       <div className="footer">
        <Nav />
        <div className="footer-icons">
                <a href="https://www.instagram.com/ascendedqueens/">
                        <img 
                            className="insta-btn" 
                            alt="insta-icon"
                            src={instagram}
                            width="50"
                            height="50"
                        />
                </a>

                <a href="https://www.linkedin.com/in/jessica-spencer-43187148/">
                    <img 
                        className="linkedin-btn"
                        alt="linkedin"
                        src={linkedin}
                        width="50"
                        height="50"
                    />
                </a>
            </div>
        </div>

        
    )
}

export default Footer;