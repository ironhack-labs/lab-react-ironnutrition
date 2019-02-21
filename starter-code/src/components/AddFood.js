import React, { Component } from "react";

import "./AddFood.css";

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

  // onChange event methods needs to receive the event object
  // (contains information about the <input> tag)
  genericOnChange(event) {
    // event.target is the <input> tag that the onChange is connected to
    const { value, name } = event.target;
    // "value" is the text inside the <input> tag
    // "name" is the <input> tag's name attribute ("tittle", "director", etc.)

    // example: imagine that name = "director"
    // use the variable "name" to set the key of the object
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // prevent the default page refresh you get when you submit a form
    event.preventDefault();

    // save the new food in the array (UNDER CONSTRUCTION...)
    // (foodSubmit is the method PROP sent to us by MovieList)
    this.props.foodSubmit(this.state);

    // clear the form by setting the state back to initial values
    // (REMEMBER to use SET STATE)
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  render() {
    return (
      <section className="AddFood">
        <h2>Add Food</h2>

        {/* NO action and method on React forms
(use an onSubmit event instead to handle the submission) */}

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="pasta"
            />
          </label>

          <label>
            Calories:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.calories}
              type="number"
              name="calories"
              placeholder="400"
            />
          </label>

          <label>
            Image:
            <input
              // onChange captures user's typing
              onChange={event => this.genericOnChange(event)}
              // value sets initials text and allows us to reset the text
              value={this.state.image}
              type="url"
              name="image"
              placeholder="Image"
            />
          </label>

          <label>
            Quantity:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.quantity}
              type="number"
              name="quantity"
              placeholder="2"
            />
          </label>

          <button>Save</button>
        </form>
      </section>
    );
  }
}

export default AddFood;
