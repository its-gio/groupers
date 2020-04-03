import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/reducers/projectsReducer';
import Projects from './Projects';

function Dashboard(props) {
  useEffect(() => {
    props.getProjects();
  }, []);

  return (
    <div className="dashboard">
      <div className="banner">
        <div className="banner--inner">
          <h2>Get the brain juices going!</h2>
          <button>Got An Idea?</button>
        </div>
      </div>

      <Projects />
    </div>
  )
}

const mapStateToProps = reduxState => (reduxState);

export default connect(mapStateToProps, { getProjects })(Dashboard);