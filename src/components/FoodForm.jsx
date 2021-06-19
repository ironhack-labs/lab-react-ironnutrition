import React from 'react';
import { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      calories: '',
    };
  }
  handleChange = (event) => {
    //to every change in the input will capture the input valued insert and store it
    console.log(event.target.name);
    this.setState({
      //the input store, through a setState become the new state from my object value.
      [event.target.name]: event.target.value,
      // [event.target.calories]: event.target.value,
      // [event.target.image]: event.target.value,
      // [event.target.quantity]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevent page to reload when pressing the button submit
    const foodToBeAdd = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };

    this.props.addFood(foodToBeAdd);
  };

  render() {
    return (
      <div>
        <form action="" method="get" onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <label>Calories</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="calories"
              value={this.state.calories}
            />
          </div>
          <div>
            <label>Image</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="image"
              value={this.state.image}
            />
          </div>
          <div>
            <button type="submit">Submit New Food</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FoodForm;
