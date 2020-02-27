import React, { Component } from "react";

// import shortid from "shortid";

class AddFoodButton extends Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  submitHandler = e => {
    e.preventDefault();

    let food = this.state;
    // food.id = shortid.generate();
    this.props.addFood(food);

    this.setState({ name: "", calories: 0, image: "" });
  };

  changeHandler = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Name</label>
          <input type='text' name='name' value={this.state.name} onChange={this.changeHandler} />
          <label>Calories</label>
          <input
            type='text'
            name='calories'
            value={this.state.calories}
            onChange={this.changeHandler}
          />
          <label>Image</label>
          <input type='text' name='image' value={this.state.image} onChange={this.changeHandler} />
          <button type='submit'>Add New Food</button>
        </form>
      </div>
    );
  }
}

export default AddFoodButton;
