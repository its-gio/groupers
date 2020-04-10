import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditUser extends Component {
  state = {
    fullname: '',
    email: ''
  }

  componentDidMount() {
    const { fullname, email } = this.props.user;
    this.setState({ fullname, email });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form className="profile--edit-user__form">
        <span onClick={() => this.props.setEditForm(false)} className="exit">X</span>
        <input onChange={this.handleChange} type="text" name="fullname" value={this.state.fullname} placeholder="Full Name" />
        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = reduxState => ({ user: reduxState.user })

export default connect(mapStateToProps, { })(EditUser);