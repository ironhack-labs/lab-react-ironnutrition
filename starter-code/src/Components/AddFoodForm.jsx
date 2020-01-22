import React, { Component } from 'react';

class AddFoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: 0,
      imageUrl: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Name:
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label>
      calories
        <input name="calories" type="text" value={this.state.calories} onChange={this.handleChange} />
      </label>
      <label>
      URL da imagem
        <input name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange} />
      </label>
      <input type="submit"/>
      </form>
    )
  }
}

export default AddFoodForm;