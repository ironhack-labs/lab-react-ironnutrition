import 'bulma/css/bulma.css';
import React from 'react';
import './App.css';
import FoodBox from './FoodBox/FoodBox';
import foodList from './foods.json';
import TodayFood from './TodayFood';

class App extends React.Component {
  state = {
    foodList,
    foodName: '',
    foodCalories: '',
    foodImage: '',
    searchParams: '',
    isFormDisplayed: false,
    todayFood: [],
  };
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  toggleForm = () => {
    this.setState({
      isFormDisplayed: !this.state.isFormDisplayed,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    const { foodName, foodCalories, foodImage } = this.state;
    const newFoodArray = [
      { name: foodName, calories: foodCalories, image: foodImage },
      ...this.state.foodList,
    ];
    this.setState({
      foodList: newFoodArray,
      foodName: '',
      foodCalories: '',
      foodImage: '',
      isFormDisplayed: false,
    });
  };
  addQuantity = (foodObject) => {
    let todayFood = this.state.todayFood.slice();
    let found = todayFood.find((element) => element.name === foodObject.name);
    foodObject.calories *= foodObject.quantity;
    if (found) {
      found.quantity += foodObject.quantity;
      found.calories += foodObject.calories;
    } else {
      todayFood.push(foodObject);
    }
    this.setState({
      todayFood,
    });
  };
  deleteFood = (foodName) => {
    const newFoodArray = this.state.foodList.filter(
      (element) => element.name !== foodName
    );
    this.setState({
      foodList: newFoodArray,
    });
  };
  deleteTodayFood = (foodName) => {
    const newFoodArray = this.state.todayFood.filter(
      (element) => element.name !== foodName
    );
    this.setState({
      todayFood: newFoodArray,
    });
  };
  render() {
    const totalCalories = this.state.todayFood.reduce(
      (acc, element) => acc + element.calories,
      0
    );
    console.log(this.props.test);
    return (
      <div className="App">
        <button onClick={this.toggleForm}> Add food </button>
        {this.state.isFormDisplayed && (
          <form onSubmit={this.handleOnSubmit}>
            <label> Name</label>
            <input
              name="foodName"
              placeholder="Lasagna"
              value={this.state.foodName}
              onChange={this.handleOnChange}
            ></input>
            <label> Calories </label>
            <input
              name="foodCalories"
              placeholder="23"
              value={this.state.foodCalories}
              onChange={this.handleOnChange}
            ></input>
            <label> Image url</label>
            <input
              name="foodImage"
              placeholder="url"
              value={this.state.foodImage}
              onChange={this.handleOnChange}
            ></input>
            <button> Create food </button>
          </form>
        )}
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Pizza"
              name="searchParams"
              value={this.state.searchParams}
              onChange={this.handleOnChange}
            />
          </div>
        </div>
        <div className="food-container">
          <div>
            {this.state.foodList
              .filter((element) =>
                element.name
                  .toLocaleLowerCase()
                  .includes(this.state.searchParams.toLocaleLowerCase())
              )
              .map((element, idx) => (
                <FoodBox
                  key={idx}
                  food={element}
                  deleteFood={this.deleteFood}
                  addQuantity={this.addQuantity}
                />
              ))}
          </div>
          <TodayFood
            totalCalories={totalCalories}
            deleteFood={this.deleteTodayFood}
            todayFood={this.state.todayFood}
          />
          {/* <div>
            <h1> Today's food</h1>
            <ul>
              {this.state.todayFood.map((element, index) => {
                return (
                  <li key={index}>
                    {element.quantity} {element.name} = {element.calories} Cal
                  </li>
                )
              })}
              <p> Total: {totalCalories} calories</p>
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}
export default App;