import React from 'react';
import Entrance from './Entrance';
import { connect } from 'react-redux';

function Nav() {
  return (
    <nav>
      <div><h1>Groupers</h1></div>
      <Entrance />
    </nav>
  )
}

const mapStateToProps = (reduxState) => (reduxState)

export default connect(mapStateToProps, {})(Nav)