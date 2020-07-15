import React, { Component } from 'react';

class FoodForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: '',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.insertFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>{' '}
          <br></br>
          <label>
            Calories:
            <input
              name="calories"
              type="text"
              value={this.state.calories}
              onChange={this.handleInputChange}
            />
          </label>
          <br></br>
          <label>
            Image:
            <input
              name="image"
              type="img"
              value={this.state.image}
              onChange={this.handleInputChange}
            />
          </label>
          <br></br>
          <label>
            Quantity:
            <input
              name="quantity"
              type="number"
              checked={this.state.quantity}
              onChange={this.handleInputChange}
            />
          </label>
          <br></br>
          <br></br>
          <button>Send</button>
        </form>
      </>
    );
  }
}

export default FoodForm;
