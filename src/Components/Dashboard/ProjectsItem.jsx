import React from 'react';
import NoImg from '../../imgs/No_image_available.svg'

function ProjectsItem(props) {
  return (
    <div className="projects--item-container__item">
      <div className="img-container">
        <img src={NoImg} alt="No Image Available"/>
      </div>

      <div className="content-container">
        <h6>{props.project.title}</h6>

        {props.project.creator ? <span>by: {props.project.creator}</span> : ""}
      </div>
    </div>
  )
}

export default ProjectsItem;
