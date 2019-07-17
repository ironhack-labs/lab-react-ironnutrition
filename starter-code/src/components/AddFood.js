import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: 0,
      image: "https://i.ibb.co/C2gYGZx/photo-2019-07-17-16-25-29.jpg",
      quantity: 0
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: "nombre",
      calories: 0,
      image: "https://i.ibb.co/C2gYGZx/photo-2019-07-17-16-25-29.jpg",
      quantity: 0
    });
  };

  render() {
    return (
      <form onSubmit={e => this.handleFormSubmit(e)}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <br />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={this.state.calories}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <br />

        <label>Image:</label>
        <input className="image-height"
          type="text"
          name="image"
          checked={this.state.image}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <br />

        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={this.state.quantity}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <br />

        <input className="button is-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddFood;
