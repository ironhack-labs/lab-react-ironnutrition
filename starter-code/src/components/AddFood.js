import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './AddFood.css';

class AddFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '',
    show: false,
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  handleAddFood = () => {
    const { click } = this.props;
    const { name, calories, image, quantity} = this.state
    click(name,calories, image, quantity);
    this.setState(
      {
        name: "",
        calories: "",
        image: "",
        quantity: "",
        show: false,
      });
  }
  render(){
    const  { name, calories, image, quantity, show} = this.state;
    return(
    <div>
      <button className="button is-info AddFood" onClick={this.handleClick}>Add Food</button>
      {show && <div className="AddForm"> 
        <div className='AddformInput'>
          <label htmlFor="name">Name</label>
          <input 
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
          />
        </div>
        <div className='AddformInput'>
          <label htmlFor="calories">Calories</label>
          <input
            id="calories"
            type="number"
            name="calories"
            value={calories}
            onChange={this.handleInput}
          />
        </div>
        <div className='AddformInput'>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            name="image"
            value={image}
            onChange={this.handleInput}
          />
        </div>
        <div className='AddformInput'>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleInput}
          />
        </div>
        <div className='AddformInput'>
            <button className="button is-success" onClick={this.handleAddFood}  >Submit Food</button>
        </div>
      </div>}
    </div>
    ) 
  }
}

export default AddFood;