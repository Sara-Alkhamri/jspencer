import React from 'react';

const RealtyCard = (props) => {
    console.log(props)
    return (
            <div key={props.id} id={props.id}>
                <img className="img-fluid" alt="houses" src={props.image}/>
            </div>

                      
    )
}

export default RealtyCard