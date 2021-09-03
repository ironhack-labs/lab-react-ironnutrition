import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// import logo from './logo.svg';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFood from './components/AddFood/AddFood';
import './App.css';

class App extends React.Component {
  state = {
    foods: foods.map((food) => ({
      ...food,
      quantity: 0,
      id: uuidv4(),
    })),
    showForm: false,
    search: '',
    list: [],
  };

  onAddItem = (food) => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
    this.setState({
      foods: [
        ...this.state.foods,
        {
          ...food,
          quantity: 0,
          id: uuidv4(),
        },
      ],
    });
  };

  onChangeQuantity = (id, quantity) => {
    if (quantity < 0) {
      return;
    }
    const newFoodsState = [...this.state.foods];
    const foodToModifyIndex = newFoodsState.findIndex((food) => food.id === id);
    newFoodsState[foodToModifyIndex].quantity = quantity;

    this.setState({ foods: newFoodsState });
  };

  updateInputValue = (event) => {
    this.setState({ search: event.target.value });
  };

  toggleShowForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  };

  onAddFoodList = (event) => {
    const { value, name } = event.target;
    if (value <= 0) {
      return;
    }
    let finalList = [];
    const duplicateFoodState = [...this.state.foods];
    const duplicateFoodList = [...this.state.list];
    const foodFinded = duplicateFoodState.findIndex(
      (food) => food.name === name
    );
    const newListItem = duplicateFoodState[foodFinded];
    if (duplicateFoodList.find((food) => food.name === name)) {
      const indexList = duplicateFoodList.findIndex(
        (food) => food.name === name
      );
      const prevValue = duplicateFoodList[indexList].quantity;
      const newValue = prevValue + Number(value);
      duplicateFoodList[indexList].quantity = newValue;
      finalList = [...duplicateFoodList];
    } else {
      finalList = [...duplicateFoodList, newListItem];
    }
    return this.setState({
      list: [...finalList],
      foods: duplicateFoodState.map((food) => ({
        ...food,
        quantity: 0,
      })),
    });
  };

  calculateSubtotal = (food) => {
    return food.quantity > 0 ? food.quantity * food.calories : 0;
  };

  calculateTotal = () => {
    return this.state.list.reduce(
      (total, food) => total + this.calculateSubtotal(food),
      0
    );
  };

  onDelete = (foodId) => {
    this.setState({
      list: this.state.list.filter((food) => food.id !== foodId),
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="is-size-1">
          <strong>IronNutrition</strong>
        </h1>
        <div className="App-button">
          <input
            value={this.state.search}
            onChange={this.updateInputValue}
            className="input"
            type="text"
            placeholder="Search"
          ></input>
          <button onClick={this.toggleShowForm} className="button is-info">
            Add Food
          </button>
          {this.state.showForm && <AddFood onAddFood={this.onAddItem} />}
        </div>
        <div className="App-data container">
          <div className="App-foodBox">
            {this.state.foods
              .filter((food) => food.name.indexOf(this.state.search) >= 0)
              .map((food) => {
                return (
                  <FoodBox
                    {...food}
                    key={food.id}
                    onAddList={this.onAddFoodList}
                    onChange={this.onChangeQuantity}
                  />
                );
              })}
          </div>
          <div className="App-todaysFood">
            <h2 className="is-size-3">
              <strong>
                <u>Today's Food</u>
              </strong>
            </h2>
            {this.state.list.length >= 1 &&
              this.state.list.map((food) => {
                return (
                  <div key={food.id} className="App-todayFood-list">
                    <li key={food.id}>
                      {food.quantity} {food.name} ={' '}
                      {this.calculateSubtotal(food)} cal
                    </li>
                    <button
                      className="button is-danger is-inverted"
                      onClick={() => this.onDelete(food.id)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            {this.state.list.length >= 1 && (
              <p className="is-size-5">
                <strong>
                  <u>Total: {this.calculateTotal()} cal</u>
                </strong>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
