import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postLogin } from '../../../redux/reducers/userReducer'

function LoginForm(props) {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    return props.postLogin(login);
  }


  return (
    <li>
      <span>Login</span>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={login.email} type="email" name="email" placeholder="Email" required />
        <input onChange={handleChange} value={login.password} type="password" name="password" placeholder="Password" required />
        <input type="submit"/>
      </form>
    </li>
  )
}

export default connect(null, { postLogin })(LoginForm);
