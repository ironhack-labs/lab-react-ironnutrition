import React, { Component } from 'react'
import Meals from './../foods.json'
import FoodBox from './FoodBox'
import Button from './../Newfood/Button'
import NewMeal from './FoodForm'

class FoodContainer extends Component {

    constructor() {
        super()

        this.state = {

            foods: Meals,
            foodForm: false

        }

    }

    showFoodForm = () => this.setState({ foodForm: !this.state.foodForm })

    addFood = newFood => {
        const mealsCopy = [...this.state.foods]
        mealsCopy.push(newFood)

        this.setState({ foods: mealsCopy, foodForm: !this.state.foodForm  })

    }

    render() {

        console.log(this.state.foodForm)

        const listaComida = this.state.foods

        const foodlist = listaComida.map((elm, idx) => <FoodBox key={idx} {...elm} />)

        return (
            <>
                
                <Button action={this.showFoodForm} />
                {this.state.foodForm ? <NewMeal createNew={ this.addFood}/> : foodlist}
                {foodlist}
                
                
            </>
           )

    }

}

export default FoodContainer