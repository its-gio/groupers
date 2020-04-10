import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditUser extends Component {

  
  render() {
    return (
      <form className="profile--edit-user__form">
        <span onClick={() => this.props.setEditForm(false)} className="exit">X</span>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default connect(null, { })(EditUser);