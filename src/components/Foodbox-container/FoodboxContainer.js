import React, { Component } from 'react'

import "./FoodboxContainer.css"

import foods from "../../foods.json"

import FoodBox from "../Foodbox/FoodBox"
import Button from "../Button/Button"
import AddFoodForm from "../AddFoodForm/AddFoodForm"
import SearchBar from "../SearchBar/SearchBar"

class FoodBoxContainer extends Component {
    constructor() {
        super()
        this.state = {
            foods,
            isFormVisible: false,
            isFiltered: false,
        }
        this.filteredFoods = []
    }
    displayAddFoodForm = () => {
        this.setState({ isFormVisible: !this.state.isFormVisible })
    }
    insertFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }
    changeFilterState = state => this.setState({ isFiltered: state })

    filterFood = nameSearched => {
        this.filteredFoods = this.state.foods.filter(food => food.name.toLowerCase().includes(nameSearched.toLowerCase()))
    }
    render() {
        const foodToDisplay = this.state.isFiltered ? this.filteredFoods : this.state.foods
        const foodBoxes = foodToDisplay.map((food, i) => <FoodBox key={i} {...food} />)
        return (
            <main>
                <SearchBar filterFood={this.filterFood} changeFilterState={this.changeFilterState} />
                <Button onClick={this.displayAddFoodForm} />
                {this.state.isFormVisible && <AddFoodForm insertFood={this.insertFood} />}
                {foodBoxes}
            </main>
        )
    }
}

export default FoodBoxContainer



