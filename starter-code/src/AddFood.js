import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      quantity: ""
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="title" value={this.state.name} />

          <label>Calories:</label>
          <input type="text" name="director" value={this.state.calories} />

          <label>Quantity:</label>
          <input type="text" name="IMDbRating" value={this.state.quantity} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;
