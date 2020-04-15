import React, { Component } from "react";

class AddFoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleInput = (e) => {
    console.log(e.target.name);
    console.log(e);
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
          type="text"
          name="calories"
          value={calories}
          onChange={this.handleInput}
        />
        <label htmlFor="calories">image</label>
        <input
          id="image"
          type="text"
          name="image"
          value={image}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default AddFoodForm;
