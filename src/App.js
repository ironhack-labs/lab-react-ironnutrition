import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodItem from './components/AddFoodItem';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    foodItems: foods,
    showForm: false,
    filteredFood: foods,
  };

  //add a food item
  handleAdd = (event) => {
    event.preventDefault();

    const { foodItems } = this.state;

    //to obtain the value passed by the user in the form
    let foodName = event.target.name.value;
    let foodCalo = event.target.calories.value;
    let foodImage = event.target.image.value;

    //console.log("event.target.name.value is: ", event.target.name.value)
    let newFoodAdded = {
      name: foodName,
      calories: foodCalo,
      image: foodImage,
    };

    this.setState({
      foodItems: [...foodItems, newFoodAdded],
      showForm: false,
    });
  };

  //make the form disappear when the user click submit
  handleFormShow = () => {
    this.setState({
      showForm: true,
    });
  };



  //to search for a food item
  handleSearch = (event) => {
    console.log("event.target.value is: ", event.target.value)

    let searchItem = event.target.value; 
    const { foodItems } = this.state;

    let filteredFood = foodItems.filter((foodItem) => {
      return foodItem.name.includes(searchItem)
    })

    this.setState({
      filteredFood: filteredFood
    })

  }

  render() {
    const { foodItems, showForm, filteredFood } = this.state;

    return (
      <div>

        {/* to show or hide the adding food form */}
        {showForm ? (
          <AddFoodItem onAdd={this.handleAdd} />
        ) : (
          <Button variant="outline-info" onClick={this.handleFormShow}>
            Show
          </Button>
        )}
        {/* search bar */}
        <input
          onChange={this.handleSearch}
          type="text"
          placeholder="Search"
        ></input>

        <FoodBox food={filteredFood} />
      </div>
    );
  }
}

export default App;
