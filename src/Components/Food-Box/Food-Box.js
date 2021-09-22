import foods from './../../foods.json'
import React from 'react'
import SearchBar from './../Search-Bar/Search-bar'
import FoodItem from '../FoodItem/FoodItem'

export default class FoodBox extends React.Component {
    constructor() {
        super()
        this.state = {
            food: foods,
            todaysFoods: []
        }
    }

    displayAll = () => {
        const food = this.state.food
        return (
            food.map((oneDish, idx) => {
                return (
                    <FoodItem addTodaysFood={this.addTodaysFood} oneDish={oneDish} />
                )
            })
        )
    }
    addRandom = () => {
        let random = Math.floor(Math.random() * foods.length)
        const foodCopy = [...this.state.food]
        foodCopy.push(foods[random])
        this.setState({
            food: foodCopy
        })

    }

    filterResult = (name) => {
        this.setState({
            food: foods.filter(food => food.name.includes(name))
        })
    }

    addTodaysFood = ({ name, quantity, calories }) => {
        return (
            <article className="column">
                <h3>Today's Food</h3>
                <p>Name: {name}</p>
                <p>Total: {calories}</p>
                <p>Quantity: {quantity}</p>
            </article>

        )
    }



    render() {
        return (
            <div>
                <SearchBar filter={this.filterResult} />
                <button onClick={() => this.addRandom()}>Add Food</button>
                {this.displayAll()}

            </div>
        )
    }
}

