import React, { Component } from "react";

class addFood extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      calories: 0,
      image: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);


  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.newFood(this.state);
    this.props.toggleSubmit();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <label>Calories:</label>
            <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />
            <label>Image:</label>
            <input type="text" name="image" value={this.state.images} onChange={this.handleChange} />
            
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default addFood;