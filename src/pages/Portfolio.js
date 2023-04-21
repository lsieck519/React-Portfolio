import React from 'react';
import { ProjectList } from "../helpers/Projects";
import ProjectTile from "../components/Project";
import '../styles/Portfolio.css';


// include 6 projects 


function Portfolio() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Projects</h1>
      <div className="projectcontainer">
        <div className="projectList">
          {ProjectList.map((Project, key) => {
            return (
              <ProjectTile
                key={key}
                image={Project.image}
                title={Project.title}
                repo={Project.repo}
                link={Project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;



