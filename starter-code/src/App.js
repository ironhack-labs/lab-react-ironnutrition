import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox";
import SearchBar from "./components/SearchBar/SearchBar";
import TodaysFood from "./components/TodaysFood/TodaysFood";

class App extends Component {
  state = {
    foods,
    results: foods,
    formIsShowed: false,
    searchText: "",
    todaysFood: [],
  };

  handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addQuantity = (e, food) => {
    let { value } = e.target;
    const updateArray = [...this.state.results];
    updateArray[food.index].quantity = Number(value);
    // updateArray[food.index].calories = Number(food.calories) * Number(value);
    this.setState({ results: updateArray });
  };

  displayForm = () => {
    this.setState({
      formIsShowed: !this.state.formIsShowed,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.displayForm();

    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      quantity: this.state.quantity,
      image: this.state.image,
    };

    this.setState({
      foods: [...this.state.foods, newFood],
    });
  };

  handleSearchInput = (e) => {
    let { value } = e.target;
    const filterResults = this.state.foods.filter((f) => f.name.toLowerCase().includes(value));
    this.setState({
      results: filterResults,
      searchText: value,
    });
  };

  addFood = (food) => {
    const todaysFood = [...this.state.todaysFood];
    let index = todaysFood.findIndex((f, i) => f.name === food.name);
    const results =
      index >= 0
        ? ((todaysFood[index].quantity += food.quantity), (todaysFood[index].calories += food.calories * food.quantity))
        : ((food.calories *= food.quantity), todaysFood.push(food));

    this.setState({
      todaysFood: todaysFood,
    });
  };

  deleteFood = (food) => {
    const todaysFood = [...this.state.todaysFood];
    let index = todaysFood.findIndex((f, i) => f.name === food.name);
    const results = index >= 0 && todaysFood.splice(index,1)

    this.setState({
      todaysFood: todaysFood,
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchText={this.state.searchText} handleSearchInput={this.handleSearchInput} />

        {this.state.formIsShowed ? (
          <form className="food-form" onSubmit={(e) => this.handleSubmit(e)}>
            <label name="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)}></input>
            <label name="name">Calories</label>
            <input
              type="number"
              name="calories"
              value={this.state.calories}
              onChange={(e) => this.handleInput(e)}
            ></input>
            <label name="name">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={(e) => this.handleInput(e)}
            ></input>
            <label name="name">Image</label>
            <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleInput(e)}></input>
            <input type="submit" value="submit" />
          </form>
        ) : (
          <button className="button is-primary" onClick={this.displayForm}>
            Add some food
          </button>
        )}
        <div>
          <div className="columns">
            <div className="column">
              {this.state.results.map((element, key) => (
                <FoodBox
                  key={key}
                  index={key}
                  name={element.name}
                  calories={element.calories}
                  image={element.image}
                  quantity={element.quantity}
                  addQuantity={this.addQuantity}
                  addFood={this.addFood}
                />
              ))}
            </div>
            <div className="column">
              <h2>Today's foods</h2>
              <TodaysFood foodArray={this.state.todaysFood} deleteFood={this.deleteFood}  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
