import React from 'react';
import { Link , Route} from 'react-router-dom';
import About from './About'
import Podcast from './Podcast'
import Contact from './Contact'

function Nav() {
    return (
        <div className="nav-container">
            <div className="top-nav">
                <Link to="/" className="nav-item">
                    Home
                </Link>
                <Link to="/about" className="nav-item">
                    About
                </Link>
                <Link to="/podcast" className="nav-item">
                    Podcast
                </Link>
                <Link to="/contact" className="nav-item">
                    Contact
                </Link>
                {/* <Route path="/" component={Home}/> */}
        <Route path="/about" component={About}/> 
        <Route path="/podcast" component={Podcast}/>
        <Route path="/contact" component={Contact}/>
            </div>
        </div>
    )

}

export default Nav;