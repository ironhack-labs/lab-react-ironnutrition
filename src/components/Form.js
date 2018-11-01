import React, { Component } from 'react'

class Form extends Component {

  state = {
    name: '',
    calories: '',
    images: '',
  }

  handleSubmit = event => {
    event.preventDefault();
    const {handleAddNew, handleClick} = this.props;
    handleAddNew(this.state);
    this.setState({
        name: '',
        calories: '',
        images: '',
    })
    handleClick();
  }

  handleEdit = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit} onChange={this.handleEdit}>
        <label htmlFor="name" className="label">Name</label>
        <input type="text" className="input" name="name" required/>
        <label htmlFor="calories" className="label">Calories</label>
        <input type="number" className="input" name="calories" min="0" required/>
        <label htmlFor="image" className="label">Image URL</label>
        <input type="text" className="input" name="images" required/>
        <input type="submit" className="button is-info" id="add-submit" value="Add"/>
      </form>
    )
  }
}

export default Form;
