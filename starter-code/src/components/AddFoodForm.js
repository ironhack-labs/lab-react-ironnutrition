import React, { Component } from "react";

class AddFoodForm extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  }

  handleInput = (e) => {
    console.log(`Input ${e.target.name} value ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, calories, image } = this.state;
    return (
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInput}
        />
        <label htmlFor="calories">calories</label>
        <input
          id="calories"
          type="number"
          name="calories"
          value={calories}
          onChange={this.handleInput}
        />
        <label htmlFor="image">image</label>
        <input
          id="image"
          type="text"
          name="image"
          value={image}
          onChange={this.handleInput}
        />
        <button>Add Food</button>
      </div>
    );
  }
}

export default AddFoodForm;
