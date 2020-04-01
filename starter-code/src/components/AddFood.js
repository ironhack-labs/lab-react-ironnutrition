import React, { Component } from 'react'

class AddFood extends Component {
 
    state = {
      name: "",
      calories: "",
      image: "",
      display: false
    };


  handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.addTheFood(this.state);
      this.setState({
        name: "",
        calories: "",
        image: ""
      })
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
         [name]: value
        })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />

          <label>Calories:</label>
          <input
            type='number'
            name='calories'
            value={this.state.calories}
            onChange={event => this.handleChange(event)}
          />

          <label>Image:</label>
          <input
            type='text'
            name='image'
            value={this.state.image}
            onChange={event => this.handleChange(event)}
          />

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default AddFood;