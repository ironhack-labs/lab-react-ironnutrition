import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      quantity: "",
      calories: "",
      image: ""
    };
  }

  handleInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addFood(this.state);

    this.setState({
      name: "",
      quantity: "",
      calories: "",
      image: ""
    });
  }

  render() {
    return (
      <section className="AddFood">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name
            <input
              onChange={event => this.handleInput(event)}
              type="text"
              name="name"
              value={this.state.name}
              placeholder="burger"
            />
          </label>
          <label>
            Calories
            <input
              onChange={event => this.handleInput(event)}
              type="number"
              name="calories"
              value={this.state.calories}
              placeholder="400"
            />
          </label>
          <label>
            Quantity
            <input
              onChange={event => this.handleInput(event)}
              type="number"
              name="quantity"
              value={this.state.quantity}
              placeholder="3"
            />
          </label>
          <label>
            Image URL
            <input
              onChange={event => this.handleInput(event)}
              type="text"
              name="image"
              value={this.state.image}
              placeholder="something@something.something"
            />
          </label>

          <button>Add Food</button>
        </form>
      </section>
    );
  }
}

export default AddFood;
