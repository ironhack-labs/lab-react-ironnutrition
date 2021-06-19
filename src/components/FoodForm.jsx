import React from 'react';
import { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      calories: 0,
    };
  }
  render() {
    return (
      <div>
        <form action="" method="get" onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input onChange={this.handleTitleChange} type="text" name="name" />
          </div>
          <div>
            <label>Calories</label>
            <input
              onChange={this.handleTitleChange}
              type="text"
              name="Calories"
            />
          </div>
          <label>Image</label>
          <input type="checkbox" name="Image" />
          <div>
            <label>Quantity</label>
            <input type="text" name="Quantity" />
          </div>
          <button type="submit">Submit New Food</button>
        </form>
      </div>
    );
  }
}

export default FoodForm;
