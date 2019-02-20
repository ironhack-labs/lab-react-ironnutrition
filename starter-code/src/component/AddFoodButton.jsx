import React from "react";
import "./AddFoodButton.css";

export default class AddFoodButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      calories: 0,
      quantity: 0,
      open: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state
    });
    this.props.functionProp(this.state);
  };

  handleImageInput = e => {
    this.setState({
      image: e.target.value
    });
  };

  handleNameInput = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleCaloriesInput = e => {
    this.setState({
      calories: e.target.value
    });
  };

  handleQuantityInput = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.props.children}><label>Image</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={e => this.handleImageInput(e)}
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleNameInput(e)}
          />
          <label>Calories</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleCaloriesInput(e)}
          />
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={e => this.handleQuantityInput(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
