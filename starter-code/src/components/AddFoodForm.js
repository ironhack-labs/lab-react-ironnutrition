import React, { Component } from 'react';

class AddFoodForm extends Component {

  render() {
    return (
      <div className="addFoodForm">
        <form onSubmit={(e) => this.props.addFood(e)}>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Food"/>
          <label>Calories:</label>
          <input type="text" name="calories" placeholder="calories"/>      
          <label>Quantity:</label>
          <input type="text" name="quantity" placeholder="Quantity"/>              
          <label>Image:</label>
          <input type="text" name="image" placeholder="Image"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFoodForm;