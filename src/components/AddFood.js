import React, { Component } from 'react';

class AddFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: 0,
    showForm: true,
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newFood = this.state;
    console.log("newFood", newFood)
    this.props.createFood(newFood);
    console.log(
      'this.props.createFood(newFood) : ',this.props.createFood(newFood));
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: 0,
      showForm: false
    })
  }


  render() {
    return (
      <div style={{  padding: '20px' }}>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input className="input" 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />

          <label>Calories: </label>
          <input className="input" 
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <br />

          <label>Image: </label>
          <input className="input" 
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />
          <br />

          <label>Quantity:</label>
          <input className="input" 
            type="number"
            name="quantity"
            checked={this.state.quantity}
            onChange={this.handleInput}
          />
          <br />

          <button className="button is-info" type="submit" style={  {margin: '20px 0px 0px 0px' }}> Create A Food Item </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
