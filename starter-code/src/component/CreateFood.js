import React, { Component } from "react";

export default class CreateFood extends Component {
  state = {
    name: "",
    calories: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <form>
          <input name="name" onChange={this.onChangeHandler} />
          <input name="calories" onChange={this.onChangeHandler} />

          <button name="submit" value="submit" onClick={this.onSubmit}>
            submit
          </button>
        </form>

        <p> { this.state.name } </p>

        <p> {this.state.calories } </p>
      </div>
    );
  }
}
