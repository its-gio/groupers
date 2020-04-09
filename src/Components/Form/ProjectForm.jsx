import React, { Component } from 'react'
import { connect } from 'react-redux';

import Funded from './Funded';
import { postProjects, getProjects, postFormUnmount } from '../../redux/reducers/projectsReducer';

class ProjectForm extends Component {
  state = {
    postInfo: {
      creator: null,
      title: "",
      description: "",
      difficulty: null,
      funded: false,
      amount: null,
      start_time: null,
      end_time: null
    },
    status: null
  }

  componentWillMount() {
    this.props.postFormUnmount();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.postInfo.funded) return;

    if (this.props.user.user_id) {
      this.props.postProjects({ ...this.state.postInfo, creator: this.props.user.user_id})
    } else {
      this.props.postProjects(this.state.postInfo);
    }

    this.props.history.push('/');
  }

  handleChange = (e) => {
    if (e.target.type === 'checkbox') return this.setState({ postInfo: { ...this.state.postInfo, [e.target.name]: e.target.checked }});
    return this.setState({ postInfo: { ...this.state.postInfo, [e.target.name]: e.target.value }})
  }

  render() {
    return (
      <div className="project-form">
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit} className="project-form--form">
          <input onChange={this.handleChange} value={this.state.postInfo.title} type="text" name="title" placeholder="Title" required />
          <textarea onChange={this.handleChange} value={this.state.postInfo.description} type="text" name="description" placeholder="Description" required />

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
            <input type="checkbox" name="funded" checked={this.state.postInfo.funded} onChange={this.handleChange} />
          </div>

          { this.state.postInfo.funded ? <Funded changeAmount={this.handleChange} amount={this.state.postInfo.amount} /> : "" }

          <input disabled={this.state.postInfo.funded} type="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({ user: reduxState.user })

export default connect(mapStateToProps, { postProjects, getProjects, postFormUnmount })(ProjectForm)