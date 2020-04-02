import React from 'react';
import imgPlaceholder from "../../imgs/Portrait_Placeholder.png"


function ProfileImg(props) {
  return (
    <div>
      {
        props.profile_pic ?
        <img className="img-conatiner--img" src={props.profile_pic} alt="Placeholder"/> :
        <img className="img-conatiner--img" src={imgPlaceholder} alt="Placeholder"/>
      }
    </div>
  )
}

export default ProfileImg
