import React, { Component } from "react";

class AddFood extends Component {

  state = {
      name: "",
      calories: 0,
      image: "",
    };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
            className="input is-small"
          />

          <label>Calories:</label>
          <input
            name="calories"
            type="text"
            value={this.state.calories}
            onChange={(e) => this.handleChange(e)}
            className="input is-small"
          />

          <label>Image:</label>
          <input
            name="image"
            type="text"
            checked={this.state.image}
            onChange={(e) => this.handleChange(e)}
            className="input is-small"
          />

          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
