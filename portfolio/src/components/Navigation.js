import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

// current selection should be highlighted

function Navigation() { 
  return (
    <div className="navigation">
        <Link to="/"> ABOUT </Link>
        <Link to="/projects"> PROJECTS </Link>
        <Link to="/resume"> RESUME </Link>
        <Link to="/contact"> CONTACT </Link>
    </div>
  );
}

export default Navigation;
