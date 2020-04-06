import React from 'react';
import ProjectsItem from './ProjectsItem';

function Projects(props) {
  const projectsMap = props.projects.map((project, i) => <ProjectsItem key={i} project={project} />)
  return (
    <div className="projects">
      <div className="projects--section-title">
        <h4>New Projects</h4>
        <span>more ></span>
      </div>

      <div className="projects--item-container__item">
        {projectsMap}
      </div>
    </div>
  )
}

export default Projects;