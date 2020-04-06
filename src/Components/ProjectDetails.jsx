import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../redux/reducers/projectsReducer';

function ProjectDetails(props) {
  useEffect(() => {
    props.getProjects(props.match.params.project_id)
  }, []);

  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = (reduxState) => ({ project: reduxState.projects.projects, loading: reduxState.projects.loading });

export default connect(mapStateToProps, { getProjects })(ProjectDetails);