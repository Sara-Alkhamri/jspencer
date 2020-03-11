import React from 'react';
import ContactMessages from './ContactMessage'
import { Link } from 'react-router-dom';


function Dashboard() {

    function logout() {
        localStorage.removeItem("token");
      }

    return (
        <div className="site-section" id="contact-section">
            <div className="container">

            <span className="sub-title mb-2 d-block">Hello Jessica!</span>
                <h2 className="title text-primary mb-3">You've Got Mail!</h2>
                <ContactMessages />
                <Link to="/" onClick={event => logout(event)} className="home-nav-item">
                    Logout
                </Link>
            </div> 
    </div>
    )
    
}

export default Dashboard;