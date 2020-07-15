import React, { Component } from 'react'

import foods from '../foods.json';
import FoodBox from './FoodBox'
import FoodForm from './FoodForm'

class Food extends Component {

    constructor() {
        super()
        this.state = {
            foods,
        }
    }


    insertFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }


    render() {

        return (
            <main>
                <button className="button is-info my-4" onClick={FoodForm}>Add your Food Form</button>

                <h1>Create food!</h1>
                <FoodForm insertFood={this.insertFood} />

                {this.state.foods.map((elem) => <FoodBox {...elem} />)}


                
            </main>
        )
    }
}

export default Food