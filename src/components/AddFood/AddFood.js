import React, { Component } from 'react'

class AddFood extends Component {
  
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 1,
  }

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState( { [name]: value }  )
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newFood = this.state
    this.props.addFood(newFood)

    this.setState({
      name: '', 
      calories: 0, 
      image: ''})
  }
  
  render() {
    return (
      <form  onSubmit={this.handleSubmit}>

        <p className="is-size-4">Add a new food:</p>
        <br />

        <label>Food:</label>
        <input 
          type="text" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleInput} >
        </input>

        <br />
        <br />
        <label>Calories:</label>
        <input 
          type="text" 
          name="calories" 
          value={this.state.calories} 
          onChange={this.handleInput} >
        </input>

        <br />
        <br />
        <label>Image Url:</label>
        <input 
          type="text" 
          name="image" 
          value={this.state.image} 
          onChange={this.handleInput}>
        </input>

        <br />
        <br />
        <button className="button is-rounded is-info" type="submit">Add food</button>

      </form>
    )
  }
}

export default AddFood;
