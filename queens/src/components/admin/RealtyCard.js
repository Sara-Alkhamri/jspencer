import React from 'react';

const RealtyCard = (props) => {
    console.log(props)
    return (
        <div className="site-section" id="contact-section">
            <div className="col-lg-5 h-100 jm-sticky-top">
                <p>{props.id}</p>
                <img src={props.image}/>
                <button onClick={() =>  props.post(props.image) } className="btn btn-primary btn-md">Add Listing</button>
            </div>
        </div>
                      
    )
}

export default RealtyCard