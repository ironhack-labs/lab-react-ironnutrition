import React, { Component } from 'react';

class Form extends Component {

  constructor(props){
      super(props);
      this.state = {
          name: "",
          calories: 0,
          image: "",
      }
      this.props ={
          
      }
  }

  foodHandler = (foodName) => {
      this.setState({
        name: foodName.target.value
      })
    }

  caloryHandler = (foodCalories) => {
    this.setState({
      calories: foodCalories.target.value
    })
  }

  imgHandler = (foodImg) => {
    this.setState({
      image: foodImg.target.value
    })
  }

  render(){
    return(
      <form style={this.props.style}>
        <input type="text" name="name" onChange={this.foodHandler} placeholder="Food Name"></input>
        <input type="number" name="calories" onChange={this.caloryHandler} placeholder="Calories"></input>
        <input type="text" name="image" onChange={this.imgHandler} placeholder="Image URL"></input>
        <input type="submit" value="Submit" onClick={(submit)=>this.props.submitHandler(submit, this.state)}></input>
      </form>
    )
  }
}

export default Form;