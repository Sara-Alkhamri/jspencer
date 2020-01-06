import React from 'react';
import jess_les from '../assets/jess_les.jpg'


const Home = () => {
    return (
        <div className="home">
           <h1>Jessica Spencer</h1>
           <img 
            className="home-jess-les"
            alt="jess-les"
            src={jess_les}
            width="350"
            height="300"
            />
            <p>Author, Radio host at KPFK 90.7 Los angeles. 
            thiswayout.org co-anchor, and Realtor.</p>
        </div>
    )
}

export default Home;