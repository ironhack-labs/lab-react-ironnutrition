import React, { Component } from 'react';
import "bulma/css/bulma.css"
import foods from "./foods.json"
import FoodBox from "./foodbox/FoodBox"

class App extends Component {
  state = {
    foodArr: foods,
    showForm: false
  }
  
  allFoods = () => {
    return this.state.foodArr.map((item,index) => {
      return (
        <FoodBox key={index} food={item}/>
      )
    })
  }

  handleSubmit = (e) => { //adds new food to foodArr
    e.preventDefault();
    this.toggleForm();
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      iamge: this.state.image
    };
    let newArr = [...this.state.foodArr]
    newArr.push(newFood)
    this.setState({
      foodArr: newArr
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Add Food</button>

        {this.state.showForm ?
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name"></input>
          <label htmlFor="calories">Calories: </label>
          <input onChange={this.handleChange} type="number" name="calories"></input>
          <label htmlFor="iamge">Image Link: </label>
          <input onChange={this.handleChange} type="text" name="image"></input>
          <button type="submit">Submit</button>
        </form>
        : null}

        {this.allFoods()}
      </div>
    );
  }
}

export default App;