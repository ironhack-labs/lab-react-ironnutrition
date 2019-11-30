import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import TodaysFood from "./components/TodaysFood";

class App extends Component {
  state = {
    isOnClick: false,
    foods: [...foods],
    currentList: [],
    todaysFood: [],
    inputNumber: 0,
    totalCalorie: 0
  };

  addFood = newFood => {
    const copy = [...this.state.foods];
    copy.push(newFood);
    this.setState({ foods: copy });
  };
  toggleForm = () => {
    this.setState(state => ({
      isOnClick: !state.isOnClick
    }));
  };
  handleSearch = evt => {
    evt.preventDefault(evt);
    let searchList = [...this.state.foods];
    if (evt.target.value !== "") {
      searchList = searchList.filter(food =>
        food.name.toUpperCase().includes(evt.target.value.toUpperCase())
      );
    } else {
      searchList = [...this.state.foods];
    }
    this.setState({
      currentList: searchList
    });
  };

  componentDidMount() {
    this.setState({ currentList: this.state.foods });
  }

  getInputValue = (evt, f) => {
    evt.preventDefault(evt);
    let foods = [...this.state.foods];
    let index = foods.findIndex(item => item.name === f.name);
    let updatedFood = foods[index];
    console.log(updatedFood);
    updatedFood.quantity = Number(evt.target.value);

    let updatedList = [...foods, ...(foods[index] = updatedFood)];

    console.log(updatedList);

    this.setState({
      currentList: updatedList
    });
  };

  addFood = f => {
    let foods = [...this.state.foods];
    let foodsIndex = foods.findIndex(item => item.name === f.name);
    console.log(foodsIndex);
    let updatedTodaysFood = foods[foodsIndex];
    console.log(updatedTodaysFood);

    let list = [...this.state.todaysFood];

    if (list.findIndex(item => item.name === f.name) === -1) {
      list.push(updatedTodaysFood);
      this.state.totalCalorie +=
        updatedTodaysFood.calories * updatedTodaysFood.quantity;
    }

    let calories = 0;
    list.forEach(l => {
      calories += l.quantity * l.calories;
      console.log("DANS LA BOUCLE", calories);
    });
    this.setState({
      todaysFood: list,
      totalCalorie: calories
    });
  };

  render() {
    console.log(this.state.todaysFood);
    return (
      <div className="div-container">
        <h1 className="title">IronNutrition</h1>
        <AddFoodForm status={this.state.isOnClick} clbk={this.addFood} />
        <button className="button" onClick={this.toggleForm}>
          Add New Food
        </button>
        <hr />
        <SearchBar clbk={evt => this.handleSearch(evt)} />
        <hr />
        <div className="columns">
          <div className="column">
            {this.state.currentList.map((f, i) => (
              <FoodBox
                getInputValue={evt => this.getInputValue(evt, f)}
                addFood={() => this.addFood(f)}
                key={i}
                name={f.name}
                calories={f.calories}
                picture={f.image}
                quantity={f.quantity}
              />
            ))}
          </div>
          <div className="column today-food">
            <h1>Today's Food</h1>
            <ul>
              {this.state.todaysFood.map((f, i) => (
                <TodaysFood
                  name={f.name}
                  calories={f.calories}
                  quantity={f.quantity}
                  key={i}
                />
              ))}
            </ul>
            <p>total={this.state.totalCalorie} cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
