import React, { Component } from 'react'

export default class ProjectForm extends Component {
  state = {
    // creator: ,
    title: "",
    description: "",
    difficulty: null,
    funded: false,
    start_time: null,
    end_time: null
  }

  handleChange = (e) => {
    if (e.target.type === 'checkbox') return this.setState({ [e.target.name]: e.target.checked });
    return this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="project-form">
        <h2>Add Project</h2>
        <form className="project-form--form">
          <input onChange={this.handleChange} value={this.state.title} type="text" name="title" placeholder="Title" required />
          <input onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Description" required />

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
          <input type="submit"/>
        </form>
      </div>
    )
  }
}