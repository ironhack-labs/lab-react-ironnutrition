import React, { Component } from "react";

class AddFoodForm extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: 0
    }
  }
  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleImageInput = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleQuantityInput = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);   
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: ''
    })  
  }

  render() {
    return (
      <div className="add-food-form">
         <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} />

            <label>Calories:</label>
            <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />

            <label>Image URL:</label>
            <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)} />
           
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFoodForm;
