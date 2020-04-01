import React, { Component } from "react";
import '../App.css';
class AddFood extends Component {
    constructor(props){
        super(props)
        this.state = {
      image: "",
      name: "",
      calories: 0,
      
    };
  }

handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({
      image: "",
      name: "",
      calories: 0,
      quantity: 1
    })
}

handleChange = (event) => {
  let { name, value } = event.target;
  this.setState({ [name]: value})
}

render() {
  return (
    <div className="divForm">
      <form className="formLooks" onSubmit={this.handleFormSubmit}>
        <label>Image:</label>
        <input
          type='text'
          name='image'
          value = {this.state.image}
          onChange={e => this.handleChange(e)}
        />

        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <label>Calories:</label>
        <input
          type='text'
          name='calories'
          value={this.state.calories}
          onChange={e => this.handleChange(e)}
        />

        <label>Quantity:</label>
        <input
          type='number'
          name='quantity'
          value={this.state.quantity}
          onChange={e => this.handleChange(e)}
        />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
}

export default AddFood;
