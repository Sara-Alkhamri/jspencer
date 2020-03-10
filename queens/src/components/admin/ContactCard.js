import React from 'react';

const ContactCard = props => {

    return (
        <div>
            <h3>{props.firstName}{props.lastName}</h3>
            <p>Email: {props.email}</p>
            <p>{props.message}</p>
        </div>
    )

}

export default ContactCard;