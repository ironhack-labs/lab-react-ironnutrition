import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import Search from './Components/Search';


class App extends React.Component {
  state = {
    foods: foods,
    searchValue: "",
    selectedFood: null,
    todaysFood: [],
  };

  handleForm = () => {
    const foodForm = document.getElementById("foodForm");
    foodForm.classList.toggle("hidden");
  }

  handleAddFood = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });

    this.handleForm();
  };

  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };

  handleSelectFood = (food) => {

    let todaysFoodCopy = [...this.state.todaysFood]

    let found = todaysFoodCopy.find((el) => el.name === food.name);

    food.calories *= food.quantity;

    if (found) {
      const foundCopy = { ...found };
      foundCopy.quantity += food.quantity;
      foundCopy.calories += food.calories;

      this.setState({
        todaysFood: todaysFoodCopy.map((food) =>
          food.name === foundCopy.name ? foundCopy : food
        ),
      });
    } else {
      todaysFoodCopy.push(food);
      this.setState({
        todaysFood: todaysFoodCopy,
      });
    }
  };


  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    const totalCalories = this.state.todaysFood.reduce(
      (accumulator, currentFood) => {
        return (accumulator += currentFood.calories);
      },
      0
    );

  return (
    <div className="App">

        <Search
          value={this.state.searchValue}
          callbackFn={this.handleSearchValue}
        />

      <div>
        <button onClick={this.handleForm}>Add New Food</button>
        <div id="foodForm" className="hidden" >
          <FoodForm callbackFn={this.handleAddFood}/>
        </div>
      </div>

      <div className="flex">

        <div className="columns">
          <div className="column">
            {filteredFoods.map((food, index) => {
              return (
                <FoodBox
                  handleSelect={this.handleSelectFood}
                  key={index}
                  food={food}
                />
              );
            })}
          </div>

          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>

            <ul>
              {this.state.todaysFood.map((food, index) => (
                <li key={index}>
                  {food.quantity} {food.name} = {food.calories} cal
                </li>
              ))}
            </ul>

            <strong>Total: {totalCalories} cal</strong>
          </div>
        </div>     
      </div>

      
    </div>
    );
  }
}

export default App;
