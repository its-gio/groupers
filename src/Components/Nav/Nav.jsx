import React from 'react';
import Entrance from './Entrance';
import Profile from './Profile';
import { connect } from 'react-redux';

function Nav(props) {
  return (
    <nav>
      <div><h1>Groupers</h1></div>
      { props.user.user_id ? <Profile user={props.user} /> : <Entrance /> }
    </nav>
  )
}

const mapStateToProps = (reduxState) => (reduxState)

export default connect(mapStateToProps, {})(Nav)