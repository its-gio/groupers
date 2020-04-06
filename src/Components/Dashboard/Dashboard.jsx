import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/reducers/projectsReducer';
import Loading from '../Loading';
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

      <Loading loading={props.projects.loading} render={() => <Projects projects={props.projects.projects} />}/>
    </div>
  )
}

const mapStateToProps = reduxState => ({ projects: reduxState.projects });

export default connect(mapStateToProps, { getProjects })(Dashboard);