import React, { Component } from "react";
import foods from "../foods.json"
import FoodCard from './FoodCard'
import AddFood from './AddFood'
import SearchBar from './SearchBar'

class FoodBox extends Component{
    constructor(){
        super();
        this.state = {
            foodList: foods, 
            showForm: false
        }
    }

    toogleAddButton = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    
    addFoodHandler = (theFood) => {
        const foodsCopy = [...this.state.foodList];
        foodsCopy.push(theFood);
        this.setState({
          foodList: foodsCopy,
          showForm: false
        })
      }

      search = (searchName) => {
        let foodDisplay = [...this.state.foodList]
        foodDisplay = foodDisplay.filter(food => food.name.toLowerCase().includes(searchName.toUpperCase()))
        this.setState({
            foodList: foodDisplay
        })
      };

    render(){
        return(
            <div>
                <button onClick={() => this.toogleAddButton()}>
                    Add new food
                </button>
                {
                    this.state.showForm &&  <AddFood addTheFood={this.addFoodHandler}/>
                }
               
                <SearchBar searchFood={this.search}/>

                {
                    this.state.foodList.map((oneFood, index) => {
                        return <FoodCard key={index} {...oneFood}/>
                    })
                }
            </div>
        )
    }
}

export default FoodBox;