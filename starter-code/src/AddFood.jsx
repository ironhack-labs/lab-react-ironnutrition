import React, { Component } from 'react';
import FoodBox from './FoodBox';

class AddFood extends Component {

  state={
    name: '',
    calories: '',
    image: "",
    quantity: ''
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


  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }
  

  render(){
    return (
      <div>
    
      <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}/>

          <label>calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)}/>

          <label>Image:</label>
          <input type="file" name="image" checked={this.state.image} />
          
          <label>quantity:</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleQuantity(e)}/>
          
          <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default AddFood;