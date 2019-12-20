import React from 'react';
import geometry from '../assets/geometry.jpg'


const Home = () => {
    return (
        <div className="home">
          
           <h1>Ascended Queens</h1>
           <img 
            className="geometry"
            alt="geometry"
            src={geometry}
            width="300"
            height="300"
            />
            <p>Tune into these 2 dope queens as they discuss spirituality, love, relationships, being queer, 
                life & of course ascension.</p>
          
        </div>
    )
}

export default Home;