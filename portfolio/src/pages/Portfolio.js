import React from 'react';
import { ProjectList } from "../helpers/Projects";
import ProjectTile from "../components/Project";
import '../styles/Portfolio.css';

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


// needs to include image of project
// title of project
// link to deployed app
// link to repo 
// include 6 projects 
// should be arranged as tiles 

