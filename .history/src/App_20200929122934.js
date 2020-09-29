import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './Component/Foodbox.js';
import TodaysFoodContainer from './Component/TodaysFoodContainer.js';

class App extends React.Component {
  state = {
    //saving array from json file
    foodList,
    foodName: '',
    foodCalories: '',
    foodImage: '',
    isFormDisplayed: false,
    searchParams: '',
    todayFood: [],
  };

  handleOnChange = (event) => {
    // console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnClick = () => {
    this.setState(
      {
        // this returns the opposite of what is currently in isFormDisplayed
        isFormDisplayed: !this.state.isFormDisplayed,
      },
      //this lets us know immediately what the state is
      () => console.log(this.state.isFormDisplayed)
    );
  };

  handleOnSubmit = (event) => {
    //prevents rerender of whole page
    event.preventDefault();
    const { foodName, foodCalories, foodImage } = this.state;
    //DO NOT SET STATE DIRECTLY LIKE THIS!!!
    // this.state.foodList.push({name: foodName})

    //create new array that copies this.state.foodList(json) and adds new object to the beginning of that newFoodArray
    const newFoodArray = [
      { name: foodName, calories: foodCalories, image: foodImage },
      ...this.state.foodList,
    ];
    //set state of foodList to newFoodArray
    //clear form (setState back to "") and make form disappear(isFormDsiplayed: false)
    this.setState({
      foodList: newFoodArray,
      isFormDisplayed: false,
      foodName: '',
      foodCalories: '',
      foodImage: '',
    });
  };

  addQuantity = (foodObject) => {
    console.log(`Food Name: `, foodObject);
    //copy todayFood state into todayFood
    let todayFood = this.state.todayFood.slice();
    //this looks for food and then adds them together
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

  handleDelete = (foodName) => {
    console.log('food deleted');
    const newFoodArray = this.state.foodList.filter(
      (element) => element.name !== foodName
    );
    this.setState({ foodList: newFoodArray });
  };

  handleDeleteTodayFood = (foodName) => {
    console.log('food deleted');
    const newFoodArray = this.state.todayFood.filter(
      (element) => element.name !== foodName
    );
    this.setState({ todayFood: newFoodArray });
  };

  // handleDeleteFood = (id) => {
  //   let cloneTodaysFood = [...this.state.todaysFood];
  //   cloneTodaysFood.splice(id, 1);
  //   this.setState({
  //     todaysFood: cloneTodaysFood,
  //   });
  // };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Add Food</button>
        {/* conditional that displays form */}
        {this.state.isFormDisplayed && (
          <form onSubmit={this.handleOnSubmit}>
            <label>Name</label>
            <input
              name="foodName"
              placeholder="Food Name"
              value={this.state.foodName}
              onChange={this.handleOnChange}
            ></input>
            <label>Calories</label>
            <input
              name="foodCalories"
              placeholder="Calories"
              value={this.state.foodCalories}
              onChange={this.handleOnChange}
            ></input>
            <label>Image url</label>
            <input
              name="foodImage"
              placeholder="Url"
              value={this.state.foodImage}
              onChange={this.handleOnChange}
            ></input>
            <button>Create Food</button>
          </form>
        )}

        {/* SEARCH BAR */}
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Pizza"
              name="searchParams"
              onChange={this.handleOnChange}
              value={this.state.searchParams}
            />
          </div>
        </div>

        <div className="food-container">
          <div>
            {/* FOOD LIST */}
            {/* SEARCH BAR FILTERING*/}
            {this.state.foodList
              .filter((element) =>
                element.name
                  .toLocaleLowerCase()
                  .includes(this.state.searchParams.toLocaleLowerCase())
              )
              .map((element, index) => (
                <FoodBox
                  key={index}
                  food={element}
                  addQuantity={this.addQuantity}
                  handleDelete={this.handleDelete}
                />
              ))}
          </div>
          <div>
            <TodaysFoodContainer
              todayFood={this.state.todayFood}
              handleDelete={this.handleDeleteTodayFood}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
