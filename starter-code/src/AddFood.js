import React, { Component } from "react";

class AddFood extends Component {
  state = {
    name: '',
    calories:'',
    image: '',
    foods: []
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    console.log(name, value)
    this.setState({ [name]: value });
  }
  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.addFoodHandler(this.state)

  }


  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
          <input type="file" accept="image/*" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
        </div>
    )
      
  }


}