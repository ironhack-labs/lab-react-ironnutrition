import React from 'react';
import './App.css';

import 'bulma/css/bulma.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox/FoodBox';
import Search from './components/Search/Search';

class App extends React.Component {
  state = {
    allFoods: foods,
    foods,
    selectedFoods: {},
    addModal: false,
    totalCal: 0,
    addForm: {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    },
  };

  toggleModal = () => {
    const currentState = this.state.addModal;
    this.setState({ addModal: !currentState });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      addForm: { ...this.state.addForm, [name]: value },
    });
  };

  handleAddFood = () => {
    this.setState(
      {
        foods: [...this.state.foods, this.state.addForm],
        allFoods: [...this.state.allFoods, this.state.addForm],
      },
      () => this.filterFoods('')
    );

    this.setState({
      addForm: {
        name: '',
        calories: 0,
        image: '',
        quantity: 0,
      },
    });

    this.toggleModal();
  };

  // selectedFoods: {
  //   pizza: {calories: 1, quantity: 2},
  //   onion
  // }

  filterFoods = (foodName) => {
    const filteredFoods = this.state.allFoods.filter((food) =>
      food.name.toLowerCase().includes(foodName.toLowerCase())
    );

    this.setState({ foods: filteredFoods });
  };

  todayFoods = (foodName, foodCalories, foodQuantity) => {
    this.state.selectedFoods[foodName] = {
      calories: foodCalories,
      quantity: foodQuantity,
    };

    this.setState({
      selectedFoods: this.state.selectedFoods,
    });
  };

  deleteTodayFoods = (food) => {
    delete this.state.selectedFoods[food];
    this.setState({ selectedFoods: this.state.selectedFoods });
  };

  displayFoods = () => {
    this.state.totalCal = 0;
    const foods = [];
    for (const food in this.state.selectedFoods) {
      foods.push(
        <li key={food}>
          {this.state.selectedFoods[food].quantity} {food} ={' '}
          {this.state.selectedFoods[food].quantity *
            this.state.selectedFoods[food].calories}{' '}
          cal
          <button
            className="ml-2 delete has-background-danger"
            onClick={() => this.deleteTodayFoods(food)}
          ></button>
        </li>
      );
      this.state.totalCal =
        this.state.totalCal +
        this.state.selectedFoods[food].quantity *
          this.state.selectedFoods[food].calories;
    }
    return foods;
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <button className="button is-link mb-1" onClick={this.toggleModal}>
          Add new food
        </button>
        <Search filterFoods={this.filterFoods} />

        <div className={this.state.addModal ? 'modal is-active' : 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">New food</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.toggleModal}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="e.g Onions"
                    value={this.state.addForm.name}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label">Number of calories</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="calories"
                    placeholder="e.g. 50"
                    value={this.state.addForm.calories}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label">Image URL</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="image"
                    placeholder="e.g. https://www.pachd.com/free-images/food-images/red-onion-01.jpg"
                    value={this.state.addForm.image}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={this.handleAddFood}
              >
                Add
              </button>
              <button className="button" onClick={this.toggleModal}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {this.state.foods.map((food) => {
              return (
                <FoodBox
                  key={food.name}
                  food={food}
                  todayFoods={this.todayFoods}
                />
              );
            })}
          </div>
          <div className="column content ml-3">
            <h2 className="subtitle">Today's foods</h2>
            <ul>{this.displayFoods()}</ul>
            <strong>Total: {this.state.totalCal} cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
