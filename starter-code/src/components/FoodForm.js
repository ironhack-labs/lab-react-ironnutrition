import React, { Component } from 'react'
import shortid from 'shortid'

class FoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  }

  handleChange = (e) => {
    let {name, value} = e.target;

    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newFood = this.state;
    newFood.id = shortid.generate();

    this.props.addFood(newFood)
    this.props.showTheForm();

    this.setState({
      name: '',
      calories: '',
      image: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
          <label>Number of Calories</label>
          <input type='text' name='calories' value={this.state.calories} onChange={this.handleChange}></input>
          <label>Image</label>
          <input type='text' name='image' value={this.state.image} onChange={this.handleChange}></input>
          <button type='submit'>Add Food</button>
        </form>
      </div>
    )
  }
}

export default FoodForm