import React, { Component } from "react";

class AddNewFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  genericOnChange(event) {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.foodSubmit(this.state);

    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: ""
    });
  }

  render() {
    return (
      <section className="AddFood">
        <h2>Add Food</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.name}
              type="text"
              name="name"
            />
          </label>

          <label>
            Calories:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.title}
              type="number"
              name="calories"
            />
          </label>

          <label>
            Image:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.image}
              type="url"
              name="image"
            />
          </label>

          <label>
            Quantity:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.quantity}
              type="number"
              name="quantity"
            />
          </label>

          <button onClick={() => this.addFood}>Add Food</button>
        </form>
      </section>
    );
  }
}

export default AddNewFood;
