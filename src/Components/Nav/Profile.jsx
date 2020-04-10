import React from 'react';
import ProfileImg from './ProfileImg';
import { connect } from 'react-redux';

import { getLogout, deleteUser } from '../../redux/reducers/userReducer'


function Profile(props) {
  const handleDeleteAccount = () => {
    props.deleteUser();
    props.getLogout();
  }

  return (
    <div className="profile">
      <div className="profile--img-conatiner">
        <ProfileImg profile_pic={props.user.profile_pic} fullname={props.user.fullname} />
      </div>

      <ul className="profile--options">
        <li onClick={props.getLogout}>Logout</li>
        <li onClick={handleDeleteAccount} style={{ color: "red" }}>Delete Account</li>
      </ul>
    </div>
  )
}

export default connect(null, { getLogout, deleteUser })(Profile);