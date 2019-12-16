import React from 'react';
import jessica from '../assets/jessica.jpg'
import germaine from '../assets/germaine.jpeg'
function About() {
    return  (
        <div className="about-container">
            <div className="about-jessica">
                <img
                    className="jessica"
                    alt="jessica"
                    src={jessica}
                    
                />
                <p> Jessica Spencer is an Author, Radio host at KPFK 90.7 Los angeles. 
                    thiswayout.org co-anchor, Realtor and and an AKA
                </p>
            </div>

            <div className="about-germaine">
                <img
                    className="germaine"
                    alt="germaine"
                    src={germaine}
                />
            </div>
        </div>
    )
}

export default About;