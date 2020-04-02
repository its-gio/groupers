import React from 'react';

function Entrance() {
  return (
    <>
      <ul className="entrance">
        <li>
          <span>Login</span>

          <form>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit"/>
          </form>
        </li>

        <li>
          <span>Register</span>

          <form>
            <input type="text" name="fullname" placeholder="fullname" />
            <input type="file" name="profile_pic" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit"/>
          </form>
        </li>
      </ul>
    </>
  )
}

export default Entrance;
