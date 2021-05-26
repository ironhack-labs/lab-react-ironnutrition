import React, { Component } from 'react';

class FoodForm extends Component {
  state = {
    name: '',
    image: '',
    calories: 0,
  };

  foodChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  foodSubmit = (event) => {
    event.preventDefault();

    const submitFood = {
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
    };
    this.props.callbackAddFood(submitFood);
    console.log(this.state);

    this.setState({
        name: '',
        image: '',
        calories :0
    })
  };

  render() {
    return (
      <div>
        
        <form onSubmit={this.foodSubmit}>
          <h3>Add Food Form</h3>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.foodChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={this.foodChange}
              value={this.state.image}
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              name="calories"
              id="calories"
              onChange={this.foodChange}
              value={this.state.calories}
            />
          </div>
          <button type="submit">Submit New Food</button>
        </form>
      </div>
    );
  }
}
export default FoodForm;
