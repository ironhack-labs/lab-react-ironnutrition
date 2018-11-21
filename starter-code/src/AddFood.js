import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

class AddFood extends Component {
  constructor(props){
    super(props);

    this.state = { 
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onClick(this.state);   
    this.setState({
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    })  
  }
  render() {
    return(
      <form  onSubmit={(event)=>{this.handleFormSubmit(event)}}>
       <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Calories:
          <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          ImageUrl:
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default AddFood;