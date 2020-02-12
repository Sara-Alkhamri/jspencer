import React from 'react';
import jessica from '../assets/jessica.jpg'

function About() {
    return  (
        <div className="site-section" id="about-section">
            <div className="container">
            <div class="row align-items-center">
            <div class="col-lg-6 mb-5">
                <img
                    className="img-fluid"
                    alt="jessica"
                    src={jessica}
                    
                />
                </div>

            <div class="col-lg-5 ml-auto section-title">    
            <h2 class="title text-primary mb-3">About me</h2>
                <p className="mb-4"> Jessica Spencer is an Author, Radio host at KPFK 90.7 Los angeles. 
                    thiswayout.org co-anchor, Realtor in the greator Los Angeles area.
                </p>
                <div class="d-flex">
                <ul class="list-unstyled ul-check success mr-5">
                <li>Design</li>
                <li>Development</li>
                <li>eCommerce</li>
                
              </ul>
              <ul class="list-unstyled ul-check success">
                
                <li>Mobile Apps</li>
                <li>Copywriting</li>
                <li>SEO</li>
              </ul>
                    </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;