import React, { Component } from 'react'
import { connect } from 'react-redux';

import Funded from './Funded';
import { postProjects, getProjects } from '../../redux/reducers/projectsReducer';

class ProjectForm extends Component {
  state = {
    creator: null,
    title: "",
    description: "",
    difficulty: null,
    funded: false,
    amount: null,
    start_time: null,
    end_time: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.funded) return;
    this.props.user.user_id ?
      this.props.postProjects({ ...this.state, creator: this.props.user.user_id}) :
      this.props.postProjects(this.state);
    this.props.history.push('/');
  }

  handleChange = (e) => {
    if (e.target.type === 'checkbox') return this.setState({ [e.target.name]: e.target.checked });
    return this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="project-form">
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit} className="project-form--form">
          <input onChange={this.handleChange} value={this.state.title} type="text" name="title" placeholder="Title" required />
          <textarea onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Description" required />

          <select onChange={this.handleChange} name='difficulty' required>
            <option disabled selected value="">Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Advanced">Advanced</option>
            <option value="Hard">Hard</option>
            <option value="Expert">Expert</option>
          </select>

          <div className="project-form--form__funded">
            <span>Funded</span>
            <input type="checkbox" name="funded" checked={this.state.funded} onChange={this.handleChange} />
          </div>

          { this.state.funded ? <Funded changeAmount={this.handleChange} amount={this.state.amount} /> : "" }

          <input disabled={this.state.funded} type="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({ user: reduxState.user })

export default connect(mapStateToProps, { postProjects, getProjects })(ProjectForm)