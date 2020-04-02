import React, { Component } from 'react'
import imgPlaceholder from "../../imgs/Portrait_Placeholder.png"

export default class Profile extends Component {
  render() {
    return (
      <div>
        <img src={imgPlaceholder} alt="Placeholder"/>
      </div>
    )
  }
}
