import React, { Component } from 'react'


export default class AddFoodForm extends Component {

  state = {
    name: "",
    calories: "",
    image: "",
    quantity: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state);
    this.setState({
        name: "",
        calories: "",
        image: "",
        quantity: 0
    })
  }

  handleChange = (e) => {
    const { value, name, type } = e.target;
 

    this.setState({
      ...this.state,
      [name]: value
      
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        
        <label>
          Name: <input type="text" value={this.state.name} name="name" onChange={e => this.handleChange(e)} />
        </label>

        <label>
          Calories: <input type="number" name="calories" value={this.state.calories} onChange={e => this.handleChange(e)} />
        </label>

        <label>
          Image: <input type="text" name="image" value={this.state.image} onChange={e => this.handleChange(e)} />
        </label>

        <input type="submit" value="Add food" />
      </form>
    )
  }
}