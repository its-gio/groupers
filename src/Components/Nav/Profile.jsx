import React from 'react';
import ProfileImg from './ProfileImg';


function Profile(props) {
  return (
    <div className="profile">
      <div className="img-conatiner">
        <ProfileImg profile_pic={props.user.profile_pic} />
      </div>
    </div>
  )
}

export default Profile;