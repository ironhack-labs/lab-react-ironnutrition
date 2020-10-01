import React, { Component } from 'react'
import NewFood from './NewFood'
import FoodBox from './FoodBox'

class FoodList extends Component {
    constructor() {
        super()
        this.state = {
            food: [],
        }
    }

    componentDidMount() {

        this.setState({ food: this.props.data })
    }


    addNewFood = (newFood) => {

        const foodAdd = { name: newFood.foodName, calories: newFood.calories, image: newFood.image, quantity: 0 }
        console.log(foodAdd)
        const foodCopy = [...this.state.food]

        foodCopy.push(foodAdd)
        this.setState({ food: foodCopy })
    }

    render() {

        console.log(this.state)

        return (
            <React.Fragment>
                <NewFood addNewFood={this.addNewFood} />
                { this.state.food.map((food, index) => <FoodBox key={index} data={food} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />)}
            </React.Fragment>
        )
    }
}

export default FoodList