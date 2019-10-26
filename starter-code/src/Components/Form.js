import React from 'react';
import FormField from './FormField'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ',',
      calories: 0,
      image: '',
      quantity: 0,
    }
  }

  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addNewMethod({ name: this.state.name, calories: this.state.calories, image: this.state.image, quantity: this.state.quantity });
    this.setState({ name: this.state.name, calories: this.state.calories, image: this.state.image, quantity: this.state.quantity })
    this.props.handleFormVisibility()
  }

  render() {

    return (
      <form onSubmit={this.handleFormSubmit} >
        <FormField onChange={this.handleChangeInput} label="Name" type="text" name="name" />
        <FormField onChange={this.handleChangeInput} label="Number of calories" type="number" name="calories" value={this.state.calories} />
        <FormField onChange={this.handleChangeInput} label="Image Link" type="text" name="name" value={this.state.image} />
        <button type="submit" className="button is-primary" >Submit</button>
      </form>

    )
  }
}

export default Form;