import React from 'react';

const RealtyCard = (props) => {
    console.log(props)
    return (
            <div key={props.id} id={props.id}>
                <img className="img-fluid" alt="houses" src={props.image}/>
                <button onClick={() => props.post(props.image) } className="btn btn-primary btn-md">Add Listing</button>
            </div>

                      
    )
}

export default RealtyCard