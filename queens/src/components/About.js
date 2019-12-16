import React from 'react';
import jessica from '../assets/jessica.jpg'
function About() {
    return  (
        <div className="about">
            <img
                className="jessica"
                alt="jessica"
                src={jessica}
            />
        </div>
    )
}

export default About;