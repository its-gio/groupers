import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postRegister, postLogin } from '../../redux/reducers/userReducer'

function Entrance(props) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({ fullname:'', email: '', password: '' });

  const handleChange = (e, form) => {
    if (form === "login") {
      setLogin({ ...login, [e.target.name]: e.target.value });
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = (e, form) => {
    e.preventDefault();

    if (form === "login") {
      return props.postLogin(register);
    } else {
      return props.postRegister(register);
    }
  }

  return (
    <>
      <ul className="entrance">
        <li>
          <span>Login</span>

          <form onSubmit={(e) => handleSubmit(e, "login")}>
            <input onChange={(e) => handleChange(e, "login")} value={login.email} type="email" name="email" placeholder="email" required />
            <input onChange={(e) => handleChange(e, "login")} value={login.password} type="password" name="password" placeholder="password" required />
            <input type="submit"/>
          </form>
        </li>

        <li>
          <span>Register</span>

          <form onSubmit={(e) => handleSubmit(e, "register")}>
            <input onChange={(e) => handleChange(e, "register")} value={register.fullname} type="text" name="fullname" placeholder="fullname" required />
            <input type="file" name="profile_pic" />
            <input onChange={(e) => handleChange(e, "register")} value={register.email} type="email" name="email" placeholder="email" required />
            <input onChange={(e) => handleChange(e, "register")} value={register.password} type="password" name="password" placeholder="password" required />
            <input type="submit"/>
          </form>
        </li>
      </ul>
    </>
  )
}

export default connect(null, { postRegister, postLogin })(Entrance);
