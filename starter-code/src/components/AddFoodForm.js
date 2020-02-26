import React, { Component } from 'react'

export default class AddFoodForm extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newFood = this.state;
    this.props.addNewFood(newFood);

    this.setState({
      name: "",
      calories: 0,
      image: "",
      quantity: 0,
    });
  }

  takeValue = (e) => {
    let {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.takeValue} value={this.state.name}/>

          <label>Calories</label>
          <input type="number" name="calories" onChange={this.takeValue} value={this.state.calories}/>

          <label>Image</label>
          <input type="text" name="image" onChange={this.takeValue} value={this.state.image}/>

          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
