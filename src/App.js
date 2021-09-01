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
    const duplicateFoodList = [...this.state.foods];
    const foodFinded = duplicateFoodList.findIndex(
      (food) => food.name === name
    );
    const newListItem = duplicateFoodList[foodFinded];
    const finalList = [...this.state.list, newListItem];
    this.setState({ list: finalList });
  };

  render() {
    return (
      <div className="App container">
        <h1>
          <strong>IronNutrition</strong>
        </h1>
        <div className="App-button">
          <input
            value={this.state.search}
            onChange={this.updateInputValue}
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button onClick={this.toggleShowForm}>Add Food</button>
          {this.state.showForm && <AddFood onAddFood={this.onAddItem} />}
        </div>
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
          <h1>Todays Food</h1>
          {this.state.list.length > 1 &&
            this.state.list.map((food) => {
              return <li key={food.id}>{food.name} {food.quantity}</li>;
            })}
        </div>
      </div>
    );
  }
}

export default App;
