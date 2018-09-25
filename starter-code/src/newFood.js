import React, { Component } from "react";

class newFood extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: 1
  };
  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.addFood(e, { ...this.state })}>
          <div className="field">
            <label className="label">Name:</label>
            <input
              className="input"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Food"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="field">
            <label className="label">Calories:</label>
            <input
              className="input"
              type="text"
              name="calories"
              value={this.state.calories}
              placeholder="calories"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="field">
            <label className="label">Image:</label>
            <input
              className="input"
              type="text"
              name="image"
              value={this.state.image}
              placeholder="image"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default newFood;
