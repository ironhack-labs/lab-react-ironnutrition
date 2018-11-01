import React, { Component } from 'react';

class Form extends Component {

  state = {
      name:'', 
      calories:'',
      image:''
  }

  nameChangeInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  caloriesChangeInput = event => {
    this.setState({
      calories: event.target.value,
    })
  }

  imageChangeInput = event => {
    this.setState({
      image: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, calories, image } = this.state;
    const newFood = { name, calories, image }
    this.props.onSubmit(newFood);
    
    this.setState({
      name,
      calories,
      image
    })
  }
  

  render(){
    const state = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
       <input type="text" value={state.name} onChange={this.nameChangeInput}/>
       <input type="text" value={state.numberOfCalories} onChange={this.caloriesChangeInput}/>
       <input type="text" value={state.image} onChange={this.imageChangeInput}/>
       <input type="submit" value="Add Item"/>
      </form>
    )
  }
}



export default Form;