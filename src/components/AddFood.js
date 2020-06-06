import React, { Component } from 'react';

class AddFood extends Component {
  state = {
    calories: 0,
      image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
    name: '',
    quantity: 0,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // const name = event.target.name
    this.setState({
      [name]: value,
    });
  };

  showForm = (e) => {
    const $form = document.querySelector('#addFoodForm');
    $form.classList.remove('is-hidden');
    const $starterButton = document.querySelector('#starterButton');
    $starterButton.className += " is-hidden";
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const theFood = this.state;

    // push state to App state
    this.props.addFood(theFood);

    //clean state
    this.setState({
      calories: 0,
      name: '',
      quantity: 0,
    });

    document.querySelector('#addFoodForm').className += ' is-hidden';
    document.querySelector('#starterButton').classList.remove('is-hidden');
  };

  render() {
    return (
      <div>
          <button className="button is-primary" id="starterButton" onClick={(e) => this.showForm(e)}>Add a new food!</button>
            <form action="" onSubmit={this.handleFormSubmit} className="is-hidden" id="addFoodForm">
          <label htmlFor="">Calories</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor="">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit" className="button is-success">Submit!</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
