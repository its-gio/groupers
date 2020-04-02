import React, { useState } from 'react';
import ImgUpload from './ImgUpload';

import { postRegister } from '../../../redux/reducers/userReducer'
import { connect } from 'react-redux';

function RegisterForm(props) {
  const [register, setRegister] = useState({ fullname:'', email: '', password: '' });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    return props.postRegister(register);
  }

  return (
    <li>
      <span>Register</span>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={register.fullname} type="text" name="fullname" placeholder="fullname" required />
        <ImgUpload />
        <input onChange={handleChange} value={register.email} type="email" name="email" placeholder="email" required />
        <input onChange={handleChange} value={register.password} type="password" name="password" placeholder="password" required />
        <input type="submit"/>
      </form>
    </li>
  )
}

export default connect(null, { postRegister })(RegisterForm);