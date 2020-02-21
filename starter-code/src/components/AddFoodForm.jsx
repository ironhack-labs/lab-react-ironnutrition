import React, { Component } from "react";

export default class AddFoodForm extends Component {
  state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  };

  handleInput = e => {
    let { name, value, type } = e.target;
    if (type === "file") {
      const file = new FileReader();
      file.readAsDataURL(e.target.files[0]);
      file.addEventListener("loadend", e => {
        this.setState({
          image: file.result
        });
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addFood(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm} onChange={this.handleInput}>
          <input type="text" name="name" />
          <input type="text" name="calories" />
          <input type="file" name="image" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
