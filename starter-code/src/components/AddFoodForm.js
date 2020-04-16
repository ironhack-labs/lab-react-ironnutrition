// components/AddFoodForm.js

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faFire, faImage } from '@fortawesome/free-solid-svg-icons';

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
      <div className='control box column is-four-fifths'>
        <div className='field'>
          <label className='label' htmlFor='name'>Name:</label>
          <p className='control has-icons-left'>
            <input
              className='input'
              type='text'
              name='name'
              placeholder='Cheeseburger'
              value={name}
              onChange={this.handleInput}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUtensils} />
            </span>
          </p>
        </div>
        <div className='field'>
          <label className='label' htmlFor='calories'>Calories:</label>
          <p className='control has-icons-left'>
          <input
            className='input'
            type='number'
            min='0'
            name='calories'
            placeholder='300'
            value={calories}
            onChange={this.handleInput}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faFire} />
          </span>
          </p>
        </div>
        <div className='field'>
          <label className='label' htmlFor='image'>Image:</label>
          <p className='control has-icons-left'>
          <input
            className='input'
            type='text'
            name='image'
            placeholder='https://your.blog.com/cheeseburger.jpg'
            value={image}
            onChange={this.handleInput}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faImage} />
          </span>
          </p>
        </div>
        <button onClick={() => addFood(this.state)}
          className='button is-primary'>Submit
        </button>
      </div>
    );
  }
}

export default AddFoodForm;
