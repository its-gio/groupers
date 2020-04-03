import React from 'react';
import imgPlaceholder from "../../imgs/Portrait_Placeholder.png"


function ProfileImg(props) {
  return (
    <>
      {
        props.profile_pic ?
        <img className="profile--img-conatiner" src={props.profile_pic} alt="Placeholder"/> :
        <img className="profile--img-conatiner" src={imgPlaceholder} alt="Placeholder"/>
      }
    </>
  )
}

export default ProfileImg
