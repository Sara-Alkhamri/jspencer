import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Podcast from './components/Podcast'
import Contact from './components/Contact'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/> 
        <Route path="/podcast" component={Podcast}/>
        <Route path="/contact" component={Contact}/>
    </div>
  );
}

export default App;
