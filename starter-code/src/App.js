import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FoodBox from "./components/food-box/food-box"
import AddFoodForm from "./components/add-food-form/add-food-form"
import AddFoodButton from "./components/add-food-btn/AddFoodButton";
import SearchBar from "./components/search-bar/search-bar"
import SingleBullet from "./components/single-bullet/singleBullet"

import foods from './foods.json'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      foodList: foods,
      foodAdded: [],
      todaysList: [],
      todaysCalories: 0,
      showForm: false,
      showToday: false,
    }
  }

  showFood = () => {
    return this.state.foodList.map((eachFood, i) => {
      return(
        <FoodBox key={i} foodName={eachFood.name} foodImg={eachFood.image} foodQuantity={eachFood.quantity} foodCalories={eachFood.calories} addToTodaysList={this.addFoodTodaysList}  updateQuantity={this.updateFoodQuantity}/>
      )
    });
  }

  // add food eaten today to todays foods list
  addFoodTodaysList = (e, foodName, foodCalories, foodImage, foodQuantity) => {
    // e.preventDefault
    // console.log("somehow you did it");
    console.log(foodQuantity)
    
    let todaysListClone = [...this.state.todaysList]
    
    let newFoodObj = {
      name: foodName,
      calories: foodCalories,
      image: foodImage,
      quantity: foodQuantity,
    }
    
    console.log(foodName, foodQuantity, foodCalories) ;
  

    let totalCalories = this.state.todaysCalories;
    totalCalories += foodQuantity*foodCalories;

    todaysListClone.push(newFoodObj)

    this.setState({
      todaysList: todaysListClone,
      todaysCalories: totalCalories,
    })
  }

  // display the list of todays food in bullet form
  showTodaysList = () => {

    // console.log(this.state.foodList[])
    return this.state.todaysList.map((eachFood, i) => {
      return(
        <SingleBullet key={i} foodQuantity={eachFood.quantity} foodName={eachFood.name} foodCalories={eachFood.calories} />
      )
    });
  }

  updateFoodQuantity = (e, foodName, foodQuantity) => {
    e.preventDefault;

    console.log(foodName, foodQuantity)

    
    // this.state.foodList[foodName].quantity = foodQuantity

    // you need to update the quantity 
  }

  showAddFoodForm = () => {
    this.setState({
      showForm: !this.showForm,
    })
  }

  addNewFood = (e, newFoodName, newFoodCalories, newFoodQuantity, newFoodImage) => {
    // prevents the page from refreshing
    e.preventDefault();

    // if the name is not submitted then don't add the food
    if(newFoodName === "") {
      this.setState({
        showForm: false,
      });
    } else { // if at least the name of the food was submitted then add the food
      console.log(newFoodName, newFoodCalories, newFoodQuantity, newFoodImage);
      // make a clone of the current list
      let foodListClone = [...this.state.foodList]; 
  
      let newFoodObj = {
        name: newFoodName,
        calories: newFoodCalories,
        quantity: newFoodQuantity,
        image: newFoodImage,
      }
  
      
      foodListClone.push(newFoodObj);
      this.state.foodAdded.push(newFoodObj);
  
      this.setState({
        foodList: foodListClone,
        showForm: false,
      });

      console.log("state list", this.state.foodList)
    console.log("original list", foods)
    }
  }

  // testF = (x) => {

  //   console.log("state list", this.state.foodList)
  //   console.log("original list", foods)
  //   console.log(x)
  // }

  searchList = (e, foodName) => {
    e.preventDefault();

    let completeList = foods.concat(this.state.foodAdded);

    let filteredFoodList = [...completeList].filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(foodName.toLowerCase())
    });

    this.setState({
      foodList: filteredFoodList,
    })
  }

  render() {
    return (
      <div>
        <h1 className="p-title has-text-centered">Nutrition</h1>
        {/* display the search bar */}
        <SearchBar searchFoodList={this.searchList}/>
        <div className="columns">

          {/* left column */}
          <div className="column">
            {/* display add food button */}
            <AddFoodButton addFoodBtn={this.state.showForm} showFoodForm={this.showAddFoodForm} />
            {/* display the form if the add food button was clicked */}
            {this.state.showForm && <AddFoodForm addFood={this.addNewFood}/>}
            {this.showFood()}
          </div>

          {/* right column */}
          <div className="column">
            {/* right column title */}
            <h2 className="title has-text-centered">Today's food</h2>
            {/* display the todays list */}
            <div>
              <ul>
                {/* add a bullet to the list */}
                {this.showTodaysList()}
              </ul>
              <p>Total: {this.state.todaysCalories} cal</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
