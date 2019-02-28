import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  handleChange(event) {
    let { name, calories, image, quantity, value, src } = event.target;
    this.setState({
      [name]: value,
      [calories]: value,
      [image]: src,
      [quantity]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addMyFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: ""
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

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />

          <label>Image:</label>
          <input
            type="image"
            name="image"
            src={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
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
