import React from 'react';
import jessica from '../assets/jessica.jpg'

function About() {
    return  (
        <div className="site-section" id="about-section">
            <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6 mb-5">
                <img
                    className="img-fluid"
                    alt="jessica"
                    src={jessica}
                />
                </div>

            <div className="col-lg-5 ml-auto section-title">    
            <h2 className="title text-primary mb-3">About me</h2>
                <p className="mb-4"> Jessica Spencer is an Author, Radio host at KPFK 90.7 Los angeles. 
                    thiswayout.org co-anchor, Realtor in the greator Los Angeles area.
                </p>
                <div className="d-flex">
                <ul className="list-unstyled ul-check success mr-5">
                <li>Author</li>
                <li>Radio Host</li>
                <li>Podcastor</li>
                
              </ul>
              <ul className="list-unstyled ul-check success">
                <li>Realtor</li>
                <li>Healer</li>
                <li>A fool</li>
              </ul>
                    </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;