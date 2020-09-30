import React, { Component } from 'react'
import foods from '../foods.json'
import FoodBox from './Foodbox'

import { Switch, Route, Redirect, Link } from 'react-router-dom'

class List extends Component {

    constructor() {
        super()
        this.state = {
            foods: foods
        }
    }

    addFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)

        this.setState({ foods: foodsCopy })
    }

    render() {
        return (
            <>
                < Link to="/form" addFood={this.addFood} > Create food</Link >
                {this.state.foods.map(elm => <FoodBox key={elm.id} {...elm} />)}
            </>
        )
    }
}



export default List