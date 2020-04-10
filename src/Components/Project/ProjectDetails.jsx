import React from 'react';
import { connect } from 'react-redux';

function ProjectDetails(props) {
  const { title, fullname, difficulty, description, amount } = props.project
  return (
    <>
      <div className="project--header">
        <div className="project--header__title">
          <h2>{title}</h2>
          <h6>by: {fullname ? fullname : "Anon"}</h6>
        </div>

        { amount ? <h4>Amount: ${amount}</h4> : ''}
      </div>
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