import React, { Component } from 'react';

export class AddFood extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="calories">Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;
