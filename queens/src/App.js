import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Podcast from './components/Podcast'
import Contact from './components/Contact'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Home />
    </div>
  );
}

export default App;
