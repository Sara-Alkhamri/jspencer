import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="site-navbar-wrap">
            <div className="site-navbar site-navbar-target js-sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4">
                            <h1 className="my-0 site-logo"><a href="index.html">Jessica Spencer<span className="text-primary">.</span> </a></h1>
                         </div>
                         <div className="col-6 col-md-8">
                         <nav className="site-navigation text-right" role="navigation">
                         <div className="container">
                            <div className="d-inline-block d-lg-block ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black">
                                <span className="icon-menu h3"></span> <span className="menu-text">Menu</span>
                                </a></div>
                            <ul className="site-menu main-menu js-clone-nav d-none d-lg-none">
                                        <Link to="/" className="nav-link">
                                            Home
                                        </Link>
                                        <Link to="/about" className="nav-link">
                                            About
                                        </Link>
                                        <Link to="/podcasts" className="nav-link">
                                            Podcasts
                                        </Link>
                                        <Link to="/realty" className="nav-link">
                                            Realty
                                        </Link>
                                        <Link to="/contact" className="nav-link">
                                            Contact
                                        </Link>
                                        <Link to="login" className="nav-link">
                                            Admin login
                                        </Link>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Nav;