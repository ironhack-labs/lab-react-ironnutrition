import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class AddFood extends Component {
  state = {
    name: '',
    image: '',
    calories: '',
    form: true,
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, image, calories } = this.state;

    this.props.addFood({
      name,
      image,
      calories
    });

    this.setState({
      name: '',
      image: '',
      calories: '',
      form: !this.state.form
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name Field */}
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className='input'
              onChange={this.handleInputChange}
              name='name'
              type='text'
              value={this.state.name}
              placeholder='Add food name'
              required='true'
            />
          </div>
        </div>
        {/* Calories Field */}
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className='input'
              onChange={this.handleInputChange}
              type='number'
              name='calories'
              value={this.state.calories}
              placeholder='Add amount of calories'
              required='true'
            />
          </div>
        </div>
        {/* Image Field */}
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className='input'
              onChange={this.handleInputChange}
              name='image'
              type='text'
              value={this.state.image}
              placeholder='Add image url'
            />
          </div>
        </div>
        <button className='button' type='submit'>Add New Food</button>
      </form>
    );
  }
}

export default AddFood;