import React from 'react';
import ProfileImg from './ProfileImg';


function Profile(props) {
  return (
    <div className="profile">
      <div className="profile--img-conatiner">
        <ProfileImg profile_pic={props.user.profile_pic} />
      </div>

      <ul className="profile--options">
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default Profile;