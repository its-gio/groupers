import React, { useState } from 'react';

function Entrance() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [register, setRegister] = useState({ fullname:'', email: '', password: '' });

  const handleChange = (e, form) => {
    if (form === "login") {
      setLogin({ ...login, [e.target.name]: e.target.value });
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
  }

  return (
    <>
      <ul className="entrance">
        <li>
          <span>Login</span>

          <form>
            <input onChange={(e) => handleChange(e, "login")} value={login.email} type="email" name="email" placeholder="email" required />
            <input onChange={(e) => handleChange(e, "login")} value={login.password} type="password" name="password" placeholder="password" required />
            <input type="submit"/>
          </form>
        </li>

        <li>
          <span>Register</span>

          <form>
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

export default Entrance;
