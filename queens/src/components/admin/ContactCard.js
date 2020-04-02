import React from 'react';

const ContactCard = props => {
    // console.log(props)

    return (
        <div className="site-section" id="contact-section">
        <div className="col-lg-5 h-100 jm-sticky-top">
            <h2>{props.firstName} {props.lastName}</h2>
            <p>{props.email}</p>
            <p>{props.message}</p>
            <button onClick={() => props.delete(props.id) } className="btn btn-primary btn-md">Delete</button>
        </div>
        </div>
    )

}

export default ContactCard;