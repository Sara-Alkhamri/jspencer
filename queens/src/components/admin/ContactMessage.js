import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ContactCard from './ContactCard';

const MessagesToReview = () => {
    const [messages, setMessages] = useState([{}]);

    const getMessage = () => {
        axiosWithAuth()
        .get('https://jspencer-be.herokuapp.com/contact/')
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            setMessages(res.data);
        })
        .catch(err => console.log(err.res))

    };

    useEffect(() => {
        getMessage()
    }, [])

return (
    <div className="site-section" id="contact-section">
        <div className="container">
            { (messages.length > 0) ? (messages.map(msg => (
                <ContactCard key={msg.id} id={msg.id} firstName={msg.firstName} lastName={msg.lastName} email={msg.email} message={msg.message}/>))) : (<p>There are no new messages at this time</p>)

            }
          
        </div>
    </div>
)

}


export default MessagesToReview;