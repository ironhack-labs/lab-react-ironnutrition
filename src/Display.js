import React from "react"
import { Component } from "react"
import foods from './foods.json'
import FoodBox from "./FoodBox"
import 'bulma/css/bulma.css'
import NewFoodForm from "./NewFood"

class DisplayFoods extends Component {
    constructor() {
        super()
        this.state = {
            foods

        }
    }

    handleCounter = () => {

        this.setState({
            quantity: this.state.quantity + 1
        })

    }
    addFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }

    render() {
        return (
            <>
                <div>
                    {this.state.foods.map(elm => <FoodBox {...elm} handleCounter={() => this.handleCounter()} />)}
                </div>
                <div>
                    <NewFoodForm NewFood={this.addFood} />
                </div>
            </>
        )
    }
}

export default DisplayFoods