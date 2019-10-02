import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from "./foods.json"
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Summary from './components/Summary';


class App extends Component {
  state ={
    allFoods: foods,
    showFoods: foods, 
    consumedFoods: [],
  }

  toggleForm(){
    const formClasses = document.getElementById("form-div").classList
    const modalClasses = document.getElementById("modal").classList
    if(formClasses.contains("hidden")){
      formClasses.remove("hidden");
      modalClasses.remove("hidden");
    }else{
      document.getElementById("form-div").classList.add("hidden");
      document.getElementById("modal").classList.add("hidden");
    }
  }
  
  displayFoods = () =>{
    return this.state.showFoods.map((food, i)=>{
      return <FoodBox food = {food} key = {i} addFood = {this.updateFoodQuantity}/>
    })
  }

  searchFoods = () =>{
    const search = document.getElementById("search").value.toLowerCase();

    this.setState({
      showFoods: this.state.allFoods.filter((eachFood) => {
        return eachFood.name.toLowerCase().includes(search);
      })
    })

  }

  submitForm = () => {
    this.toggleForm()
    const newFood = {
      name: document.querySelector("input[name='name']").value,
      calories: document.querySelector("input[name='calories']").value,
      image: document.querySelector("input[name='image']").value,
      quantity: document.querySelector("input[name='quantity']").value
    }

    this.state.allFoods.push(newFood);

    this.setState({
      allFoods: this.state.allFoods
    });

    this.updateConsumedFoods();
  }

  updateFoodQuantity = (e) =>{
    const button = e.target
    const quantity = button.parentNode.parentNode.querySelector("input").value;
    for(let i = 0; i < this.state.allFoods.length; i++){
      if(this.state.allFoods[i].name ===button.dataset.name){
        this.state.allFoods[i].quantity = quantity;
      }
    }

    this.updateConsumedFoods();
  }

  updateConsumedFoods = () =>{
    this.setState({
      consumedFoods: this.state.allFoods.filter((eachFood) =>{
        return eachFood.quantity > 0
      })
    })
  }

  render() {
    return (
      <div className="container app">
        <div id = "modal" className = "hidden" onClick = {this.toggleForm}></div>
        <h1 className="has-text-link title is-1">IronNutrition</h1>
        <div className = "is-grouped flex">
          <div className="field">
            <div className="control">
              <input onChange = {this.searchFoods} className="input" id="search" name="search" type="text" placeholder="Search" />
            </div>
          </div>
          <div className="control">
            <button onClick = {this.toggleForm} className="button is-link">Add Food</button>
          </div>
        </div>
        <div className="flex">
          <div id = "food-wrapper">
            {this.displayFoods()}
          </div>
          <div id = "summary-wrapper">
            <Summary foods = {this.state.consumedFoods}/>
          </div>
        </div>
        <FoodForm submitForm={this.submitForm}/>
      </div>
    );
  }
}

export default App;
