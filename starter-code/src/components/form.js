import React, { Component } from "react";

class FormFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: {
        name: "",
        calories: "",
        image: "",
        quantity: ""
      }
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState(
      {
        food: {
          ...this.state.food,
          [name]: value
        }
      },
      () => {}
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addNewFood(this.state.food);
    this.setState({
      food: {
        name: "",
        calories: "",
        image: "",
        quantity: ""
      }
    });
    this.props.hiddenForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          {" "}
          Nombre:{" "}
          <input
            type="text"
            name="name"
            value={this.state.food.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          {" "}
          Calorias:{" "}
          <input
            type="text"
            name="calories"
            value={this.state.food.calories}
            onChange={this.handleChange}
          />
        </p>
        <p>
          {" "}
          Imagen:{" "}
          <input
            type="text"
            name="image"
            value={this.state.food.image}
            onChange={this.handleChange}
          />
        </p>
        <p>
          {" "}
          Cantidad:{" "}
          <input
            type="text"
            name="quantity"
            value={this.state.food.quantity}
            onChange={this.handleChange}
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

export default FormFood;
