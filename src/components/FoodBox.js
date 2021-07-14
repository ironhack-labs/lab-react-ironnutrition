import React from 'react'
import { Component } from "react"
import foods from '../foods.json'
import AddNewFood from './AddNewFood'
import FoodCard from './FoodCard'
import SearchBar from './SearchBar'


class FoodBox extends Component {

    constructor() {
        super()
        this.state = { foods }
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    addFoodToList = newFood => {
        const foodCopy = [...this.state.foods]
        foodCopy.push(newFood)
        this.setState({ foods: foodCopy })
    }

    filterArray = (text) => {
        console.log(text)
        let searchString = text
        let responseData = this.state.foods
        if (searchString.length > 0) {
            responseData = responseData.filter(elm => elm.name.toLowerCase().match(searchString))
        }
        this.setState({ foods: responseData })
    }

    render() {

        return (

            <>
                <AddNewFood addFood={this.addFoodToList} />
                <SearchBar searchFood={this.filterArray} />
                <hr></hr>
                {
                    this.state.foods.map(elm => <FoodCard key={elm.name} {...elm} handleInputChange={() => this.handleInputChange()} />)
                }

            </>
        )
    }
}

export default FoodBox