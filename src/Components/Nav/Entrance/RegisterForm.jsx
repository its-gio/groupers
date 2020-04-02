import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postRegister, postProfilePic } from '../../../redux/reducers/userReducer';

function RegisterForm(props) {
  const [register, setRegister] = useState({ fullname:'', email: '', password: '', profile_pic:'' });
  const [imgFile, setImgFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    UploadImg();
    return props.postRegister(register);
  }

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }

  const handleImgChange = (e) => {
    setImgFile(e.target.files[0]);
  }

  const UploadImg = () => {
    const formData = new FormData();
      formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
      formData.append("file", imgFile);
    
    props.postProfilePic(formData);
  }

  return (
    <li>
      <span>Register</span>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={register.fullname} type="text" name="fullname" placeholder="fullname" required />
        <input type="file" onChange={handleImgChange} name="profile_pic" />
        <input onChange={handleChange} value={register.email} type="email" name="email" placeholder="email" required />
        <input onChange={handleChange} value={register.password} type="password" name="password" placeholder="password" required />
        <input type="submit"/>
      </form>
    </li>
  )
}

const mapStateToProps = (reduxState) => ({ loading: reduxState.user.loading });

export default connect(mapStateToProps, { postRegister, postProfilePic })(RegisterForm);