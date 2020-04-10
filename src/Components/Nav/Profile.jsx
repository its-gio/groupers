import React, { useState } from 'react';
import ProfileImg from './ProfileImg';
import { connect } from 'react-redux';
import EditUser from '../Form/EditUser';

import { getLogout, deleteUser } from '../../redux/reducers/userReducer'

function Profile(props) {
  const [editForm, setEditForm] = useState(false)

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
        <li onClick={() => setEditForm(true)}>Edit</li>
        <li onClick={props.getLogout}>Logout</li>
        <li onClick={handleDeleteAccount} style={{ color: "red" }}>Delete Account</li>
      </ul>

      <div className={ editForm ? "profile--edit-user active" : "profile--edit-user"}>
        <EditUser setEditForm={setEditForm} />
      </div>
    </div>
  )
}

export default connect(null, { getLogout, deleteUser })(Profile);