import React from 'react';

const ContactCard = props => {

    return (
        <div className="section-title text-center mb-5">
            <h2>From: {props.firstName} {props.lastName}</h2>
            <p>Email: {props.email}</p>
            <p>Message: {props.message}</p>
        </div>
    )

}

export default ContactCard;