import React from 'react';
import imgPlaceholder from "../../imgs/Portrait_Placeholder.png"


function ProfileImg(props) {
  return (
    <>
      {
        props.profile_pic ?
        <img className="profile--img-conatiner" src={props.profile_pic} alt={`${props.fullname}'s beautiful mug!`}/> :
        <img className="profile--img-conatiner" src={imgPlaceholder} alt={`${props.fullname}'s Placeholder`}/>
      }
    </>
  )
}

export default ProfileImg
