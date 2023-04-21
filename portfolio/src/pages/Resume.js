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
      <p></p>
      <h2>
        <a href={resume} target="blank" download>
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </h2>
    </div>
  );
}

export default Resume;
