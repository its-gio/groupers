import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/reducers/projectsReducer';

function Dashboard(props) {
  useEffect(() => {
    props.getProjects();
  }, []);

  return (
    <div>
      Dashboard
    </div>
  )
}

const mapStateToProps = reduxState => (reduxState);

export default connect(mapStateToProps, { getProjects })(Dashboard);