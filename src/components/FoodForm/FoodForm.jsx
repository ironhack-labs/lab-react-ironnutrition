import React, { Component } from 'react';
import { Divider, Input, Button } from 'antd';

const INITIAL_STATE = {
  name: '',
  calories: '',
  image: '',
  servings: ''
}

class FoodForm extends Component  {
  state = {
    ...INITIAL_STATE
  }

  handleOnChange = (event) =>{
    const {value, name} = event.target
    this.setState( { [name]: value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createFood(this.state);
    this.setState({...INITIAL_STATE})
  }

  render() {

    const { name, calories, image, servings } = this.state

    return (
      <form onSubmit={this.onSubmit}>
      <Divider>Add Food Entry</Divider>
      
      <label>Name</label>
      <Input value={name} name='name' id='name' placeholder='Name of the food' type="text" onChange={this.handleOnChange} />
  
      <label>Image</label>
      <Input value={image} name='image' id='image' placeholder='Select image URL of the food' type="text" onChange={this.handleOnChange} />
  
      <label>Calories</label>
      <Input value={calories} name='calories' id='calories' placeholder='Number of calories' type="number" onChange={this.handleOnChange} />
  
      <label>Servings</label>
      <Input value={servings} name='servings' id='servings' placeholder='Number of servings' type="number" onChange={this.handleOnChange} />
  
      <Button type="primary" htmlType="submit" className='button-margin'>Create</Button>
    </form>
    );
  }
  
}

export default FoodForm;
