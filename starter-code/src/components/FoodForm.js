import React, { Component } from "react";

export default class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: 0,
      image: "",
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.pushFood(this.state)
    this.setState({
      name: "",
      calories: 0,
      image: "",
    })
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

          <label>Number of calories:</label>
          <input
            type="number"
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
