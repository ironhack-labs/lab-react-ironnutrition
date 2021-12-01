import React from 'react';
import { Component } from 'react';

class NewFood extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: '',
    };
  }

  handleChange = (e) => {
    let { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addFood(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-movie-form">
        <label>
          Name:
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
          />
        </label>

        <label>
          Calories:
          <input
            onChange={this.handleChange}
            value={this.state.calories}
            type="number"
            name="calories"
          />
        </label>

        <label>
          Image:{' '}
          <input
            onChange={this.handleChange}
            value={this.state.image}
            type="text"
            name="image"
          />
        </label>

        <label>
          Quantity:{' '}
          <input
            onChange={this.handleChange}
            value={this.state.quantity}
            type="number"
            name="quantity"
          />
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default NewFood;
