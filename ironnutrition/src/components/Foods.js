import React, { Component } from 'react'
import foods from '../foods.json';
import FoodCard from './FoodsBox'
import FoodForm from './FoodsForm'
import './FoodsBox.css'
import 'bulma/css/bulma.css';

export default class Food extends Component {
    constructor() {
        super()
        this.state = {
            food: [...foods],
            displayForm: false
        }
    }

    insertNewFood = newFood => {
        const foodCopies = [...this.state.food]
        foodCopies.push(newFood)
        this.setState({ food: foodCopies, displayForm:false })
    }

    render() {
        return (
            <>
                <h1>IronNutrition</h1>
                {this.state.displayForm ? <FoodForm addFood={this.insertNewFood} /> : <button onClick={() => this.setState({ displayForm: true})}>Add new food</button>}
                <div className="box">
                    {this.state.food.map(elm => <FoodCard key={elm.id} {...elm} listOfFoods={() => this.state.food(elm.id)} />)}
                </div>
            </>
        )
    }

}
