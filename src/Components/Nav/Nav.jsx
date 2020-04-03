import React, { useEffect } from 'react';
import Entrance from './Entrance/Entrance';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getSession } from '../../redux/reducers/userReducer'

function Nav(props) {
  useEffect(() => {
    props.getSession();
  }, []);

  return (
    <nav>
      <div><h1>Groupers</h1></div>
      { props.user.user_id ? <Profile user={props.user} /> : <Entrance /> }
    </nav>
  )
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user });

export default connect(mapStateToProps, { getSession })(Nav);