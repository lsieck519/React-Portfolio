import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';


function Navigation() {
  const [activePage, setActivePage] = useState('');
  return (
    <div className="navigation">
      <a href="/" className={activePage === 'about' ? 'active' : ''}>
        <Link to="/" onClick={() => setActivePage('about')}>
          ABOUT
        </Link>
      </a>
      <a href="/projects" className={activePage === 'projects' ? 'active' : ''}>
        <Link to="/projects" onClick={() => setActivePage('projects')}>
          PROJECTS
        </Link>
      </a>
      <a href="/contact" className={activePage === 'contact' ? 'active' : ''}>
        <Link to="/contact" onClick={() => setActivePage('contact')}>
          CONTACT
        </Link>
      </a>
      <a href="/resume" className={activePage === 'resume' ? 'active' : ''}>
        <Link to="/resume" onClick={() => setActivePage('resume')}>
          RESUME
        </Link>
      </a>
    </div>
  );
}

export default Navigation;
