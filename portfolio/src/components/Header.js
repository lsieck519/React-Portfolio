import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

import headerimage from '../assets/CoverPhoto.jpg'

// header should contain navigation
// name should be in header 

function Header() {
  return (
    <div className="header">
      <div className="headerbody">
        <Navigation />
        <img id="headerimage" src={headerimage} alt="flowers" />
        <h1> Laura Sieck </h1>
        <hr></hr>
      </div>
    </div>
  );
}

export default Header;
