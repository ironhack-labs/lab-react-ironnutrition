import React, { Component } from "react";
import foodsJson from "../foods.json"
import FoodCard from "./FoodCard";
import AddFood from "./AddFood"
import Search from "./Search"

class FoodBox extends Component{

  state = {
    foods: foodsJson,
    clickCount: 0,
    showForm: false
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

  render(){
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
        <Search />
        {
          this.state.foods.map((oneDish, index) => {
            return <FoodCard key={index} {...oneDish} />
          })
        }
      </div>
    )
  }
}

export default FoodBox;