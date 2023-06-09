import React from "react";
import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectTile({ title, image, repo, link }) {
    return (
      <div className="projectTile">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${image})` }}> </div>

          <h1 className="tiletitle"> {title} </h1>
          <ul>
            <li>
              <a href={repo} target="_blank" rel="noopener noreferrer" className="ghicon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            {/* <li>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li> */}
          </ul>
        </a>
      </div>
    );
}

export default ProjectTile;