import React, { Component } from "react";
import bulma from "bulma";

class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 1
    };
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({     
      title: '',
      director: '',
      hasOscars: false,
      IMDbRating: ''
    })     
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
      
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        <label>Calories:</label>
        <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
        <label>Image:</label>
        <input type="text" name="imageURL" value={this.state.image} onChange={(e) => this.handleChange(e)} />
        
        <input type="submit" value="Submit" />
  
      </form>
    );
  }
}

export default FoodForm;