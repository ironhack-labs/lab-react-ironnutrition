import React, { Component } from 'react'

import InputForm from '../InputForm/InputForm';

export default class NewFoodForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '', 
      calories: '', 
      image: ''
    }
  }

  sendForm = () => {
    this.props.addFood(this.state);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({[name]: value});

  }

  render() {
    return (
      <form action="javascript:;">
        <InputForm label="Name" name="name" type="text" placeholder="Sandwich" value={this.state.name} handleChange={this.handleChange} />
        <InputForm label="Number of calories" name="calories" type="text" placeholder="200" value={this.state.calories} handleChange={this.handleChange} />
        <InputForm label="Image URL" name="image" type="text" placeholder="mysandwich.png" value={this.state.image} handleChange={this.handleChange} />
        <button className="button is-link" onClick={this.sendForm}>Submit</button>
        <button className="button" onClick={this.props.closeForm}>Close</button>
      </form>
    )
  }
}