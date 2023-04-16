import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import laura from '../assets/laura.jpg';

// this should be displayed by default 
// include an image of myself

function About() {
  return (
    <div className="about">
      <div className="aboutbody">
        <div className="image">
          <img id="laura" src={laura} alt="laura" />
        </div>
        <div className="container">
          <div className="container">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Link to="/projects">
            <button> My Projects </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;