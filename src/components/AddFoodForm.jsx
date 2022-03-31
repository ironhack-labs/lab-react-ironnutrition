import React, { Component } from 'react';

export default class AddFoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: 0,
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFoodHandler(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <input
          className="input"
          name="name"
          type="text"
          placeholder="Text input"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <label>Calories</label>
        <input
          className="input"
          type="text"
          name="calories"
          placeholder="Text input"
          value={this.state.calories}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <label>Image Url</label>
        <input
          className="input"
          type="text"
          name="image"
          placeholder="Text input"
          value={this.state.image}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button className="button"> submit </button>
      </form>
    );
  }
}
