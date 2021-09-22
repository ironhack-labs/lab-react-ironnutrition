import { render } from "@testing-library/react"
import React from "react"

class AddCuantity extends React.Component {

    state = {
        moreCuantity: [],
        total: 0
    }

    counterCalories = () => {
        return this.state.moreCuantity.map(food => {
            this.setState = {
                total: this.state.total + food.calories
            }
        })
    }

    displayFoods = () => {
        return this.state.moreCuantity.map(food => {
            <li>{food.name} - {food.calories} Cal</li>
        })
    }

    render() {
        return (
            <div>
                <h2>Today's Foods</h2>
                <ul>
                    {this.displayFoods()}
                </ul>
                <p>Total: {this.counterCalories} </p>
            </div>
        )
    }
}

export default AddCuantity