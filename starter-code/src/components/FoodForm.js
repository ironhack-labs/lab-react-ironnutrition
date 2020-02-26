import React, { Component } from 'react'

class FoodForm extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: ""
  }

  handleChange = e => {
    let {value, name} = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newFood = this.state;
    this.props.addFood(newFood);

    this.setState ({
      name: "",
      calories: "",
      image: "",
      quantity: ""
    });
    this.props.toggle();   
  };


  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>calories</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />

          <label>image</label>
          <input
            type="text"
            name="image"
            value={this.state.images}
            onChange={this.handleChange}
          />

          <label>quantity</label>
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />

          <button type="submit" >Submit your food</button>
          
        </form>
        
      </div>
    )
  }
}

export default FoodForm;