import React, { Component } from "react";

export default class extends Component {
  state = { name: "", calories: 0, image: "", quantity: 0, status: false };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.clbk(this.state);
    this.changeStatus();
  };
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  changeStatus = evt => {
    this.setState({ status: !this.state.status });
  };

  render() {
    console.log(this.state.status);
    return this.state.status === false ? (
      <button onClick={this.changeStatus}>Add food!</button>
    ) : (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit} id="form">
        <label>Name</label>
        <input name="name" type="text" id="name" />
        <br></br>
        <label>Calories</label>
        <input name="calories" type="number" id="calories" />
        <br></br>
        <label>Image</label>
        <input name="image" type="text" id="image" />
        <button>Add</button>
        <br></br>
      </form>
    );
  }
}
