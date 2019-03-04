import React, { Component } from "react";
import foodsJson from "../foods.json"
import FoodCard from "./FoodCard";
import AddFood from "./AddFood"
import Search from "./Search"


class FoodBox extends Component{

  state = {
    foods: foodsJson,
    clickCount: 0,
    showForm: false,
    calories: 0
  }

  handleAddFood = (newFood) => {
    const copyOfFoods = [...this.state.foods]
    copyOfFoods.push(newFood)
    this.setState({
      foods: copyOfFoods
    })
  }
   
  toggleButton = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  searchForFood = index => {
    let matches = [];
    this.state.foods.forEach(element => {
      if(element.name.toLowerCase().indexOf(index.toLowerCase(), 0) > -1){
        matches.push(element)
      } 
      if(matches.length > 0){
        this.setState({
          foods: matches
        }) 
      } else {
        this.setState({
          foods : foodsJson
        })
      }
    })
  }

  clickAdd = () => {
    this.setState({
      clickCount: this.state.clickCount+1,

    })
  }

  clickSubstract = () => {
    this.setState({
      clickCount: this.state.clickCount-1
    })
    if(this.state.clickCount <= 0){
      this.setState({
        clickCount: 0
      })
    }
  }

  render(){
    console.log(this.state.clickCount);
    return(
      <div>
        <button className="button-secondary" onClick={this.toggleButton}>
          {
            this.state.showForm ? "Hide Form" : "Add Food"
          }
        </button>
        {
          this.state.showForm && <AddFood AddTheFood={this.handleAddFood}/>
        }
        <Search searchFood={this.searchForFood}/>
        {
          this.state.foods.map((oneDish, index) => {
            return <FoodCard key={index} {...oneDish} clickCountAdd={this.clickAdd} clickCountSubstract={this.clickSubstract}/>
          })
        }
        <div className="today-list">
          <h1>Today´s foods</h1>
          <h3>Total: {this.state.initialCalories} calories</h3>
        </div>
      </div>
    )
  }
}

export default FoodBox;