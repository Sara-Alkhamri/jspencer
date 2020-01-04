import React from 'react';
import Carousel from 'nuka-carousel';

function Realty() {
    return (
    <div className="realty">
        <h2>Licensed Realtor at Keller Williams Realty, Inc.</h2>
        <p>Greator Los Angeles area</p>
        <p>Some of the homes I've sold: </p>
         {/* add carousel here */}
         <Carousel>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>


    </div>
    )
}

export default Realty;