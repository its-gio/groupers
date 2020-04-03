import React from 'react';
import ProfileImg from './ProfileImg';
import { connect } from 'react-redux';

import { getLogout } from '../../redux/reducers/userReducer'


function Profile(props) {
  return (
    <div className="profile">
      <div className="profile--img-conatiner">
        <ProfileImg profile_pic={props.user.profile_pic} />
      </div>

      <ul className="profile--options">
        <li onClick={props.getLogout}>Logout</li>
      </ul>
    </div>
  )
}

export default connect(null, { getLogout })(Profile);