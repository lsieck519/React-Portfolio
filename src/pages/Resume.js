import React from 'react';
import '../styles/Resume.css';
import resume from '../assets/LauraSieckResume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// resume should be downloadable 

function Resume() {
  return (
    <div className="resume">
      <h1 className="resumeheader"> My Resume </h1>
      <div className="container">
        <div className="proficiencies">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>Git</li>
            <li>Python</li>
            <li>Tableau</li>
            <li>Excel</li>
            <li>Agile</li>
          </ul>
        </div>

        <h2>
          <a href={resume} target="blank" download>
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Resume;
