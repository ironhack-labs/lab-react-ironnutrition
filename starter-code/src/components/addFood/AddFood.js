import React, { Component } from 'react';
import foods from '../../foods.json';
import './AddFood.css';

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    }
    this.addText = this.addText.bind(this);
    this.addFood = this.addFood.bind(this);
  }

    addText (e) {
      const { name, value } = e.currentTarget;
      this.setState({
        [name]: value
      })
    }

    addFood(e) {
      e.preventDefault();
      this.props.updateState(this.props.foodArray.concat(this.state));
    } 

  render () {
    return (
      <div>
        <form onSubmit={this.addFood}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.addText} />

          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={this.addText} />
          
          <label>Image:</label>
          <input type="text" name="image" value={this.state.image} onChange={this.addText}/>

          <label>Quantity:</label>
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.addText}/>
          
          <input type="submit" value="Create food"/>
        </form>
      </div>
    )}
}


export default AddFood;
