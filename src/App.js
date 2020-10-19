import React, { Component } from 'react';
import foods from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox/FoodBox';

class App extends Component {
  state = {
    showAddFoodForm: true,
    foods,
    foodsToShow: foods,
    todaysCalories: [],
  };

  switchShowForm = () => {
    this.setState((previousState) => ({
      showAddFoodForm: !previousState.showAddFoodForm,
    }));
  };

  getAddFoodForm = () => {
    return (
      <>
        <input
          type="text"
          onChange={this.onChange}
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          onChange={this.onChange}
          name="calories"
          placeholder="calories"
        />
        <input
          type="text"
          onChange={this.onChange}
          name="image"
          placeholder="image"
        />
        <button onClick={this.onSubmit}>Submit</button>
      </>
    );
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = () => {
    const { name, calories, image } = this.state;
    const newFood = {
      name,
      calories,
      image,
      quantity: 0,
    };
    // const newFoodArray = [...this.state.foods];
    // newFoodArray.push(newFood);
    this.setState((previousState) => ({
      foods: [newFood, ...previousState.foods],
      foodsToShow: [newFood, ...previousState.foods],
    }));
    this.switchShowForm();
  };

  onSearch = async (event) => {
    const { value } = event.target;
    this.onChange(event);
    const filteredFoods = this.state.foods.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    this.setState({
      foodsToShow: filteredFoods,
    });
  };

  onQuantChange = (event, name) => {
    const { value } = event.target;
    const foodShowUpdateIndex = this.state.foodsToShow.findIndex(
      (item) => item.name === name
    );
    const foodUpdateIndex = this.state.foods.findIndex(
      (item) => item.name === name
    );
    const foodUpdate = { ...this.state.foods[foodUpdateIndex] };
    foodUpdate.quantity = parseInt(value);
    const foodsCopy = [...this.state.foods];
    const foodsShowCopy = [...this.state.foodsToShow];
    foodsCopy.splice(foodUpdateIndex, 1, foodUpdate);
    foodsShowCopy.splice(foodShowUpdateIndex, 1, foodUpdate);
    this.setState({
      foods: foodsCopy,
      foodsToShow: foodsShowCopy,
    });
  };

  onFoodAdd = (name) => {
    this.setState((previousState) => ({
      todaysCalories: [
        ...previousState.todaysCalories,
        previousState.foods.find((item) => item.name === name),
      ],
    }));
  };

  removeFromTodaysList = (index) => {
    const updatedTodaysCalories = [...this.state.todaysCalories];
    updatedTodaysCalories.splice(index, 1);
    this.setState({
      todaysCalories: updatedTodaysCalories,
    });
  };

  render() {
    return (
      <div className="App">
        <div class="columns">
          <div class="column">
            {this.state.showAddFoodForm ? (
              <button onClick={this.switchShowForm}>Add food</button>
            ) : (
              this.getAddFoodForm()
            )}
            <input
              type="text"
              placeholder="search"
              name="search"
              onChange={this.onSearch}
            />
            {this.state.foodsToShow.map((item) => (
              <FoodBox
                key={item.name}
                name={item.name}
                calories={item.calories}
                image={item.image}
                quantity={item.quantity}
                onQuantChange={this.onQuantChange}
                onFoodAdd={this.onFoodAdd}
              />
            ))}
          </div>
          <div class="column">
            <h1>Today's calories</h1>
            <ul>
              {this.state.todaysCalories.map((item, i) => (
                <li key={item.name}>
                  {`${item.name} ${item.quantity * item.calories} `}
                  <button
                    onClick={() => {
                      this.removeFromTodaysList(i);
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <h3>
              Today's calories:{' '}
              {this.state.todaysCalories.reduce(
                (a, v) => (a += v.quantity * v.calories),
                0
              )}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;