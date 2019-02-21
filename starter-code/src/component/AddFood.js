import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };

    this.state = {};
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
      <section className="AddMovie">
        <h2>Add some FOOOOOD</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="cookies"
            />
          </label>
          <label>
            Calories:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.calories}
              type="text"
              name="calories"
              placeholder="a lot"
            />
          </label>
          <label>
            image:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.image}
              type="text"
              name="image"
              placeholder="https://example.com"
            />
          </label>
          <label>
            Quantity:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.quantity}
              type="number"
              name="quantity"
              placeholder="12"
            />
          </label>
          <button>Submit Food</button>
        </form>
      </section>
    );
  }
}

export default AddFood;
