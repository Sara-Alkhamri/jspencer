import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Podcast from './components/Podcast'
import Realty from './components/Realty'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/> 
      <Route path="/podcast" component={Podcast}/>
      <Route path="/realty" component={Realty}/>
      <Route path="/contact" component={Contact}/>
      <Footer />
    </div>
  );
}

export default App;
