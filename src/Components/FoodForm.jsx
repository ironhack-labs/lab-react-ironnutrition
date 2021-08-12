import React, { Component } from 'react';

class FoodForm extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    isVisible: false,
  };

  toggleForm = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  addFood = (event) => {
    event.preventDefault();
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };
    // execute the callback function, pass data to parent
    this.props.addNewFoodFn(newFood);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    //console.log(event.target.value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="foodFormWrapper">
        <button
          className="button is-small  is-outlined"
          onClick={this.toggleForm}
        >
          Add new food
        </button>

        {/* toggle form by changing the state isVisible */}
        <form
          onSubmit={this.addFood}
          style={{ display: this.state.isVisible ? 'block' : 'none' }}
        >
          <label>Name: </label>
          <input
            onChange={this.handleChange}
            name="name"
            className="input"
            type="text"
            placeholder="food name"
          />

          <label>Calories: </label>
          <input
            onChange={this.handleChange}
            name="calories"
            className="input"
            type="number"
          />

          <label>Image: </label>
          <input
            onChange={this.handleChange}
            name="image"
            className="input"
            type="text"
            placeholder="food image url"
          />

          <button className="button is-small  is-outlined">Submit</button>
        </form>
      </div>
    );
  }
}

export default FoodForm;
