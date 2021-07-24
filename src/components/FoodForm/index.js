import React, { Component } from 'react';

class FoodForm extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (event) => {
    let { name, value} = event.target
    this.setState({
      [name]: value
    });
  };

  handleSumit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: '',
      calories: 0,
      image: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSumit}>
        <input
          className="input m-1 p-1"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          placeholder="Food name"
        />
        <input
          className="input m-1 p-1"
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
          name="calories"
          placeholder="Calories"
        />
        <input
          className="input m-1 p-1"
          type="text"
          value={this.state.image}
          onChange={this.handleChange}
          name="image"
          placeholder="Imagem URL"
        />
        <button className="button" type="submit">
          {' '}
          Add{' '}
        </button>
      </form>
    );
  }
}

export default FoodForm;
