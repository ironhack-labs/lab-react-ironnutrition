import React, { Component } from 'react';

class AddFoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: 1,
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, calories, image } = this.state;
    const { addFood } = this.props;
    return (
      <div className='control'>
          <label className='label' htmlFor='name'>name</label>
          <input
            className='input'
            type='text'
            name='name'
            placeholder='Cheeseburger'
            value={name}
            onChange={this.handleInput}
          />
          <label className='label' htmlFor='calories'>calories</label>
          <input
            className='input'
            type='number'
            name='calories'
            placeholder='300'
            value={calories}
            onChange={this.handleInput}
          />
          <label className='label' htmlFor='image'>image</label>
          <input
            className='input'
            type='text'
            name='image'
            placeholder='https://your.blog.com/cheeseburger.jpg'
            value={image}
            onChange={this.handleInput}
          />
          <button onClick={() => addFood(this.state)}
            className='button is-primary'>Add Food
          </button>
      </div>
    );
  }
}

export default AddFoodForm;
