import React, { Component } from 'react';

class AddFood extends Component {
  state = {
    name: '',
    calories: '',
  };

  handleInput = (event) => {
    let { name, value } = event.target; // name of the field, value of the field
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    console.log(event);
    console.log('---------');
    // Prevent page reload
    event.preventDefault();

    // Take the value from the `state` object, send it to Food List
    const newFood = this.state;
    this.props.addFood(newFood);

    // Clear the form at the end, by resetting the `state`
    this.setState({ name: '', calories: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <h2>
            <strong>Add a food:</strong>
          </h2>

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          <br />

          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <br />

          <button type="submit">Create</button>
        </form>

        <br />
      </div>
    );
  }
}

export default AddFood;
