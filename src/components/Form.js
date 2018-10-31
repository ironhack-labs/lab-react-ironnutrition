import React, { Component } from 'react'

class Form extends Component {

  state = {
    formValues: {
      name: '',
      calories: '',
      images: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const {formValues} = this.state;
    const {handleAddNew, handleClick} = this.props;
    handleAddNew(formValues);
    this.setState({
      formValues: {
        name: '',
        calories: '',
        images: '',
      }
    })
    handleClick();
  }

  handleEdit = event => {
    const {formValues} = this.state;
    switch (event.target.name) {
      case 'name':
        formValues.name = event.target.value;
        break;
      case 'calories':
        formValues.calories = event.target.value;
        break;
      default:
        formValues.image = event.target.value;
        break;
    }
    this.setState({
      formValues
    })
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name" className="label">Name</label>
        <input type="text" className="input" name="name" onChange={this.handleEdit} required/>
        <label htmlFor="calories" className="label">Calories</label>
        <input type="number" className="input" name="calories" min="0" onChange={this.handleEdit} required/>
        <label htmlFor="image" className="label">Image URL</label>
        <input type="text" className="input" name="image" onChange={this.handleEdit} required/>
        <input type="submit" className="button is-info" value="Add"/>
      </form>
    )
  }
}

export default Form;
