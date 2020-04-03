import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { postRegister } from '../../../redux/reducers/userReducer';

function RegisterForm(props) {
  const [register, setRegister] = useState({ fullname:'', email: '', password: '' });
  const [imgFile, setImgFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    UploadImg();
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

      axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData)
        .then(res => {
          const profile_pic = `https://res.cloudinary.com/dlhp14lpx/image/upload/q_auto:low,w_30,h_30,c_fill,g_face,r_5,f_auto/${res.data.public_id}`;
          return props.postRegister({...register, profile_pic });
        })
        .catch(err => console.error(err));
  }

  return (
    <li>
      <span>Register</span>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={register.fullname} type="text" name="fullname" placeholder="Fullname" required />
        <input type="file" onChange={handleImgChange} name="profile_pic" />
        <input onChange={handleChange} value={register.email} type="email" name="email" placeholder="Email" required />
        <input onChange={handleChange} value={register.password} type="password" name="password" placeholder="Password" required />
        <input type="submit"/>
      </form>
    </li>
  )
}

const mapStateToProps = (reduxState) => ({ loading: reduxState.user.loading });

export default connect(mapStateToProps, { postRegister })(RegisterForm);