import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';
import foods from './foods.json';
import AddFood from './addFood';

class App extends Component {
  state = {
    foods: foods,
    newFoods: foods,
    name:'',
    calories:'',
    image:'',
   };
  showFoods = () => {
  let allFoods= this.state.foods.map((eachFood, i) => {
  return (
    <FoodBox food={eachFood} />
       );
     });
     return allFoods;
   };
   addAfood=(e) =>{
    e.preventDefault();
    let food = {
      image: this.state.image,
      name: this.state.name,
      calories: this.state.calories
    }
      let newFood = [...this.state.newFoods]
      newFood.push(food)
      this.setState({
        newFoods:newFood
      })
    }              
    setNameAndCalories = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  render() {
    return (
      <div className="App">
      <header>IronNutrition</header>
      {this.showFoods()}
      <button className="button is-info" onClick={()=>{this.addAfood()}}>Add a Food</button>
      </div>
    );
  }
}

export default App;
