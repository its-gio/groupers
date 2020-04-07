import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ProjectDetails from './ProjectDetails';

import { getProjects } from '../../redux/reducers/projectsReducer';
import Loading from '../Reusable/Loading';

function Project(props) {
  useEffect(() => {
    props.getProjects(props.match.params.project_id)
  }, []);

  return (
    <div className="project">
      <Loading loading={props.loading} render={() => <ProjectDetails />}/>
    </div>
  )
}

const mapStateToProps = (reduxState) => ({ loading: reduxState.projects.loading });

export default connect(mapStateToProps, { getProjects })(Project);