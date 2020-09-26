import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './Components/foodBox';
import TodayFood from './Components/todayFood';

class App extends React.Component {
  state={
    foodList,
    foodName:'',
    foodCalories:'',
    foodImage:'',
    searchParams:'',
    todayFood: [],
    isFormDisplayed: false,
  }
  
  addQuantity = (foodObject) => {
      let todayFood = this.state.todayFood.slice();
      let found = todayFood.find(element => element.name === foodObject.name);
  
      foodObject.calories *= foodObject.quantity;
      if (found){
        found.quantity += foodObject.quantity;
        found.calories += foodObject.calories;
      } else {
        todayFood.push(foodObject)
      }
      this.setState({
        todayFood
      })
      return(
        <div>
          <TodayFood todayFood={this.state.todayFood} handleDeleteToday={this.handleDeleteToday}/>
        </div>
      )
    }

  toggleForm = () => {
   this.setState({
    isFormDisplayed: !this.state.isFormDisplayed
   })
  }

  handleOnChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const {foodName, foodCalories, foodImage} = this.state;
    const newFoodArray = [{name: foodName, calories: foodCalories, image: foodImage, quantity: 0}, ...this.state.foodList];
    this.setState({
      foodList: newFoodArray,
      foodName: '',
      foodCalories: '',
      foodImage:'',
      todayFood: [],
      isFormDisplayed: false
    })
  }

  handleDelete = (foodName) => {
    const newFoodArray = this.state.foodList.filter((element) => element.name !== foodName);
    this.setState ({
      foodList: newFoodArray
    })
  }

  handleDeleteToday = (foodName) => {
    const newTodayArray = this.state.todayFood.filter((element) => element.name !== foodName);
    this.setState ({
      todayFood: newTodayArray
    })
  }

  render(){
  return (
    <div className="App">
    <button onClick={this.toggleForm}>Add Food</button>
    {this.state.isFormDisplayed && 
    <form onSubmit={this.handleOnSubmit}>
    <label>Name</label>
      <input name="foodName" placeholder="Lasagna" value={this.state.foodName} onChange={(event) => this.handleOnChange(event)}></input>
      <label>Calories</label>
      <input name="foodCalories" placeholder="23" value={this.state.foodCalories} onChange={(event) => this.handleOnChange(event)}></input>
      <label>Image Url</label>
      <input name="foodImage" placeholder="url" value={this.state.foodImage} onChange={(event) => this.handleOnChange(event)}></input>
      <button>Create Food</button>
    </form>
    }
    <div className="field">
    <h2>Search</h2>
      <input className="input is-primary" type="text" placeholder="Pizza" name="searchParams" value={this.state.searchParams} onChange={this.handleOnChange}/>
    </div>
    <div className="food-container">
    <div>
      {this.state.foodList.filter( element => element.name.toLowerCase().includes(this.state.searchParams.toLowerCase())).map((element, index) => <FoodBox food={element} addQuantity={this.addQuantity} handleDelete={this.handleDelete} index={index}></FoodBox>)}
    </div>
    <TodayFood todayFood={this.state.todayFood.slice()} handleDeleteToday={this.handleDeleteToday}/>
    </div>
    </div>
  );
}}

export default App;
