import React from 'react';
import jessica from '../assets/jessica.jpg'
import germaine from '../assets/germaine.jpeg'
function About() {
    return  (
        <div className="about">
            <img
                className="jessica"
                alt="jessica"
                src={jessica}
            />
            <img
                className="germaine"
                alt="germaine"
                src={germaine}
            />
        </div>
    )
}

export default About;