import React from 'react';
import geometry from '../assets/geometry.jpg'


const Home = () => {
    return (
        <div className="home">
          
           <h1>Jessica Spencer</h1>
           <img 
            className="geometry"
            alt="geometry"
            src={geometry}
            width="300"
            height="300"
            />
            <p>Author, Radio host at KPFK 90.7 Los angeles. 
            thiswayout.org co-anchor, and Realtor.</p>
          
        </div>
    )
}

export default Home;