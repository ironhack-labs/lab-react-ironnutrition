import React, { Component } from 'react';

class AddNewFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '',
  };

  handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value }); //"name" de cada "field" del formulario
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newFood = this.state;

    this.props.addNewFood(newFood);

    // Reset the form by resetting the values in the state
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: '',
    });


  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />

          <label>Calories: </label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <br />

          <label>Image: </label>
          <input
            type="url"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />
          <br />

          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleInput}
          />

          <br />
          <button type="submit">Add New Food</button>
        </form>
      </div>
    );
  }
}

export default AddNewFood;
