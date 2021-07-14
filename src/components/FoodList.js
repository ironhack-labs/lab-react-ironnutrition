import FoodBox from "./FoodBox"
import React, { Component } from "react"
import foods from './../foods.json'
import NewFoodForm from "./Form"

class FoodList extends Component {
    constructor() {
        super()
        this.state = {           foods        }
    }
    addFoodToList = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }

    
    
    render() {
        return (
            <>
                {this.state.foods.map(elm => <FoodBox {...elm} />)}

                <NewFoodForm addFood={this.addFoodToList} />
            </>
        )
    }
}


export default FoodList