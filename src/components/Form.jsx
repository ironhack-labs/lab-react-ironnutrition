import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addMeal({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    });
  };

  handleChange = (event) => {
    const name = event.target.name;
    // console.log(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={this.handleChange}
          //   value={this.state.name}
        />
        <label htmlFor="calories">calories</label>
        <input
          id="calories"
          type="number"
          name="calories"
          onChange={this.handleChange}
          //   value={this.state.calories}
        />
        <label htmlFor="image">image link</label>
        <input
          id="image"
          type="text"
          name="image"
          onChange={this.handleChange}
          //   value={this.state.name}
        />
        <button>Submit</button>
      </form>
    );
  }
}
