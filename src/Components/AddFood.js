import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

class AddFood extends Component {
  state = {
    name: '',
    calories: "",
    quantity: "",
    key: Math.random(),
    showForm: false,
  };

  nameChangeHandler = (event) => {
    event.preventDefault();

    this.setState({
      name: event.target.value,
    });
  };

  caloriesChangeHandler = (event) => {
    event.preventDefault();

    this.setState({
      calories: event.target.value,
    });
  };

  quantityChangeHandler = (event) => {
    event.preventDefault();

    this.setState({
      quantity: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    let newFood = this.state;

    this.props.addFoodToListHandler(newFood);

    this.setState({
      name: '',
      calories: "",
      quantity: "",
      showForm: false,
    });
  };

  showFormHandler = (event) => {
    event.preventDefault();

    this.setState({
      showForm: true,
    });
  };

  render() {
    let addFoodForm = (
      <form onSubmit={this.onSubmitHandler}>
        <div className="field">
          <div className="label">Name</div>
          <div className="control">
            <input
              className="input"
              placeholder="name of food"
              name="Name"
              value={this.state.name}
              onChange={this.nameChangeHandler}
              key={this.state.key}
            ></input>
          </div>
        </div>

        <div className="field">
          <div className="label">Calories</div>
          <div className="control">
            <input
              className="input"
              placeholder="amount of calories"
              name="Calories"
              type="number"
              value={this.state.calories}
              onChange={this.caloriesChangeHandler}
              key={this.state.key}
            ></input>
          </div>
        </div>

        <div className="field">
          <div className="label">Quantity</div>
          <div className="control">
            <input
              className="input"
              placeholder="quantity"
              name="Quantity"
              type="number"
              value={this.state.quantity}
              onChange={this.quantityChangeHandler}
              key={this.state.key}
            ></input>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    );

    let addFoodButton = (
      <div className="columns is-centered">
      <div className="column is-narrow">
      <button onClick={this.showFormHandler} className="button is-info">
        Add a new food
      </button>
      </div>
      </div>

    );

    return <div>{this.state.showForm ? addFoodForm : addFoodButton  }</div>
  }
}

export default AddFood;
