import React, { Component } from "react";

export default class AddFoodForm extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    isOnSubmit: false
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.clbk(this.state);
  };
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form
        style={{ display: this.props.status ? "block" : "none" }}
        className="form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <h2 className="App-title">Add new food form</h2>
        <label htmlFor="name">Name</label>
        <input className="input" type="text" id="name" name="name" required />
        <label htmlFor="calories">Calories</label>
        <input
          className="input"
          type="text"
          id="calories"
          name="calories"
          required
        />
        <label htmlFor="image">Image</label>
        <input className="input" type="text" id="image" name="image" required />
        <button className="button" onClick={this.submitForm}>
          Add!
        </button>
      </form>
    );
  }
}
