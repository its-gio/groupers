import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Loading from '../Reusable/Loading';
import { getProjects } from '../../redux/reducers/projectsReducer';

function Dashboard(props) {
  useEffect(() => {
    props.getProjects();
  }, []);

  return (
    <div className="dashboard">
      <div className="banner">
        <div className="banner--inner">
          <h2>Get the brain juices going!</h2>
          <Link to="/project-form/"><button className="banner--inner__button">Got An Idea?</button></Link>
        </div>
      </div>

      <Loading loading={props.projects.loading} render={() => <Projects projects={props.projects.projects} />}/>
    </div>
  )
}

const mapStateToProps = reduxState => ({ projects: reduxState.projects });

export default connect(mapStateToProps, { getProjects })(Dashboard);