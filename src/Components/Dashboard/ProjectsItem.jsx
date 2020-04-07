import React from 'react';
import NoImg from '../../imgs/No_image_available.svg'
import { Link } from 'react-router-dom';

function ProjectsItem(props) {
  return (
    <Link className="projects-inner--item-container__item" to={`/project/${props.project.project_id}`}>
      <div className="img-container">
        <img src={NoImg} alt="None Available"/>
      </div>

      <div className="content-container">
        <h6>{props.project.title}</h6>

        {props.project.fullname ? <span>by: {props.project.fullname}</span> : ""}
      </div>
    </Link>
  )
}

export default ProjectsItem;
