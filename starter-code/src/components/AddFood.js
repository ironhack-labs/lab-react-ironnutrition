import React, { Component } from "react";

// {
//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "quantity": 0
//   },
class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     this.props.addTheMovie(this.state);
  //     this.setState({
  //       name: "",
  //       calories: "",
  //       image: "",
  //       quantity: ""
  //     });
  //   };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addNewFood(this.state);
  };
  onFormFieldChange = event => {
    const inputName = event.target.name;
    this.setState({
      [inputName]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFormFieldChange}
          />
          <label>calories:</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.onFormFieldChange}
          />
          <label>image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.onFormFieldChange}
          />
          <label>quantity:</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.onFormFieldChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;
