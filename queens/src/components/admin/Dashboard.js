import React from 'react';
import ContactMessages from './ContactMessage'

function Dashboard() {

    return (
        <div className="site-section" id="contact-section">
            <div className="container">
            <span className="sub-title mb-2 d-block">Hello admin!</span>
                <h2 className="title text-primary mb-3">You've Got Mail!</h2>
                <ContactMessages />
            </div> 
    </div>
    )
    
}

export default Dashboard;