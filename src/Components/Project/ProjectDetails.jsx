import React from 'react';
import { connect } from 'react-redux';

function ProjectDetails(props) {
  const { title, fullname, difficulty, description } = props.project
  return (
    <>
      <h2>{title}</h2>
      <h6>by: {fullname ? fullname : "Anon"}</h6>
      <div className="project--DD">
        <span>Description:</span>
        <span>Difficulty: {difficulty}</span>
      </div>
      <p>{description}</p>
    </>
  )
}

const mapStateToProps = (reduxState) => ({ project: reduxState.projects.projects[0] });

export default connect(mapStateToProps, {})(ProjectDetails);