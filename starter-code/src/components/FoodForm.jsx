import React, { Component } from 'react';

export default class FoodForm extends Component {

  state = {
    name: '',
    calories: 0, 
    image: '',
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, calories, image} = this.state;
    const { hideForm, addFood } = this.props;

    return (
      <div>
        <input onChange={(e) => this.handleChange(e)} type="text" name="name" value={name}/>
        <input onChange={(e) => this.handleChange(e)} type="number" name="calories" value={calories}/>
        <input onChange={(e) => this.handleChange(e)} type="text" name="image" value={image}/>
        <button onClick={() => addFood({name, calories, image})}>Add</button>
        <button onClick={() => hideForm()}>Cancel</button>
      </div>
    )
  }
  
  
}