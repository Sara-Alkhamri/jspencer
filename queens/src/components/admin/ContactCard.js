import React from 'react';

const ContactCard = props => {

    return (
        <div className="section-title text-center mb-5">
            <h3>{props.firstName} {props.lastName}</h3>
            <p>Email: {props.email}</p>
            <p>Message: {props.message}</p>
        </div>
    )

}

export default ContactCard;