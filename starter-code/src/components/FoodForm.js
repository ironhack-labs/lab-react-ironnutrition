import React, { Component } from "react";

export default class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addFood(this.state)
    this.setState({
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    })
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

          <label>Number of calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
