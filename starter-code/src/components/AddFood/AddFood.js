import React, { Component } from 'react';

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: 0, 
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

          <label>Image:</label>
          <input type="string" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default AddFood;
