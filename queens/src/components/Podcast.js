import React from 'react';
import jess_bday from '../assets/jess_bday.jpg';
// import germaine from '../assets/germaine.jpeg';
// import instagram from '../assets/instagram.png';
import sacred_geometry from '../assets/sacred_geometry.png'
import jessica_2013 from '../assets/jessica_2013.jpeg'



function Podcast() {
   
    return (
        <div className="site-section" id="portfolio-section">
            <div className="container">
                <div className="row mb-5 ">
                    <div className="col-md-7 section-title text-center mx-auto">
                        <span className="sub-title mb-2 d-block">Recent Podcasts</span>
                        <h2 className="title text-primary mb-3">I love sharing my thoughts with you, check out some of my latest podcasts</h2>
                    </div>
                </div>
        
            <div className="row mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img 
                        className="img-fluid"
                        alt="jess-bday"
                        src={jess_bday}
                        />
                    {/* <img 
                    className="img-fluid"
                    alt="germaine"
                    src={germaine}
                    /> */}
                </div>
                <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
                    <h3>Acsended Queens</h3>

                    <p className="mb-4">Tune into these dope queens as they discuss spirituality, love, relationships, being queer, life and of course ascension.</p>
                    
                    <p className="mb-4">
                        <a href="https://www.instagram.com/ascendedqueens/" className="readmore">Follow us on instagram
                            {/* <img 
                                className="insta-btn" 
                                alt="insta-icon"
                                src={instagram}
                                width="60"
                                height="50"
                            /> */}
                        </a>
                    </p>

                <iframe title="intro" src="https://open.spotify.com/embed-podcast/episode/3fHT2V8wRnDMQYVWIqmc8H" width="50%" height="232" 
                frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe><br></br>
                </div>
            </div>
        <div className="row mb-5">
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <img 
                className="img-fluid"
                alt="jewel-img"
                src={sacred_geometry}
                width="350"
                height="300"
            />
          </div>
            <div className="col-lg-5 h-100 jm-sticky-top mr-auto order-2 order-lg-1">  
                <h3>Jewel Drop Wednesday's</h3> 
                <p className="mb-4">Every Wednesday, I drop some spirituality jewels on you via instagram.</p>
                <p className="mb-4"><a href="https://www.instagram.com/p/B2kyFVogY-c/" className="readmore">Listen Here</a></p>
            </div> 
       </div>                     
        <div className="row mb-5">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <img 
                    className="img-fluid"
                    alt="jessica_2013"
                    src={jessica_2013}
                    width="350"
                    height="350"
                />
            </div>
            <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
                <h3>Ascended Radio</h3> 
                <p className="mb-4">This show will provide intriguing and life transforming wisdom regarding the process of ascension or spiritual awakening in a simple and easily understood manner.</p>
                <p className="mb-4"><a href="https://www.blogtalkradio.com/ascended-radio" className="readmore">Listen Here</a></p>
                </div>   
            </div>
        </div>
    </div> 
    )
}

export default Podcast;

