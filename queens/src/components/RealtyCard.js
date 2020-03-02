import React from 'react';

const RealtyCard = (props) => {
    console.log(props)
    return (
       <div>
           <div key={props.id} id={props.id}>
           <img src={props.image}/>
           </div>
       </div> 
    )
}

export default RealtyCard