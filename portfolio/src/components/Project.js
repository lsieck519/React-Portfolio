import React from "react";
import '../styles/Portfolio.css';

function ProjectTile({ title, image, repo, link }) {
    return (
      <div className="projectTile">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1 className="tiletitle"> {title} </h1>
        <ul>
          <li>
            <a href={repo}>GitHub</a>
          </li>
          <li>
            <a href={link}>{title}</a>
          </li>
          
        </ul>
      </div>
    );
}

export default ProjectTile;