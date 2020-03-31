import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/admin/Login'
import Dashboard from './components/admin/Dashboard'
import PrivateRoute from './components/admin/PrivateRoute'
import About from './components/About'
import Podcast from './components/Podcast'
import Realty from './components/Realty'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route } from 'react-router-dom';
import ContactConfirmation from './components/admin/ContactConfirmation';

function App() {
  return (
    <div className="site-wrap">
      {/* site-mobile-menu */}
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
       </div> 
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      
      <Route exact path="/submit" component={Contact} />
      <Route exact path="/contact-confirmation" component={ContactConfirmation} />
      <Route path="/about" component={About}/> 
      <Route path="/podcasts" component={Podcast}/>
      <Route path="/realty" component={Realty}/>
      <Footer />
    </div>
  );
}

export default App;
