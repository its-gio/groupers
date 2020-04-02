import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Entrance() {
  return (
    <ul className="entrance">
      <LoginForm />
      <RegisterForm />
    </ul>
  )
}

export default Entrance;
