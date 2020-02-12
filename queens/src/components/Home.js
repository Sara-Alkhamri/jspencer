import React from 'react';
import jess_les from '../assets/jess_les.jpg'
import jess_bday from '../assets/jess_bday.jpg'


const Home = () => {
    return (
        // add loader
        <div className="site-blocks-cover" id="home-section">
            <div className="img-wrap">
                <div className="owl-carousel slide-one-item hero-slider">
                    <div className="slide">
                    <img 
                        alt="jess-bday"
                        src={jess_bday}
                        />
                    </div>
                    <div className="slide">
                    <img 
                        alt="jess-les"
                        src={jess_les}
                        />
                    </div>
                </div>
            </div>
        <div className="container">    
            <div className="row">
                <div className="col-md-6 ml-auto align-self-center">
                    <div className="intro">
                        <div className="text">
                            <p className="sub-text mb-5">Author, Radio host at KPFK 90.7 Los angeles. 
                            thiswayout.org co-anchor, and Realtor. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;