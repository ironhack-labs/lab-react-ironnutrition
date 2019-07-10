import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image: "",
      calories: 0,
      quantity: 0
    };
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: "",
      image: "",
      calories: "",
      quantity: 1
    });
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

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            min="1"
            max="3000"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />

          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            min="1"
            max="10"
            value={this.state.quantity}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;
