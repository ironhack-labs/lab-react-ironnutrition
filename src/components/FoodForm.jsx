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
  handleChange = (event) => {
    // const [name, calories, image, quantity] = event.target.value;

    console.log(event.target.name);

    // this.setState({
    //   [event.target.name]:event.target.value
    // })

    this.setState({
      [event.target.name]: event.target.value,
      [event.target.calories]: event.target.value,
      [event.target.image]: event.target.value,
      [event.target.quantity]: event.target.value,
      // });
    });
  };

  render() {
    return (
      <div>
        <form action="" method="get" onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input onChange={this.handleChange} type="text" name="name" />
          </div>
          <div>
            <label>Calories</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="calories"
              value={this.state.calories}
            />
          </div>
          <label>Image</label>
          <input
            onChange={this.handleChange}
            type="checkbox"
            name="image"
            value={this.state.image}
          />
          <div>
            <label>Quantity</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="quantity"
              value={this.state.quantity}
            />
          </div>
          <button type="submit">Submit New Food</button>
        </form>
      </div>
    );
  }
}

export default FoodForm;
