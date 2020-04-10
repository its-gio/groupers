import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Entrance from './Entrance/Entrance';
import Profile from './Profile';
import { getSession } from '../../redux/reducers/userReducer'

function Nav(props) {
  useEffect(() => {
    props.getSession();
  }, []);

  return (
    <nav>
      <Link to="/"><h1>Groupers</h1></Link>
      { props.user.user_id ? <Profile user={props.user} /> : <Entrance /> }
    </nav>
  )
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user });

export default connect(mapStateToProps, { getSession })(Nav);