import React, { useEffect } from 'react';
import Entrance from './Entrance/Entrance';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getSession } from '../../redux/reducers/userReducer'
import { Link } from 'react-router-dom';

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