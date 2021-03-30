import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    });

    this.setState({
      name: '',
      calories: 0,
      image: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="input"
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            value={this.state.name}
          />
          <label htmlFor="calories">Number of calories</label>
          <input
            className="input"
            onChange={this.handleChange}
            type="number"
            id="calories"
            name="calories"
            value={this.state.calories}
          />
          <label htmlFor="image">Image url</label>
          <input
            className="input"
            onChange={this.handleChange}
            type="text"
            id="image"
            name="image"
            value={this.state.image}
          />
          <button className="button mb-4" type="submit">
            Create food
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
